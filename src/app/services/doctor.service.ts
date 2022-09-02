import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPeople, IPeopleRes } from '../models/People';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private http: HttpClient) { }

  public getDoctors(): Observable<IPeopleRes> {
    return this.http.get<IPeopleRes>('https://swapi.dev/api/people/');
  }

}
