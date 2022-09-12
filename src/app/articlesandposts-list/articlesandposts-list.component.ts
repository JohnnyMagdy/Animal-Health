import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IArticle } from '../models/Article';
import { IPost } from '../models/Post';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articlesandposts-list',
  templateUrl: './articlesandposts-list.component.html',
  styleUrls: ['./articlesandposts-list.component.css']
})
export class ArticlesandpostsListComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  show = false;

  currentPage: number = 0;
  numberOfPages: number = 0;
  article = true;

  posts: IPost[] = [];
  articles: IArticle[] = [];
  displayCols = ['title', 'date', 'status', 'type', 'authorName', 'publishDate', 'lastModifiedBy', 'editDate', 'action'];

  constructor(private articleService: ArticleService, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getAllArticles(1).subscribe({
      next: (data) => {
        this.articles = data.content;
        this.currentPage = data.currentPage;
        this.numberOfPages = data.totalPages;

        this.show = true;
      }
    });
  }

  getAllPosts() {
    this.articleService.getAllPosts().subscribe({
      next: (data) => {
        this.posts = data.content;
        this.currentPage = data.currentPage;
        this.numberOfPages = data.totalPages;

        this.show = true;
        console.log(data);
        
      }
    });
  }

  activateView(view: string) {
    var articleButtonElement = document.getElementById('Article');
    var postButtonElement = document.getElementById('Post');

    if (view === 'Article') {
      articleButtonElement?.classList.add('active-btn');
      this.deactivateView(postButtonElement);
      this.article = true;
    } else {
      if (view === 'Post') {
        postButtonElement?.classList.add('active-btn');
        this.deactivateView(articleButtonElement);
        this.article = false;
      }
    }
  }
  deactivateView(view: HTMLElement | null) {
    view?.classList.remove('active-btn');
  }

}
