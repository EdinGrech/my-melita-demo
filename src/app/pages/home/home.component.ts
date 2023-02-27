import { Component } from '@angular/core';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
import { Offer } from './interfaces/offers/offer';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  offers: Offer[] = [];
  loadingContent: boolean = true;
  errorDetected: boolean = false;
  constructor(private summeryGetter: SummeryGetterService) {}
  ngOnInit(): void {
    this.summeryGetter
      .offers()
      .pipe(
        catchError(() => {
          this.offers = [
            {
              id: 0,
              name: 'No subscriptions found',
              contractEndDate: '',
              contractStartDate: '',
            },
          ];
          this.errorDetected = true;
          this.loadingContent = false;
          return [];
        })
      )
      .subscribe((data: any) => {
        //turn data object into array
        this.offers = data.offers;
        this.loadingContent = false;
      });
  }

  refreshOffers() {
    this.loadingContent = true;
    this.summeryGetter
      .offers()
      .pipe(
        catchError(() => {
          this.offers = [
            {
              id: 0,
              name: 'No subscriptions found',
              contractEndDate: '',
              contractStartDate: '',
            },
          ];
          this.errorDetected = true;
          this.loadingContent = false;
          return [];
        })
      )
      .subscribe((data: any) => {
        //turn data object into array
        this.offers = data.offers;
        this.loadingContent = false;
      });
  }
}
