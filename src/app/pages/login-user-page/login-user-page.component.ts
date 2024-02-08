import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-user-page',
  templateUrl: './login-user-page.component.html',
  styleUrls: ['./login-user-page.component.css']
})
export class LoginUserPageComponent implements OnInit {
  loginForm: FormGroup = this.formbuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });

  registerForm: FormGroup = this.formbuilder.group({
    username: ["", Validators.required],
    nombre: ["", Validators.required],
    apellidos: ["", Validators.required],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  });

  showLoginForm: boolean = true;
  showRegisterForm: boolean = false;

  constructor(private formbuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.showLoginForm && this.loginForm.valid) {
      this.router.navigate(['/usuarios']);
    } else if (!this.showLoginForm && this.registerForm.valid) {
      this.router.navigate(['/usuarios']);
    }
  }

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
  }
}

