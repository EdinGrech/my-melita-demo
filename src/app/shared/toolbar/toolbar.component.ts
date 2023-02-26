import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Offer } from 'src/app/pages/home/interfaces/offers/offer';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
import { LogoutService } from 'src/app/services/logout.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { catchError, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  panelOpenState: boolean = false;

  get isMobile() {
    return window.innerWidth < 600;
  }

  get isMobileDrawerMode() {
    if (this.isMobile) {
      return 'over';
    } else {
      return 'side';
    }
  }

  constructor(
    private summeryGetter: SummeryGetterService,
    private Logout: LogoutService,
    private cookieJar: CookieService,
    private router: Router
  ) //private countdownSubscription: Subscription
  {}

  offers: Offer[] = [];
  loadingOffers: boolean = true;
  ngOnInit(): void {
    this.summeryGetter
      .offers()
      .pipe(
        catchError(() => {
          this.offers = [
            {
              id: 0,
              name: 'No subscriptions found',
              contractStartDate: '',
              contractEndDate: '',
            },
          ];
          this.loadingOffers = false;
          return [];
        })
      )
      .subscribe((data: any) => {
        //turn data object into array
        Object.keys(data.offers).map((key) => {
          console.log(key);
          this.offers.push(data.offers[key]);
        });
        console.log(this.offers);
        this.loadingOffers = false;
      });
  }

  @ViewChild('timer', { static: true }) timer!: ElementRef;
  countingDown: boolean = false;
  startCountdown() {
    let duration: number = 10;
    this.countingDown = true;
    this.timer.nativeElement.innerText = duration;
    const tr = interval(1000).subscribe(() => {
      duration--;
      this.timer.nativeElement.innerText = duration;
      if (duration <= 0) {
        duration = 10;
        this.timer.nativeElement.innerText = '';
        this.countingDown = false;
        tr.unsubscribe();
      }
    });
  }

  logout() {
    this.Logout.logout().subscribe((data: any) => {
      if (data.status == 'success') {
        this.cookieJar.delete('myMtTkn');
        //route to login page
        this.router.navigate(['/']);
      }
    });
  }

  refreshPage() {
    window.location.reload();
  }
}
