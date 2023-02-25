import { Component, Input } from '@angular/core';
import { subscription } from '../../interfaces/subscription/subscription';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss'],
})
export class SubscriptionCardComponent {
  @Input() subscription!: subscription;
}
