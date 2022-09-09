import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faLessThanEqual, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IPeople } from '../models/People';
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
  columnsToDisplay = ['birth_year'];

  @Input() teleconsultaionsList:ITeleconsultation[] = [];
  people:IPeople[] = [];

  constructor(private teleconsultaionService: TeleconsultaionService, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getTeleconsultaions();
  }

  getTeleconsultaions(){
    this.teleconsultaionService.getTeleconsultaions().subscribe({
      next: (data)=>{
        this.people = data.results;
        this.cdf.detectChanges();
        this.show = true;
      }
    });
  }

}
