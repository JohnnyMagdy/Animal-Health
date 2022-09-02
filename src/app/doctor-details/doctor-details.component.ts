import { Component, Input, OnInit } from '@angular/core';
import { IDoctor } from '../models/Doctor';
import { IPeople } from '../models/People';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  // @Input() doctors: IDoctor = 
  //   {
  //     id:'dsadwa',
  //     title: 'doctor',
  //     fullName: 'John0',
  //     email: 'j@j0.com',
  //     mobileNumber: '123',
  //     biography: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
  //     gender: 'male',
  //     fees:12,
  //     slotDuration:1
  //   };
  
  @Input() people: IPeople = {} as IPeople;

  constructor() { }

  ngOnInit(): void {
    
  }

}
