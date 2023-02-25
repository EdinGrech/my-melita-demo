import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { Offer } from 'src/app/pages/home/interfaces/offers/offer';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
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

  constructor(private summeryGetter: SummeryGetterService) {}

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
}
