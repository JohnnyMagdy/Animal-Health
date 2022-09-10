import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeopleRes } from '../models/People';
import { ITeleconsultation } from '../models/Teleconsultaion';

@Injectable({
  providedIn: 'root'
})
export class TeleconsultaionService {
  baseUrl = 'http://andrew100-001-site1.etempurl.com/api/Admin/';

  constructor(private http:HttpClient) { }

  public getTeleconsultaions(page:number): Observable<ITeleconsultation[]> {
    //DisplayTeleconsultation
    return this.http.get<ITeleconsultation[]>(this.baseUrl+`DisplayTeleConsuultation?counter=${page}`);
  }
}
