import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private doctorService: DoctorService) { }

  dataSource = new MatTableDataSource(this.doctorsData);

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.doctorsData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

}
