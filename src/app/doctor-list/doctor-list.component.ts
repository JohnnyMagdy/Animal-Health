import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IDoctor } from '../models/Doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;

  show = false;

  doctors: IDoctor[] = [];

  columnsToDisplay = ["id","userName","phoneNumber","isActivated"];

  constructor(private doctorService:DoctorService, private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe({
      next: (data)=>{
        this.doctors = data as unknown as IDoctor[];
        
        this.cdf.detectChanges();
        this.show = true;
      }
    });
  }
  
}
