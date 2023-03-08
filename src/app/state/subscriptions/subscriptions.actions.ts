import { subscription } from "src/app/pages/subsctiption/interfaces/subscription/subscription";
import { createAction, props } from '@ngrx/store';

export const loadSubscription = createAction(
    '[Subscriptions] Load Subscription',
    props<{ id: number }>()
);

export const loadSubscriptionSuccess = createAction(
    '[Subscriptions] Load Subscriptions Success',
    props<{ id: number, subscriptions: subscription[] }>()
);

export const loadSubscriptionFailure = createAction(
    '[Subscriptions] Load Subscriptions Failure',
    props<{ id: number, error: any }>()
);