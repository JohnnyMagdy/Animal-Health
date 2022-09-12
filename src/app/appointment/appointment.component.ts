import { Component, OnInit, Input } from '@angular/core';
import { IAppointment } from '../models/Appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  preview = 'Upcoming';

  @Input() upcomingAppointments: IAppointment[] = [];
  @Input() previousAppointments: IAppointment[] = [];

  upcoming = true;

  constructor() { }

  ngOnInit(): void {

  }

  PreviewUpcoming() {
    if (this.preview !== 'Upcoming') {
      var prevElem = document.getElementById('previous');
      var upElem = document.getElementById('upcoming');
      prevElem?.classList.remove('btn-active');
      upElem?.classList.add('btn-active');

      this.preview = 'Upcoming';
      this.upcoming = true;
    }
  }

  PreviewPrevious() {
    if (this.preview !== 'Previous') {
      var prevElem = document.getElementById('previous');
      var upElem = document.getElementById('upcoming');
      prevElem?.classList.add('btn-active');
      upElem?.classList.remove('btn-active');

      this.preview = 'Previous';
      this.upcoming = false;
    }
  }

}
