import { TestBed } from '@angular/core/testing';

import { ProductInfoResolver } from './product-info.resolver';
import {HttpClientModule} from "@angular/common/http";

describe('ProductInfoResolver', () => {
  let resolver: ProductInfoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    resolver = TestBed.inject(ProductInfoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});