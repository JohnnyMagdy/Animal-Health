import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ICustomer } from '../models/Customer';
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
  customer:ICustomer[] = [];
  displayCols: string[] = ['id','name'];

  currentPage: number = 0;
  numberOfPages: number = 0;

  show = false;

  constructor(private customerService:CustomerService, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers(1).subscribe({
      next: (data)=>{
        this.customer = data.content;
        this.currentPage = data.currentPage;
        this.numberOfPages = data.totalPages;
        
        this.cdf.detectChanges();
        this.show = true;
      }
    });
  }

}
