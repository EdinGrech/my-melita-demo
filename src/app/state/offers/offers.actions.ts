import { Offer } from 'src/app/pages/home/interfaces/offers/offer';
import { createAction, props } from '@ngrx/store';

export const loadOffers = createAction('[Offers] Load Offers');

export const loadOffersSuccess = createAction(
  '[Offers] Load Offers Success',
  props<{ offers: Offer[] }>()
);

export const loadOffersFailure = createAction(
  '[Offers] Load Offers Failure',
  props<{ error: any }>()
);
