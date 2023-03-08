import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SummeryGetterService } from '../../services/summery-getter.service';
import { SubscriptionResponse } from 'src/app/services/interface/SubscriptionResponce';
import { loadSubscription, loadSubscriptionSuccess, loadSubscriptionFailure } from './subscriptions.actions';

@Injectable()
export class SubscriptionsEffects {   
      //load subscriptions givern an id
        loadSubscriptions$ = createEffect(() => this.actions$.pipe(
            ofType(loadSubscription),
            mergeMap((action) => this.summeryGetterService.subscribe(action.id).pipe(
                map((subscriptions: SubscriptionResponse) => loadSubscriptionSuccess({ id: action.id, subscriptions: subscriptions.subscriptions })),
                catchError(error => of(loadSubscriptionFailure({ id: action.id, error })))
            ))
        ));
    
      constructor(
     private actions$: Actions,
     private summeryGetterService: SummeryGetterService
      ) { }
}