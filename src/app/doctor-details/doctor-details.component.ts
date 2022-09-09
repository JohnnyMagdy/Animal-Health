import { Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
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

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctorDetails();
  }

  getDoctorDetails() {
    return this.doctorService.getDoctotId()
    .pipe(switchMap(id => {
      return forkJoin([this.doctorService.getDoctorDetails(id), this.doctorService.getDoctorSchedule(id)])
    }))
    .subscribe(
      (data) => {
        this.doctor = data[0];
        this.doctor.schedule = data[1];
        
        this.loading = false;
      }
    );

    // return this.doctorService.getDoctotId().subscribe({
    //   next: (doctorId) => {
    //     if (doctorId && this.cashedId !== doctorId) {
    //       this.cashedId = doctorId;
    //       this.doctorService.getDoctorDetails(doctorId).subscribe({
    //         next: (data) => {
    //           this.doctor = data;
    //           this.loading = false;
    //         }
    //       })
    //     }
    //   }
    // });
  }
}
