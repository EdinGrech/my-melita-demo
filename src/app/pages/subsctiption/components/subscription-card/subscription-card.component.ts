import { Component, Input } from '@angular/core';
import { subscription } from '../../interfaces/subscription/subscription';
import { usage } from '../../interfaces/subscription/usage';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss'],
})
export class SubscriptionCardComponent {
  panelOpenState: boolean = false;

  @Input() subscription!: subscription;

  subIco!: string;
  showUsage: boolean = false;
  usages!: usage[];
  ngOnInit(): void {
    switch (this.subscription.type) {
      case 'INTERNET':
        this.subIco = 'router';
        break;
      case 'TELEVISION':
        this.subIco = 'add_to_queue';
        break;
      case 'MOBILE':
        this.subIco = 'mobile_friendly';
        break;
      case 'TELEPHONY':
        this.subIco = 'call';
        break;
    }
    if (this.subscription.usage) {
      this.showUsage = true;
      this.usages = this.subscription.usage;
    }
  }
}
