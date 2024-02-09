import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-user-page',
  templateUrl: './login-user-page.component.html',
  styleUrls: ['./login-user-page.component.css'],
})
export class LoginUserPageComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  registerForm: FormGroup = this.formbuilder.group({
    username: new FormControl(""),
    nombre: new FormControl(""),
    apellidos: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl("")
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

