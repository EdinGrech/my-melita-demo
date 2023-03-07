import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { OffersState } from './offers.reducer';

export const selectOffers = (state: AppState) => state.offers;

export const selectOffersList = createSelector(
    selectOffers,
    (state: OffersState) => state.offers
);
