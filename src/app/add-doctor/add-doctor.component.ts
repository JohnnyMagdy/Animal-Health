import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  addDoctorForm: FormGroup = this.fb.group({
    UserName: ['', [Validators.required]],
    Specialization: ['', [Validators.required]],

    Email: ['', [Validators.required, Validators.email]],
    PhoneNumber: ['', [Validators.required]],

    Gender: ['', [Validators.required]],
    NormalFees: ['', [Validators.required]],

    Biography: ['', [Validators.required]],

  })

  nrSelect = "default";

  constructor(private fb:FormBuilder, private doctorService:DoctorService) { }

  ngOnInit(): void {
    console.log(this.addDoctorForm.invalid);
    
  }

  onSubmitNewDoctor():void {
    console.log(this.addDoctorForm.value);
    //this.doctorService.addDoctor(this.addDoctorForm.value);
  }

}
