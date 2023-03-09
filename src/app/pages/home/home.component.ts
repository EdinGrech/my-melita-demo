import { Component } from '@angular/core';
import { Offer } from './interfaces/offers/offer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectOffersList,
  selectOffersLoading,
  selectOffersError,
} from 'src/app/state/offers/offers.selectors';
import { loadOffers } from 'src/app/state/offers/offers.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public allOffers$: Observable<Offer[]> = this.store.select(selectOffersList);
  public loadingOffers$: Observable<boolean> =
    this.store.select(selectOffersLoading);
  public errorOffers$: Observable<any> = this.store.select(selectOffersError);

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(loadOffers());
    {
      // this.summeryGetter
      //   .offers()
      //   .pipe(
      //     catchError(() => {
      //       this.offers = [
      //         {
      //           id: 0,
      //           name: 'No subscriptions found',
      //           contractEndDate: '',
      //           contractStartDate: '',
      //         },
      //       ];
      //       this.errorDetected = true;
      //       this.loadingContent = false;
      //       return [];
      //     })
      //   )
      //   .subscribe((data: any) => {
      //     //turn data object into array
      //     this.offers = data.offers;
      //     this.loadingContent = false;
      //   });
    }
  }

  refreshOffers() {
    this.store.dispatch(loadOffers());
    {
      // this.loadingContent = true;
      // this.summeryGetter
      //   .offers()
      //   .pipe(
      //     catchError(() => {
      //       this.offers = [
      //         {
      //           id: 0,
      //           name: 'No subscriptions found',
      //           contractEndDate: '',
      //           contractStartDate: '',
      //         },
      //       ];
      //       this.errorDetected = true;
      //       this.loadingContent = false;
      //       return [];
      //     })
      //   )
      //   .subscribe((data: any) => {
      //     //turn data object into array
      //     this.offers = data.offers;
      //     this.loadingContent = false;
      //   });
    }
  }
}
