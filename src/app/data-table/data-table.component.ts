import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IPeople } from '../models/People';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  Details = false;

  row:IPeople = {} as IPeople;

  @Input() columnsToDisplay = ['id'];
  @Input() peopleData: IPeople[] = [];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cdf: ChangeDetectorRef) { }

  dataSource = new MatTableDataSource(this.peopleData);

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.peopleData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  clicked(): void {
    console.log('clicked');
  }

  showDetails(myRow:IPeople) {
    this.Details = true;
    this.row = myRow;
  }
  hideDetails() {
    this.Details = false;
  }
}
