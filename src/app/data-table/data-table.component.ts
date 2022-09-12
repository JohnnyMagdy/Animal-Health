import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IArticle } from '../models/Article';
import { ICustomer } from '../models/Customer';
import { IDoctor } from '../models/Doctor';
import { IPost } from '../models/Post';
import { ITeleconsultation } from '../models/Teleconsultaion';
import { CustomerService } from '../services/customer.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  Details = false;

  @Input() columnsToDisplay = ['id'];

  @Input() doctorsData: IDoctor[] = [];
  @Input() customersData: ICustomer[] = [];
  @Input() articlesData: IArticle[] = [];
  @Input() postsData: IPost[] = [];
  @Input() teleconsultationsData: ITeleconsultation[] = [];

  @Input() currentPage: number = 0;
  @Input() numberOfPages: number = 0;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private doctorService: DoctorService, private customerService: CustomerService, private cdf: ChangeDetectorRef) { }

  doctorDataSource = new MatTableDataSource(this.doctorsData);
  customerDataSource = new MatTableDataSource(this.customersData);
  teleconsultationDataSource = new MatTableDataSource(this.teleconsultationsData);
  articleDataSource = new MatTableDataSource(this.articlesData);
  postDataSource = new MatTableDataSource(this.postsData);

  ngAfterViewInit() {

    if (this.doctorsData.length !== 0) {
      this.doctorDataSource = new MatTableDataSource(this.doctorsData);
      this.doctorDataSource.sort = this.sort;
    }

    if (this.customersData.length !== 0) {
      this.customerDataSource = new MatTableDataSource(this.customersData);
      this.customerDataSource.sort = this.sort;
    }

    if (this.teleconsultationsData.length !== 0) {
      this.teleconsultationDataSource = new MatTableDataSource(this.teleconsultationsData);
      this.teleconsultationDataSource.sort = this.sort;
    }

    if (this.articlesData.length !== 0) {
      this.articleDataSource = new MatTableDataSource(this.articlesData);
      this.articleDataSource.sort = this.sort;
    }

    if (this.postsData.length !== 0) {
      this.postDataSource = new MatTableDataSource(this.postsData);
      this.postDataSource.sort = this.sort;
    }
  }

  clicked(id: string): void {
    this.doctorService.changeActivation(id).subscribe();
  }

  showDetails() {
    this.Details = true;
  }

  hideDetails() {
    this.Details = false;
  }

  setDoctorId(id: string) {
    this.doctorService.setDoctorId(id);
  }

  setCustomerId(id: string) {
    this.customerService.setCustomerId(id);
  }

  setCustomers(customers: ICustomer[]) {
    this.customersData = customers;

    this.customerDataSource = new MatTableDataSource(this.customersData);

    this.customerDataSource.sort = this.sort;
  }

  setDoctors(doctors: IDoctor[]) {
    this.doctorsData = doctors;

    this.doctorDataSource = new MatTableDataSource(this.doctorsData);

    this.doctorDataSource.sort = this.sort;
  }

  setTeleconsultations(teleconsultations: ITeleconsultation[]) {
    this.teleconsultationsData = teleconsultations;

    this.teleconsultationDataSource = new MatTableDataSource(this.teleconsultationsData);

    this.teleconsultationDataSource.sort = this.sort;
  }

  setArticles(articles: IArticle[]) {
    this.articlesData = articles;

    this.articleDataSource = new MatTableDataSource(this.articlesData);

    this.articleDataSource.sort = this.sort;
  }

  setPosts(posts: IPost[]) {
    this.postsData = posts;

    this.postDataSource = new MatTableDataSource(this.postsData);

    this.postDataSource.sort = this.sort;
  }

}
