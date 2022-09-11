import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ITeleconsultation } from '../models/Teleconsultaion';
import { TeleconsultaionService } from '../services/teleconsultaion.service';

@Component({
  selector: 'app-teleconsultations-list',
  templateUrl: './teleconsultations-list.component.html',
  styleUrls: ['./teleconsultations-list.component.css']
})
export class TeleconsultationsListComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  show = false;
  columnsToDisplay:string[] = ['customerId', 'customerName', 'doctorId', 'doctorName', 'appointmentId', 'startTime', 'status'];

  teleconsultaions: ITeleconsultation[] = [];

  currentPage: number = 0;
  numberOfPages: number = 0;

  constructor(private teleconsultaionService: TeleconsultaionService, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getTeleconsultaions();
  }

  getTeleconsultaions() {
    this.teleconsultaionService.getTeleconsultaions(1).subscribe({
      next: (data) => {
        this.teleconsultaions = data;
        // this.currentPage = data.currentPage;
        // this.totalPages = data.totalPages;

        this.cdf.detectChanges();
        this.show = true;
      }
    });
  }

}
