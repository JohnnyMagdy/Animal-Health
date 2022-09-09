import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeopleRes } from '../models/People';

@Injectable({
  providedIn: 'root'
})
export class TeleconsultaionService {

  constructor(private http:HttpClient) { }

  public getTeleconsultaions(): Observable<IPeopleRes> {
    return this.http.get<IPeopleRes>('https://swapi.dev/api/people/');
  }
}
