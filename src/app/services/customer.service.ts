import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAppointment } from '../models/Appointment';
import { ICustomer, ICustomerResult } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'http://andrew100-001-site1.etempurl.com/api/Admin/'

  private customerId = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  public setCustomerId(id:string){
    this.customerId.next(id);
  }

  public getCustomerId(){
    return this.customerId;
  }

  public getCustomers(page:number):Observable<ICustomerResult>{
    return this.http.get<ICustomerResult>(this.baseUrl+`DisplayAllCustomers?counter=${page}`);
  }

  public getCustomerPreviousAppointments(id:string):Observable<IAppointment[]>{
    return this.http.get<IAppointment[]>(this.baseUrl+`DisplayCustomerPreviousAppointments?Id=${id}`);
  }

  public getCustomerUpcomingAppointments(id:string):Observable<IAppointment[]>{
    return this.http.get<IAppointment[]>(this.baseUrl+`DisplayCustomerUpcomingAppointments?Id=${id}`);
  }
}
