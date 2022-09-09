import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { ICustomer } from '../models/Customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;

  @Input() currentPage: number = 0;
  @Input() numberOfPages: number = 0;

  @Output() customers = new EventEmitter<ICustomer[]>();

  constructor(private customerService:CustomerService) { 
  }

  ngOnInit(): void {
  }

  hasPrevious(){
    if(this.currentPage <= 1 ){
      return false;
    }else{
      return true;
    }
  }

  hasNext(){
    if(this.currentPage === this.numberOfPages){
      return false;
    }else{
      return true;
    }
  }

  getPrevious(){
    if(this.hasPrevious()){
      console.log('prev');
      
      this.currentPage --;
      this.customerService.getCustomers(this.currentPage).subscribe({
        next: (data)=>{
          this.customers.emit(data.content);
        }
      });
    }
  }
  getNext(){
    if(this.hasNext()){
      console.log('next');

      this.currentPage ++;
      this.customerService.getCustomers(this.currentPage).subscribe({
        next: (data)=>{
          this.customers.emit(data.content);
        }
      });
    }
  }

}
