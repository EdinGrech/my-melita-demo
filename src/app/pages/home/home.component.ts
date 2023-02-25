import { Component } from '@angular/core';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
import { Offer } from './interfaces/offers/offer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  offers: Offer[] = [];
  loadingContent: boolean = true;
  constructor(private summeryGetter: SummeryGetterService) {}
  ngOnInit(): void {
    this.summeryGetter.offers().subscribe((data: any) => {
      //turn data object into array
      this.offers = data.offers;
      this.loadingContent = false;
    });
  }
}
