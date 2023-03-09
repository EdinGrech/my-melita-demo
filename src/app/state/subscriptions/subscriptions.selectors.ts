import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { SunscriptionOfferGroupState } from './subscriptions.reducer';
import { subscription } from '../../pages/subsctiption/interfaces/subscription/subscription';

export const selectSubscriptions = (state: AppState) => state.subscriptions;

export const selectSubscriptionsList = createSelector(
  selectSubscriptions,
  (subscriptions: SunscriptionOfferGroupState) => subscriptions.Subscriptions
);

export const selectSubscriptionsOnlyList: any = createSelector(
  selectSubscriptionsList,
  (subscriptions: subscription[]) =>
    subscriptions.map((subscription) => subscription)
);

export const selectSubscriptionsLoading: any = createSelector(
  selectSubscriptions,
  (state: SunscriptionOfferGroupState) => state.loading
);
