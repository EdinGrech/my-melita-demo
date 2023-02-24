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
      Object.keys(data.offers).map((key) => {
        console.log(key);
        this.offers.push(data.offers[key]);
      });
      console.log(this.offers);
      this.loadingContent = false;
    });
  }
}
