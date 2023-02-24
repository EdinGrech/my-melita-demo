import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
import { subscription } from '../subsctiption/interfaces/subscription/subscription';

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
  subscriptions: subscription[] = [];

  ngOnInit() {
    const offerid = this.route.snapshot.paramMap.get('offerid') || '0'; //if no offerid is provided, default to 0
    this.summeryGetter.subscribe(+offerid).subscribe((data: any) => {
      //turn data object into array
      console.log(data);
      Object.keys(data.subscriptions).map((key) => {
        console.log(key);
        this.subscriptions.push(data.subscriptions[key]);
      });
    });
  }
}
