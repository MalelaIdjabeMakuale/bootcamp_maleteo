import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-login-user-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-user-page.component.html',
  styleUrls: ['./login-user-page.component.css'],
})
export class LoginUserPageComponent implements OnInit {

  ngOnInit(): void {  }

  showLoginForm: boolean = true;
  showRegisterForm: boolean = false;

  constructor(
    private router: Router,
    private servicesService: ServicesService
  ) { }
  
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    userName: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    if (this.showLoginForm && this.loginForm.valid) {
      const loginFormData = this.loginForm.value;

      this.servicesService.loginUser(loginFormData);
      console.log(this.loginForm.value);
      // this.router.navigate(['/usuarios']);
    } else if (!this.showLoginForm && this.registerForm.valid) {
      const registerFormData = this.registerForm.value;
      this.servicesService.registerUser(registerFormData);
      console.log(this.registerForm.value);
      // this.router.navigate(['/usuarios']);
    }
  }

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}
