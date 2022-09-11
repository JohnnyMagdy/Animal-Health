import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle, IArticleResult } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = 'http://andrew100-001-site1.etempurl.com/api/Admin/'

  constructor(private http: HttpClient) { }

  getAllArticles(page:number):Observable<IArticleResult>{
    return this.http.get<IArticleResult>(this.baseUrl+`DisplayAllArticles?counter=${page}`);
  }

  getArticleDetails():Observable<IArticle>{
    return this.http.get<IArticle>(this.baseUrl+'');
  }

  addArticle(){
    return this.http.post(this.baseUrl+'',{});
  }

  editArticle(){
    return this.http.post(this.baseUrl+'',{});
  }
}
