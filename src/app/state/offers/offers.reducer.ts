import { createReducer, on } from '@ngrx/store';
import { loadOffers, loadOffersSuccess, loadOffersFailure } from './offers.actions';
import { Offer } from 'src/app/pages/home/interfaces/offers/offer';
export interface OffersState {
    offers: Offer[];
    loading: boolean;
    error: any;
}

export const initialState: OffersState = {
    offers: [],
    loading: false,
    error: null
};

export const offersReducer = createReducer(
    initialState,
    on(loadOffers, (state) => ({ ...state, loading: true })),
    on(loadOffersSuccess, (state, { offers }) => ({ ...state, offers:offers, error:null, loading: false })),
    on(loadOffersFailure, (state, { error }) => ({ ...state, error:error, loading: false }))
);