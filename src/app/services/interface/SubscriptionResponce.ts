import { subscription } from '../../pages/subsctiption/interfaces/subscription/subscription';

export interface SubscriptionResponse {
  subscriptions: subscription[];
  status: number;
}
