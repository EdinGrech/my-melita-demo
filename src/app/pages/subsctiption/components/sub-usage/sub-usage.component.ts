import { Component, Input } from '@angular/core';
import { usage } from '../../interfaces/subscription/usage';

@Component({
  selector: 'app-sub-usage',
  templateUrl: './sub-usage.component.html',
  styleUrls: ['./sub-usage.component.scss'],
})
export class SubUsageComponent {
  @Input() usege!: usage;
  usedPs!: number;

  ngOnInit(): void {
    this.usedPs = (this.usege.used / this.usege.limit) * 100;
  }
}
