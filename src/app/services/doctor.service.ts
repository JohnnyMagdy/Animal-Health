import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDoctor, IDoctorResult } from '../models/Doctor';
import { IDoctorDetails } from '../models/DoctorDetails';
import { ISchedule } from '../models/Schedule';
import { ISlot } from '../models/Slot';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseUrl = 'http://andrew100-001-site1.etempurl.com/api/Admin/';

  constructor(private http: HttpClient) { }

  private doctorId = new BehaviorSubject<string>('');

  public getDoctors(page:number): Observable<IDoctorResult> {
    return this.http.get<IDoctorResult>(this.baseUrl+`DisplayAllDoctors?counter=${page}`);
  }

  public getDoctorDetails(id: string): Observable<IDoctorDetails> {
    return this.http.get<IDoctorDetails>(this.baseUrl+`DisplayDoctorDetails?Id=${id}`);
  }

  public addDoctor(doctor: IDoctorDetails): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl+'AddDoctor', doctor);
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

  public getDoctorSlots(id:string):Observable<ISlot[]>{
    return this.http.get<ISlot[]>(this.baseUrl+``)
  }
}
