import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { IArticle } from '../models/Article';
import { ICustomer } from '../models/Customer';
import { IDoctor } from '../models/Doctor';
import { ITeleconsultation } from '../models/Teleconsultaion';
import { ArticleService } from '../services/article.service';
import { CustomerService } from '../services/customer.service';
import { DoctorService } from '../services/doctor.service';
import { TeleconsultaionService } from '../services/teleconsultaion.service';

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
  @Input() resultsNumber: number = 0;

  @Input() component: string = '';

  @Output() customers = new EventEmitter<ICustomer[]>();
  @Output() doctors = new EventEmitter<IDoctor[]>();
  @Output() teleconsultaions = new EventEmitter<ITeleconsultation[]>();
  @Output() articles = new EventEmitter<IArticle[]>();

  constructor(private customerService: CustomerService, private doctorService: DoctorService, private teleconsultationService: TeleconsultaionService, private articleService: ArticleService) {
  }

  ngOnInit(): void {
  }

  hasPrevious() {
    if (this.currentPage <= 1) {
      return false;
    } else {
      return true;
    }
  }

  hasNext() {
    if (this.currentPage === this.numberOfPages) {
      return false;
    } else {
      return true;
    }
  }

  getPrevious() {
    if (this.hasPrevious()) {
      this.currentPage--;
      if (this.component == 'customer') {
        this.getPreviousOrNextCustomer();
      }
      if (this.component == 'doctor') {
        this.getPreviousOrNextDoctor();
      }
      if (this.component == 'tele') {
        this.getPreviousOrNextTeleconsultation();
      }
    }
  }
  getNext() {
    if (this.hasNext()) {
      this.currentPage++;
      if (this.component == 'customer') {
        this.getPreviousOrNextCustomer();
      }
      if (this.component == 'doctor') {
        this.getPreviousOrNextDoctor();
      }
      if (this.component == 'tele') {
        this.getPreviousOrNextTeleconsultation();
      }
    }
  }

  getPreviousOrNextCustomer() {
    this.customerService.getCustomers(this.currentPage).subscribe({
      next: (data) => {
        this.customers.emit(data.content);
      }
    });
  }

  getPreviousOrNextDoctor() {
    this.doctorService.getDoctors(this.currentPage).subscribe({
      next: (data) => {
        this.doctors.emit(data.content);
      }
    });
  }

  getPreviousOrNextTeleconsultation() {
    this.teleconsultationService.getTeleconsultaions(this.currentPage).subscribe({
      next: (data) => {
        this.teleconsultaions.emit(data);
      }
    });
  }

  getPreviousOrNextArticle() {
    this.articleService.getAllArticles(this.currentPage).subscribe({
      next: (data) => {
        this.articles.emit(data.content);
      }
    });
  }

}
