import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { OfferResponse } from '../services/interface/OfferResponce';
import { SubscriptionResponse } from '../services/interface/SubscriptionResponce';
@Injectable({
  providedIn: 'root',
})
export class SummeryGetterService {
  constructor(private http: HttpClient, private cookieJar: CookieService) {}
  baseurl = 'https://selfcare-service.test.melita.com/interview/backend/api/';
  httpOptions: any;
  // expected reply to be formatted as follows:
  // {
  //   "offers": [
  //     {
  //       "id": 1,
  //       "name": "test",
  //       "contractEndDate": "test",
  //       "contractStartDate": "test"
  //     }
  //   ]
  //  , "status": 0
  // }
  offers(): Observable<OfferResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.cookieJar.get('myMtTkn'),
      }),
    };

    return this.http.get<OfferResponse>(this.baseurl + 'offers', httpOptions);
  }

  subscribe(offerid: number): Observable<SubscriptionResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.cookieJar.get('myMtTkn'),
      }),
    };

    return this.http.get<SubscriptionResponse>(
      this.baseurl + 'offers/' + offerid + '/subscriptions',
      httpOptions
    );
  }
}
