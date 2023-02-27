import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
import { subscription } from '../subsctiption/interfaces/subscription/subscription';
import { SubscriptionResponse } from 'src/app/services/interface/SubscriptionResponce';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {
  constructor(
    private route: ActivatedRoute,
    private summeryGetter: SummeryGetterService
  ) {}
  loadingContent: boolean = true;
  subscriptions: subscription[] = [];

  ngOnInit() {
    const offerid = this.route.snapshot.paramMap.get('offerid') || '0'; //if no offerid is provided, default to 0
    this.summeryGetter
      .subscribe(+offerid)
      .pipe(
        catchError(() => {
          this.subscriptions = [
            { id: 0, name: 'No subscriptions found', type: '', line: 0 },
          ];
          this.loadingContent = false;
          return [];
        })
      )
      .subscribe((data: SubscriptionResponse) => {
        //turn data object into array
        this.subscriptions = data.subscriptions;
        this.loadingContent = false;
      });
  }

  refreshSubs(id?: number) {
    console.log(this.subscriptions);
    this.loadingContent = true;
    const offerid = id || this.route.snapshot.paramMap.get('offerid') || '0'; //if no offerid is provided, default to 0
    console.log(offerid);
    this.summeryGetter
      .subscribe(+offerid)
      .pipe(
        catchError(() => {
          this.subscriptions = [
            { id: 0, name: 'No subscriptions found', type: '', line: 0 },
          ];
          this.loadingContent = false;
          return [];
        })
      )
      .subscribe((data: SubscriptionResponse) => {
        //turn data object into array
        this.subscriptions = data.subscriptions;
        this.loadingContent = false;
      });
  }
}
