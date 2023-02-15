import { Component } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth.service';
import { loginDt } from './loginInterface/loginDt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean = true;
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private loginAuthService: LoginAuthService) {}

  loginBtnPressed() {
    const loginData: loginDt = {
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    };
    this.loginAuthService.login(loginData);
  }
}
