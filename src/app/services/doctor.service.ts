import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDoctor } from '../models/Doctor';
import { IDoctorDetails } from '../models/DoctorDetails';
import { ISchedule } from '../models/Schedule';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseUrl = 'http://andrew100-001-site1.etempurl.com/api/Admin/';

  constructor(private http: HttpClient) { }

  private doctorId = new BehaviorSubject<string>('');

  public getDoctors(): Observable<IDoctor> {
    return this.http.get<IDoctor>(this.baseUrl+'DisplayAllDoctors');
  }

  public getDoctorDetails(id: string): Observable<IDoctorDetails> {
    return this.http.get<IDoctorDetails>(this.baseUrl+`DisplayDoctorDetails?Id=${id}`);
  }

  public addDoctor(doctor: IDoctorDetails): Observable<IDoctor> {
    return this.http.post<IDoctor>('', doctor);
  }

  public setDoctorId(id:string){
    this.doctorId.next(id);
  }

  public getDoctotId(){
    return this.doctorId;
  }

  public changeActivation(id: string) {
    return this.http.post(this.baseUrl+`ChangeActivation?Id=${id}`, {});
  }

  public getDoctorSchedule(id:string):Observable<ISchedule[]>{
    return this.http.get<ISchedule[]>(this.baseUrl+`DisplayDoctorSchedule?Id=${id}`);
  }

}
