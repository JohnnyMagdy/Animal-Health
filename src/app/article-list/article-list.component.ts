import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IArticle } from '../models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  show = false;
  currentPage: number = 0;
  numberOfPages:number = 0;
  article:IArticle[] = [];
  displayCols = ['name','date','status','type','createdBy','createdOn','lastModifiedBy','lastModifiedOn'];


  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
  }

  getAllArticles(){
    this.articleService.getAllArticles().subscribe({
      next:(data)=>{
        console.log(data);
        this.article = data;
      }
    });
  }

}
