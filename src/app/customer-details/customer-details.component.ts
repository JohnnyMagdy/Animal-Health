import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  id='0083655c-2bca-43c6-92ee-20ecef1f626d';

  ngOnInit(): void {
  }

  getPreviousAppointments(){
    return this.customerService.getCustomerPreviousAppointments(this.id).subscribe({
      next:(data)=>{
        console.log(data);
      }
    });
  }
  getUpcomingAppointments(){
    return this.customerService.getCustomerUpcomingAppointments(this.id).subscribe({
      next:(data)=>{
        console.log(data);
      }
    });
  }

}
