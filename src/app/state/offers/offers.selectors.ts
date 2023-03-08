import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { OffersState } from './offers.reducer';

export const selectOffers = (state: AppState) => state.offers;

export const selectOffersList:any = createSelector(
    selectOffers,
    (state: OffersState) => state.offers
);

export const selectOffersLoading:any = createSelector(
    selectOffers,
    (state: OffersState) => state.loading
);

export const selectOffersError:any = createSelector(
    selectOffers,
    (state: OffersState) => state.error
);
