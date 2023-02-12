import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  hide: boolean = true;
  password: string = '';
  static passwordValue: StringConstructor;
  
  get passwordValue() {
    return this.password;
  }
}
