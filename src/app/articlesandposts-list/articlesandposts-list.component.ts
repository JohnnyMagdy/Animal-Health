import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IArticle } from '../models/Article';
import { IPost } from '../models/Post';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articlesandposts-list',
  templateUrl: './articlesandposts-list.component.html',
  styleUrls: ['./articlesandposts-list.component.css']
})
export class ArticlesandpostsListComponent implements OnInit {
  faPlus = faPlus;

  faMagnifyingGlass = faMagnifyingGlass;
  show = false;

  currentPage: number = 0;
  numberOfPages: number = 0;
  article = true;

  public trigger: number = 0;

  posts: IPost[] = [];
  articles: IArticle[] = [];
  displayColsArticle = ['title', 'status', 'type', 'authorName', 'publishDate', 'editDate', 'action'];
  displayColsPost = ['postId', 'doctorName', 'category', 'isPublished', 'publishDate', 'action'];

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

        this.rerender();
      }
    });
  }

  getAllPosts() {
    this.articleService.getAllPosts(1).subscribe({
      next: (data) => {
        this.posts = data.content;
        this.currentPage = data.currentPage;
        this.numberOfPages = data.totalPages;

        this.show = true;
        this.rerender();
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

  deleteArticle(id: string) {
    this.articleService.deleteArticle(id).subscribe({
      error: ()=>{this.rerender()}
    });
  }
  
  deletePost(id: string) {
    this.articleService.deletePost(id).subscribe({
      next: data => console.log(data)
    });
  }

  public rerender(): void {
    this.trigger++;
  }
}
