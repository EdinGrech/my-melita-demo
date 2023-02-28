import { Injectable } from '@angular/core';
import { loginDt } from '../pages/login/loginInterface/loginDt';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  httpOptions: any;

  //get value of username and password and call login api
  login(loginData: loginDt) {
    //payload to send to login api
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        username: loginData.username,
        password: loginData.password,
      }),
    };
  }

  constructor(private http: HttpClient) {}

  baseurl = 'https://selfcare-service.test.melita.com/interview/backend/api/';

  public get(): Observable<any> {
    return this.http.post(this.baseurl + 'login', this.httpOptions);
  }
}
