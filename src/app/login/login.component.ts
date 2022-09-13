import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(
    private fb: FormBuilder,
    private auth: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.auth.Login(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/doctorslist']);
        console.log(response);
      }
    })
  }
}
