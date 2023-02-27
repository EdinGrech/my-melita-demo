import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Offer } from 'src/app/pages/home/interfaces/offers/offer';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
import { LogoutService } from 'src/app/services/logout.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, interval, take, map } from 'rxjs';

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
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
  @Output() refresh = new EventEmitter();
  startCountdown() {
    this.refresh.emit();
    let duration: number = 10;
    this.timer.nativeElement.innerText = 'Refresh (' + duration + ')';
    this.timer.nativeElement.disabled = true;
    interval(1000)
      .pipe(
        take(duration),
        map((x) => duration - x - 1)
      )
      .subscribe((x) => {
        this.timer.nativeElement.innerText = 'Refresh (' + x + ')';
        if (x <= 0) {
          this.timer.nativeElement.disabled = false;
          this.timer.nativeElement.innerText = 'Refresh';
        }
      });
  }

  @Output() offerClicked = new EventEmitter();
  drawerOfferLinkClick() {
    this.offerClicked.emit();
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
}
