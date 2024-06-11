import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { HttpClientModule } from "@angular/common/http";
import {ICategoryResponse} from "../../interfaces/category/category.interface";
import { HttpTestingController } from "@angular/common/http/testing";
import { environment } from "../../../../environments/environment";
import {provideRouter} from "@angular/router";

describe('CategoryService', () => {
  let service: CategoryService;
  const apiUrl = environment.BACKEND_URL;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ], providers: [
        provideRouter([]),
        HttpTestingController
      ]
    });
    service = TestBed.inject(CategoryService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });






});