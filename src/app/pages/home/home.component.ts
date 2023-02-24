import { Component } from '@angular/core';
import { SummeryGetterService } from 'src/app/services/summery-getter.service';
import { Offer } from './interfaces/offers/offer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  offers : Offer[] = [
    {
      id: 1,
      name: 'test',
      contractEndDate: 'test',
      contractStartDate: 'test',
    }
  ];
  loadingContent : boolean = true;
  constructor(private summeryGetter: SummeryGetterService) {}
  ngOnInit(): void {
    this.summeryGetter.offers().subscribe((data:Offer[]) => {
      console.log(data);
      //this.offers = ;
      console.log(data);
      console.log(this.offers);
    });
    this.loadingContent = false;
  }
}
