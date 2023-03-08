import { createReducer, on } from '@ngrx/store';
import { loadSubscription, loadSubscriptionSuccess, loadSubscriptionFailure } from './subscriptions.actions';
import { SunscriptionOfferGroup } from './subOfferGroup-interface';

export interface SunscriptionOfferGroupState {
    SunscriptionOfferGroups: SunscriptionOfferGroup[];
    status: 'pending' | 'success' | 'failure';
    error?: any;
}

export const initialState: SunscriptionOfferGroupState = {
    SunscriptionOfferGroups: [],
    status: 'pending',
};

export const subscriptionsReducer = createReducer(
    initialState,
    on(loadSubscription, (state) => ({ ...state, status: 'pending' })),
    on(loadSubscriptionSuccess, (state, { id, subscriptions }) => {
        const newSunscriptionOfferGroup: SunscriptionOfferGroup = {
            id,
            subscriptions,
        };
        return {
            ...state,
            SunscriptionOfferGroups: [...state.SunscriptionOfferGroups, newSunscriptionOfferGroup],
            status: 'success',
        };
    }),
    on(loadSubscriptionFailure, (state, { error }) => ({ ...state, status: 'failure', error })),
);