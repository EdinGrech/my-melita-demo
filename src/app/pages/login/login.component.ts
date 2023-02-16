import { Component } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth.service';
import { loginDt } from './loginInterface/loginDt';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { Route } from '@angular/router';

export class emailErrorStateMatcher implements ErrorStateMatcher {
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

  matcher = new emailErrorStateMatcher();

  pattern = new RegExp(
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
  );

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.pattern),
  ]);

  validEmail: boolean = false;

  hide: boolean = true;
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  loading: boolean = false;
  responce: any;

  constructor(private loginAuthService: LoginAuthService) {}
  
  loginBtnPressed() {
    this.loading = true;
    const loginData: loginDt = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    };

    //subscribe to the login service
    this.loginAuthService.login(loginData)
    this.loginAuthService.get().subscribe(
      (res) => {
        this.responce = res;
        this.loading = false;
        console.log(this.responce); //debugging ---------
      },
      (err) => {
        this.responce = err;
        this.loading = false;
        console.log(this.responce); //debugging ----------
      }
    );
  }
}
