import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-btn',
  templateUrl: './login-btn.component.html',
  styleUrls: ['./login-btn.component.scss'],
})
export class LoginBtnComponent {
  @Output() loginBtnPress: EventEmitter<string> = new EventEmitter();

  loginBtnPressed() {
    this.loginBtnPress.emit();
  }
}
