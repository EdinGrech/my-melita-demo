import { createSelector } from '@ngrx/store';
import { SunscriptionOfferGroupState } from './subscriptions.reducer';
import { SunscriptionOfferGroup } from './subOfferGroup-interface';

export const selectSubscriptions = (state: SunscriptionOfferGroupState) => state.SunscriptionOfferGroups;

export const selectSubscriptionsById = (id: number) => createSelector(
    selectSubscriptions,
    (subscriptions: SunscriptionOfferGroup[]) => subscriptions.find((subscription: SunscriptionOfferGroup) => subscription.id === id)
);