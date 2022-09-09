import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomer } from '../models/Customer';
import { IDoctor } from '../models/Doctor';
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

  @Input() currentPage: number = 0;
  @Input() numberOfPages: number = 0;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private doctorService: DoctorService, private cdf: ChangeDetectorRef) { }

  doctorDataSource = new MatTableDataSource(this.doctorsData);
  customerDataSource = new MatTableDataSource(this.customersData)

  ngAfterViewInit() {

    if (this.doctorsData.length !== 0) {
      console.log(this.doctorsData);
      
      this.doctorDataSource = new MatTableDataSource(this.doctorsData);

      this.doctorDataSource.sort = this.sort;
    }
    if (this.customersData.length !== 0) {
      this.customerDataSource = new MatTableDataSource(this.customersData);

      this.customerDataSource.sort = this.sort;
    }
  }

  clicked(id: string): void {
    this.doctorService.changeActivation(id).subscribe();
  }

  showDetails(id: string) {
    this.Details = true;
  }

  hideDetails() {
    this.Details = false;
  }

  setId(id: string) {
    this.doctorService.setDoctorId(id);
  }

  setCustomer(customers: ICustomer[]) {
    this.customersData = customers;
    console.log(this.customersData);

    this.customerDataSource = new MatTableDataSource(this.customersData);

    this.customerDataSource.sort = this.sort;
  }

}
