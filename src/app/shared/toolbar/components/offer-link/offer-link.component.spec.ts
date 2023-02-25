import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferLinkComponent } from './offer-link.component';

describe('OfferLinkComponent', () => {
  let component: OfferLinkComponent;
  let fixture: ComponentFixture<OfferLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
