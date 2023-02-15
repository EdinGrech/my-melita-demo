import { Component } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth.service';
import { loginDt } from './loginInterface/loginDt';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  pattern = new RegExp(
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
  );
  validEmail: boolean = false;

  hide: boolean = true;
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private loginAuthService: LoginAuthService) {}
  validateEmail() {
    console.log(this.validEmail);
    if (!this.pattern.test(this.username)) {
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }
  }
  
  loginBtnPressed() {
    const loginData: loginDt = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    };
    this.loginAuthService.login(loginData);
  }
}
