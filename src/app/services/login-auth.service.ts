import { Injectable } from '@angular/core';
import { UsernameComponent } from '../pages/login/input/username/username.component';
import { PasswordComponent } from '../pages/login/input/password/password.component';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  //get value of username and password and call login api
  login() {
    const loginSetails = {
      //get username from username component
      username: String = UsernameComponent.usernameValue,
      password: String = PasswordComponent.passwordValue,
    }
    console.log(loginSetails);
  }

}
