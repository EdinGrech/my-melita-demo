import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Offer } from '../pages/home/interfaces/offers/offer';
@Injectable({
  providedIn: 'root'
})
export class SummeryGetterService {

  constructor(private http: HttpClient,
    private cookieJar: CookieService) {}
  baseurl = 'https://selfcare-service.test.melita.com/interview/backend/api/';
  httpOptions: any;
  
  offers(): Observable<Offer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.cookieJar.get('myMtTkn'),
      }),
    };

    return this.http.get<Offer[]>(this.baseurl + 'offers', httpOptions);
  }

}
