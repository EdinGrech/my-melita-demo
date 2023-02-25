import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/pages/home/interfaces/offers/offer';

@Component({
  selector: 'app-offer-link',
  templateUrl: './offer-link.component.html',
  styleUrls: ['./offer-link.component.scss'],
})
export class OfferLinkComponent {
  @Input() offer!: Offer;
}
