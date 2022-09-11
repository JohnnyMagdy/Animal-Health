import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IArticle } from '../models/Article';
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

  article: IArticle[] = [];
  displayCols = ['title', 'date', 'status', 'type', 'authorName', 'publishDate', 'lastModifiedBy', 'editDate', 'action'];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getAllArticles(1).subscribe({
      next: (data) => {
        console.log(data);
        this.article = data.content;
        this.currentPage = data.currentPage;
        this.numberOfPages = data.totalPages;

        this.show = true;
      }
    });
  }

  getAllPosts() {
    // this.articleService.getAllArticles().subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.article = data.content;
    //     this.currentPage = data.currentPage;
    //     this.numberOfPages = data.totalPages;

    //     this.show = true;
    //   }
    // });
  }

  activateView(view: string) {
    var articleButtonElement = document.getElementById('Article');
    var postButtonElement = document.getElementById('Post');

    if (view === 'Article') {
      articleButtonElement?.classList.add('active-btn');
      this.deactivateView(postButtonElement);
    } else {
      if (view === 'Post') {
        postButtonElement?.classList.add('active-btn');
        this.deactivateView(articleButtonElement);
      }
    }
  }
  deactivateView(view: HTMLElement | null) {
    view?.classList.remove('active-btn');
  }

}
