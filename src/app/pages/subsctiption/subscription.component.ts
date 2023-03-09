import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
import { subscription } from '../subsctiption/interfaces/subscription/subscription';
import { Observable, map, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectSubscriptionsOnlyList,
  selectSubscriptionsLoading,
} from 'src/app/state/subscriptions/subscriptions.selectors';
import { loadSubscription } from 'src/app/state/subscriptions/subscriptions.actions';
import { SunscriptionOfferGroup } from 'src/app/state/subscriptions/subOfferGroup-interface';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {
  constructor(private route: ActivatedRoute, private store: Store) {}

  subscriptions$: any = this.store.select(selectSubscriptionsOnlyList);
  loadingSubscriptions$: Observable<boolean> = this.store.select(
    selectSubscriptionsLoading
  );

  ngOnInit() {
    const offerid = this.route.snapshot.paramMap.get('offerid') || '0'; //if no offerid is provided, default to 0
    this.store.dispatch(loadSubscription({ id: +offerid }));

    {
      // this.summeryGetter
      //   .subscribe(+offerid)
      //   .pipe(
      //     catchError(() => {
      //       this.subscriptions = [
      //         { id: 0, name: 'No subscriptions found', type: '', line: 0 },
      //       ];
      //       this.loadingContent = false;
      //       return [];
      //     })
      //   )
      //   .subscribe((data: SubscriptionResponse) => {
      //     //turn data object into array
      //     this.subscriptions = data.subscriptions;
      //     this.loadingContent = false;
      //   });
    }
  }

  refreshSubs(id?: number) {
    // console.log(this.subscriptions);
    // this.loadingContent = true;
    const offerid = id || this.route.snapshot.paramMap.get('offerid') || '0'; //if no offerid is provided, default to 0
    this.store.dispatch(loadSubscription({ id: +offerid }));
    {
      // console.log(offerid);
      // this.summeryGetter
      //   .subscribe(+offerid)
      //   .pipe(
      //     catchError(() => {
      //       this.subscriptions = [
      //         { id: 0, name: 'No subscriptions found', type: '', line: 0 },
      //       ];
      //       this.loadingContent = false;
      //       return [];
      //     })
      //   )
      //   .subscribe((data: SubscriptionResponse) => {
      //     //turn data object into array
      //     this.subscriptions = data.subscriptions;
      //     this.loadingContent = false;
      //   });
    }
  }
}
