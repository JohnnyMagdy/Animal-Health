import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL: string = 'http://andrew100-001-site1.etempurl.com/api/Admin';

  constructor(
    private http: HttpClient) { }

  Login(formData: IUser) {
    return this.http.post<IUser>(`${this.baseURL}/Login`, formData);
  }
}
