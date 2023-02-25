import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { Offer } from 'src/app/pages/home/interfaces/offers/offer';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
import { LogoutService } from 'src/app/services/logout.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  panelOpenState: boolean = false;
  offers: Offer[] = [];

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
  ) {}

  ngOnInit(): void {
    this.summeryGetter.offers().subscribe((data: any) => {
      //turn data object into array
      Object.keys(data.offers).map((key) => {
        console.log(key);
        this.offers.push(data.offers[key]);
      });
      console.log(this.offers);
    });
  }

  refresh() {
    // Your refresh function code goes here
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
