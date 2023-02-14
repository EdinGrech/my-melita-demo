import { Component } from '@angular/core';
import { LoginAuthService } from '../../services/login-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginAuthService: LoginAuthService) {}

  username: string | undefined;
  
  //call login service
  loginToCallServ() {
    //call login service
    this.loginAuthService.login();
  }

  updateUsr(event: string) {
    console.log(event);
  }
}