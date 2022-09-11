import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer, ICustomerResult } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'http://andrew100-001-site1.etempurl.com/api/Admin/'

  constructor(private http: HttpClient) { }

  public getCustomers(page:number):Observable<ICustomerResult>{
    return this.http.get<ICustomerResult>(this.baseUrl+`DisplayAllCustomers?counter=${page}`);
  }

  public getCustomerPreviousAppointments(id:string){
    return this.http.get<ICustomer>(this.baseUrl+`DisplayCustomerPreviousAppointments?Id=${id}`);
  }

  public getCustomerUpcomingAppointments(id:string){
    return this.http.get<ICustomer>(this.baseUrl+`DisplayCustomerUpcomingAppointments?Id=${id}`);
  }
}
