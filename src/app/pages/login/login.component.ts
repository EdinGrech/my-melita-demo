import { Component } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth.service';
import { loginDt } from './loginInterface/loginDt';
import { ErrorStateMatcher } from '@angular/material/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

export class emailErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control?.invalid &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
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
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
  );

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.pattern),
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  validEmail: boolean = false;

  hide: boolean = true;
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  loading: boolean = false;
  responce: any;

  constructor(private loginAuthService: LoginAuthService,
              private router : Router) {}

  loginBtnPressed() {
    if (this.emailFormControl.invalid || this.passwordFormControl.invalid) {
      this.emailFormControl.markAsTouched();
      this.passwordFormControl.markAsTouched();
      return;
    }

    this.loading = true;
    const loginData: loginDt = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    };

    //subscribe to the login service
    this.loginAuthService.login(loginData);
    this.loginAuthService.get().subscribe(
      (res) => {
        this.responce = res;
        this.loading = false;
        console.log(this.responce); //debugging ---------
        //route to home page and provide responce
        this.router.navigate(['/home'], {state: {data: this.responce}});
      },
      (err) => {
        this.responce = err;
        this.loading = false;
        console.log(this.responce); //debugging ----------
      }
    );
  }
}
