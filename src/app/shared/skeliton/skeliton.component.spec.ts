import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkelitonComponent } from './skeliton.component';

describe('SkelitonComponent', () => {
  let component: SkelitonComponent;
  let fixture: ComponentFixture<SkelitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkelitonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkelitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
