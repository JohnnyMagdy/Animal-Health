import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, switchMap } from 'rxjs';
import { IDoctorDetails } from '../models/DoctorDetails';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})

export class DoctorDetailsComponent implements OnInit {

  doctor: IDoctorDetails = {} as IDoctorDetails;
  loading = true;
  cashedId = '';

  deleteSuccess = false;
  msg = '';

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.getDoctorDetails();
  }

  getDoctorDetails() {
    return this.doctorService.getDoctotId()
      .pipe(switchMap(id => {
        return forkJoin([this.doctorService.getDoctorDetails(id),
        this.doctorService.getDoctorSchedule(id),
        this.doctorService.getDoctorPreviousAppointments(id),
        this.doctorService.getDoctorUpcomingAppointments(id)
        ])
      }))
      .subscribe(
        (data) => {
          this.doctor = data[0];
          this.doctor.schedule = data[1];
          this.doctor.previousAppointments = data[2];
          this.doctor.upcomingAppointments = data[3];

          this.loading = false;
        }
      );
  }

  deleteDoctor() {
    if (confirm("Are you sure to delete this doctor?")) {
      return this.doctorService.getDoctotId()
        .pipe(switchMap(id => {
          return forkJoin([this.doctorService.deleteDoctor(id)])
        }))
        .subscribe(
          (data: any) => {
            this.deleteSuccess = data[0].isSuccess;
            this.msg = data[0].message;

            this.delay(3000).then(() => this.router.navigate(['/']));
          }
        );
    } else {
      return;
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
