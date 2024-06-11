import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientModule } from "@angular/common/http";
import { provideRouter } from "@angular/router";

import { IProductsResponse } from "../../shared/interfaces/product/product.interface";
import { OrderService } from "../../shared/services/order/order.service";
import { Subject } from "rxjs";



const fakeProduct: IProductsResponse = {
  id: 1,
  category: {
    id: 1,
    name: 'string',
    path: 'string',
    imagePath: '',
  },
  name: 'string',
  path: 'string',
  description: 'string',
  productSize: 'string',
  weight: '200g',
  price: 34,
  imagePath: '',
  count: 1,
};




describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;




  beforeEach(async () => {
    const orderServiceSpy = jasmine.createSpyObj('OrderService', ['changeBasket']);
    orderServiceSpy.changeBasket = new Subject<boolean>();
    
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientModule],
      providers: [
        provideRouter([]),
        { provide: OrderService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should change product count', () => {
    component.productCount(fakeProduct, true);
    expect(fakeProduct.count).toBe(2);
    component.productCount(fakeProduct, false);
    expect(fakeProduct.count).toBe(1);
  });
});
