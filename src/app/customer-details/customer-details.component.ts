import { Component, OnInit } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';
import { IAppointment } from '../models/Appointment';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  upcomingAppointments: IAppointment[] = [];
  previousAppointments: IAppointment[] = [];

  ngOnInit(): void {
    this.getPreviousAppointments();
    this.getUpcomingAppointments();
  }

  getPreviousAppointments() {
    return this.customerService.getCustomerId()
      .pipe(switchMap(id => {
        return forkJoin([
          this.customerService.getCustomerPreviousAppointments(id),
        ])
      }))
      .subscribe(
        data => {
          this.previousAppointments = data[0];
        }
      )
  }
  getUpcomingAppointments() {
    return this.customerService.getCustomerId()
      .pipe(switchMap(id => {
        return forkJoin([
          this.customerService.getCustomerUpcomingAppointments(id),
        ])
      }))
      .subscribe(
        data => {
          this.upcomingAppointments = data[0];
        }
      )
  }

}
