import { OffersState } from './offers/offers.reducer';
import { SunscriptionOfferGroupState } from './subscriptions/subscriptions.reducer';

export interface AppState {
    offers: OffersState;
    subscriptions: SunscriptionOfferGroupState;
}