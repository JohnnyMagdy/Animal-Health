import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://andrew100-001-site1.etempurl.com/api/Admin/'

  getUpcomingAppointments(id: string) {
    this.http.get(this.baseUrl + `DisplayDoctorUpcomingAppointments?Id=${id}`)
  }
}
