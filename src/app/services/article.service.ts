import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle, IArticleResult } from '../models/Article';
import { IPostResult } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseUrl = 'http://andrew100-001-site1.etempurl.com/api/Admin/'

  constructor(private http: HttpClient) { }

  getAllArticles(page: number): Observable<IArticleResult> {
    return this.http.get<IArticleResult>(this.baseUrl + `DisplayAllArticles?counter=${page}`);
  }

  getArticleDetails(): Observable<IArticle> {
    return this.http.get<IArticle>(this.baseUrl + '');
  }

  addArticle(data: IArticleResult) {
    return this.http.post(this.baseUrl + 'AddArticle', data);
  }

  editArticle(data: IArticleResult) {
    return this.http.post(this.baseUrl + 'EditArticle', data);
  }

  getAllPosts(page: number): Observable<IPostResult> {
    return this.http.get<IPostResult>(this.baseUrl + `DisplayAllPosts?counter=${page}`);
  }

  deleteArticle(id: string) {
    return this.http.post(this.baseUrl + `DeleteArticle?Id=${id}`, {});
  }

  deletePost(id: string) {
    return this.http.post(this.baseUrl + `DeletePost?Id=${id}`, {});
  }
}
