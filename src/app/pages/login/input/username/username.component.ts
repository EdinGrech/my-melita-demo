import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent {
  username: string = '';
  //make username value available to parent component
  @Output() usernameChange = new EventEmitter<string>();
  constructor() {}
  //emit username value to parent component
  onUsernameChange() {
    this.usernameChange.emit(this.username);
  }
}
