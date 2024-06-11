import { TestBed } from '@angular/core/testing';

import { DiscountService } from './discount.service';
import { HttpClientModule } from "@angular/common/http";

describe('DiscountService', () => {
  let service: DiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(DiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
