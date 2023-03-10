import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  baseurl = 'https://selfcare-service.test.melita.com/interview/backend/api/';
  constructor(private http: HttpClient, private cookieJar: CookieService) {}

  logout(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.cookieJar.get('myMtTkn'),
      }),
    };

    return this.http.get(this.baseurl + 'logout', httpOptions);
  }
}
