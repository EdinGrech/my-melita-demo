import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
//import angulat materials
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { OfferCardComponent } from './pages/home/components/offer-card/offer-card.component';

import { MatCardModule } from '@angular/material/card';
import { SubscriptionComponent } from './pages/subsctiption/subscription.component';
import { SubscriptionCardComponent } from './pages/subsctiption/components/subscription-card/subscription-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { OfferLinkComponent } from './shared/toolbar/components/offer-link/offer-link.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SubUsageComponent } from './pages/subsctiption/components/sub-usage/sub-usage.component';
import { LogoutOverlayComponent } from './shared/toolbar/components/logout-overlay/logout-overlay.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { offersReducer } from './state/offers/offers.reducer';
import { OffersEffects } from './state/offers/offers.effects';

//import { Subscription } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ToolbarComponent,
    SidebarComponent,
    OfferCardComponent,
    SubscriptionComponent,
    SubscriptionCardComponent,
    OfferLinkComponent,
    SubUsageComponent,
    LogoutOverlayComponent,
  ],
  imports: [
    MatProgressBarModule,
    MatExpansionModule,
    MatCardModule,
    NgxSkeletonLoaderModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,

    StoreModule.forRoot({offers: offersReducer}),
    EffectsModule.forRoot([OffersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
  ],
  providers: [
    //    Subscription,
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
