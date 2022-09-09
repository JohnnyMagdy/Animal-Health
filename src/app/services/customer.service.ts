import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPeopleRes } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomers(){
    return this.http.get<IPeopleRes>('http://davidsamy-001-site1.dtempurl.com/api/Admin/SeeMoreCustomers');
  }
}
