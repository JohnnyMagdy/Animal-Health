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
      return forkJoin([this.doctorService.getDoctorDetails(id), this.doctorService.getDoctorSchedule(id)])
    }))
    .subscribe(
      (data) => {
        this.doctor = data[0];
        this.doctor.schedule = data[1];
        console.log(this.doctor.schedule);
        
        
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

  deleteDoctor(){
    return this.doctorService.getDoctotId()
    .pipe(switchMap(id => {
      return forkJoin([this.doctorService.deleteDoctor(id), this.doctorService.getDoctorSchedule(id)])
    }))
    .subscribe(
      (data:any) => {
        this.deleteSuccess = data[0].isSuccess;
        this.msg = data[0].message;

        this.delay(3000).then(()=>this.router.navigate(['/']));
      }
    );
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
