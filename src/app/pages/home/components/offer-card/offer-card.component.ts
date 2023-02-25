import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Offer } from '../../interfaces/offers/offer';
@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
})
export class OfferCardComponent {
  @Input() offer!: Offer;
}
