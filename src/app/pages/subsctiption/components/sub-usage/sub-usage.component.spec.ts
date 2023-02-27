import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubUsageComponent } from './sub-usage.component';

describe('SubUsageComponent', () => {
  let component: SubUsageComponent;
  let fixture: ComponentFixture<SubUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubUsageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
