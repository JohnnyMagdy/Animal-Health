import { Component, OnInit, Input } from '@angular/core';
import { IAppointment } from '../models/Appointment';

@Component({
  selector: 'app-appointment-card',
  templateUrl: './appointment-card.component.html',
  styleUrls: ['./appointment-card.component.css']
})
export class AppointmentCardComponent implements OnInit {
  @Input() upcomingAppointments: IAppointment[] = [];
  @Input() previousAppointments: IAppointment[] = [];

  @Input() upcoming: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
