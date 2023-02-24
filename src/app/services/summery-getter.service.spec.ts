import { TestBed } from '@angular/core/testing';

import { SummeryGetterService } from './summery-getter.service';

describe('SummeryGetterService', () => {
  let service: SummeryGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummeryGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
