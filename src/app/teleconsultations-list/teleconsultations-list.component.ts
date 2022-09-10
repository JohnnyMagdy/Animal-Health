import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faLessThanEqual, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
  columnsToDisplay = ['customerID','customerName','doctorID','doctorName','appointmentID','date','status'];

  teleconsultaions:ITeleconsultation[] = [];

  constructor(private teleconsultaionService: TeleconsultaionService, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getTeleconsultaions();
  }

  getTeleconsultaions(){
    this.teleconsultaionService.getTeleconsultaions(1).subscribe({
      next: (data)=>{
        this.teleconsultaions = data;
        this.cdf.detectChanges();
        this.show = true;
        console.log(data);
        
      }
    });
  }

}
