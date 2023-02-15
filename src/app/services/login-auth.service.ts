import { Injectable } from '@angular/core';
import { loginDt } from '../pages/login/loginInterface/loginDt';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  //get value of username and password and call login api
  login(loginData: loginDt) {
    console.log(loginData);
    //payload to send to login api
    const payload = {
      username: loginData.username,
      password: loginData.password,
    };
    //call login api
    this.loginApiCall(payload);
  }
  constructor(private http: HttpClient) {}

  //login api
  baseurl = 'https://selfcare-service.test.melita.com/interview/backend/api/';
  loginApi = this.baseurl + 'login';
  loginApiCall(payload: any) {
    // post request to url with username and password in hearder
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        username: payload.username,
        password: payload.password,
      }),
    };
    this.http.post(this.loginApi, httpOptions).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
