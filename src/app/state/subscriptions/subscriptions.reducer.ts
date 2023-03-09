import { createReducer, on } from '@ngrx/store';
import {
  loadSubscription,
  loadSubscriptionSuccess,
  loadSubscriptionFailure,
} from './subscriptions.actions';
import { subscription } from '../../pages/subsctiption/interfaces/subscription/subscription';

export interface SunscriptionOfferGroupState {
  id: number;
  Subscriptions: subscription[];
  status: 'pending' | 'success' | 'failure';
  loading: boolean;
  error?: any;
}

export const initialState: SunscriptionOfferGroupState = {
  id: 0,
  Subscriptions: [],
  error: null,
  loading: false,
  status: 'pending',
};

export const subscriptionsReducer = createReducer(
  initialState,
  on(loadSubscription, (state) => ({
    ...state,
    loading: true,
    status: 'pending',
  })),
  on(loadSubscriptionSuccess, (state, { id, subscriptions }) => {
    return {
      ...state,
      id: id,
      Subscriptions: subscriptions,
      loading: false,
      status: 'success',
    };
  }),
  on(loadSubscriptionFailure, (state, { error }) => ({
    ...state,
    status: 'failure',
    loading: false,
    error,
  }))
);
