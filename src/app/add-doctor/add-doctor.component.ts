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

    Bio: ['', [Validators.required]],

  })

  error: boolean = false;
  success: boolean = false;

  nrSelect = "default";

  constructor(private fb: FormBuilder, private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  onSubmitNewDoctor(): void {
    this.error = false;
    this.success = false;
    this.doctorService.addDoctor(this.addDoctorForm.value).subscribe({
      next: (data) => {
        if (data === false) {
          this.error = true;
        } else {
          this.success = true;
          this.addDoctorForm.reset();
        }
      }
    });
  }

}
