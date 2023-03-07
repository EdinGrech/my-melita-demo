import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SummeryGetterService } from '../../services/summery-getter.service';
import { loadOffers, loadOffersSuccess, loadOffersFailure } from './offers.actions';
import { OfferResponse } from 'src/app/services/interface/OfferResponce';
@Injectable()
export class OffersEffects {
    loadOffers$ = createEffect(() =>
        this.actions$.pipe(
        ofType(loadOffers),
        mergeMap(() =>
            this.summeryGetterService.offers().pipe(
            map((data:OfferResponse) => loadOffersSuccess({ offers: data.offers })),
            catchError((error) => of(loadOffersFailure({ error })))
            )
        )
        )
    );
    
    constructor(private actions$: Actions, 
                private summeryGetterService: SummeryGetterService) {}
}
