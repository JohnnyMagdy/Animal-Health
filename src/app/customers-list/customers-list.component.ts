import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ICustomer } from '../models/Customer';
import { IPeople } from '../models/People';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;
  
  // customers:ICustomer[] = [];
  people:IPeople[] = [];
  displayCols: string[] = ['name'];

  show = false;

  constructor(private customerService:CustomerService, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe({
      next: (data)=>{
        this.people = data.results;
        this.cdf.detectChanges();
        this.show = true;
      }
    });
  }

}
