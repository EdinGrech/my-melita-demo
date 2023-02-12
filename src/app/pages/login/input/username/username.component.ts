import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent {
  username: string = '';

  //create a getter and setter to be accessable by other components
  get usernameValue() {
    return this.username;
  }
  set usernameValue(value: string) {
    this.username = value;
  }
}
