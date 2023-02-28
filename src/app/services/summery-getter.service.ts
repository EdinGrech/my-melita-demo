import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { OfferResponse } from '../services/interface/OfferResponce';
import { SubscriptionResponse } from '../services/interface/SubscriptionResponce';
import { subscription } from '../pages/subsctiption/interfaces/subscription/subscription';
import { Offer } from '../pages/home/interfaces/offers/offer';
@Injectable({
  providedIn: 'root',
})
export class SummeryGetterService {
  constructor(private http: HttpClient, private cookieJar: CookieService) {}
  baseurl = 'https://selfcare-service.test.melita.com/interview/backend/api/';
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

    return this.http
      .get<OfferResponse>(this.baseurl + 'offers', httpOptions)
      .pipe(
        map((res) => {
          res.offers = quicksort(res.offers);
          console.log(res.offers);
          return res;
          function quicksort(offers: Offer[]): Offer[] {
            if (offers.length <= 1) {
              return offers;
            }

            const pivotIndex = Math.floor(offers.length / 2);
            const pivotDate = new Date(offers[pivotIndex].contractStartDate);

            const left = [];
            const right = [];

            for (let i = 0; i < offers.length; i++) {
              if (i === pivotIndex) {
                continue;
              }

              const product = offers[i];
              const date = new Date(product.contractStartDate);

              if (date < pivotDate) {
                left.push(product);
              } else {
                right.push(product);
              }
            }

            return [
              ...quicksort(left),
              offers[pivotIndex],
              ...quicksort(right),
            ];
          }
        })
      );
  }

  subscribe(offerid: number): Observable<SubscriptionResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.cookieJar.get('myMtTkn'),
      }),
    };

    return this.http
      .get<SubscriptionResponse>(
        this.baseurl + 'offers/' + offerid + '/subscriptions',
        httpOptions
      )
      .pipe(
        map((res) => {
          res.subscriptions = mergeSortsubs(res.subscriptions);
          return res;
          function mergeSortsubs(subs: subscription[]): subscription[] {
            if (subs.length <= 1) {
              return subs;
            }

            const middle = Math.floor(subs.length / 2);
            const left = subs.slice(0, middle);
            const right = subs.slice(middle);

            return mergesubs(mergeSortsubs(left), mergeSortsubs(right));
          }

          function mergesubs(
            left: subscription[],
            right: subscription[]
          ): subscription[] {
            const result = [];
            let leftIndex = 0;
            let rightIndex = 0;

            while (leftIndex < left.length && rightIndex < right.length) {
              if (left[leftIndex].name < right[rightIndex].name) {
                result.push(left[leftIndex]);
                leftIndex++;
              } else if (left[leftIndex].name > right[rightIndex].name) {
                result.push(right[rightIndex]);
                rightIndex++;
              } else if (left[leftIndex].line < right[rightIndex].line) {
                result.push(left[leftIndex]);
                leftIndex++;
              } else {
                result.push(right[rightIndex]);
                rightIndex++;
              }
            }
            return result
              .concat(left.slice(leftIndex))
              .concat(right.slice(rightIndex));
          }
        })
      );
  }
}
