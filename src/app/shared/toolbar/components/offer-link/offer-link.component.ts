import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Offer } from 'src/app/pages/home/interfaces/offers/offer';

@Component({
  selector: 'app-offer-link',
  templateUrl: './offer-link.component.html',
  styleUrls: ['./offer-link.component.scss'],
})
export class OfferLinkComponent {
  @Input() offer!: Offer;

  validOffer = (offer: Offer) => (offer.id == 0 ? true : false);

  @Output() offerClicked = new EventEmitter();
  offerClick() {
    this.offerClicked.emit();
  }
}
