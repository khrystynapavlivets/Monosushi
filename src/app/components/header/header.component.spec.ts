import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { Firestore } from "@angular/fire/firestore";
import { provideRouter } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";





describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, HttpClientModule, MatDialogModule],
      providers: [
        { provide: Firestore, useValue: {} },
        provideRouter([]),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should change total', () => {
    const basket = [
      {
        id: 2,
        category: {
          id: 2,
          name: 'Category2',
          path: 'category-2',
          imagePath: 'path/to/image.jpg'
        },
        name: 'Product2',
        path: 'product-2',
        description: 'Description of Product2',
        weight: '500g',
        price: 50,
        imagePath: 'path/to/image2.jpg',
        count: 20,
        productSize: 'Medium'
      }
    ]
    component.basket = basket ;
    spyOn(component, 'getTotalPrice').and.callThrough();
    component.getTotalPrice();
    expect(component.getTotalPrice).toHaveBeenCalled();
    expect(component.total).toBe(1000);
    component.basket = [];
    component.getTotalPrice();
    expect(component.getTotalPrice).toHaveBeenCalled();
    expect(component.total).toBe(0);
  })



  it('should change total', () => {


    const testBasket = [
      {
        id: 1,
        category: {
          id: 1,
          name: "string",
          path: "string",
          imagePath: "",
        },
        name: "string",
        path: "string",
        description: "string",
        productSize: "string",
        weight: "200g",
        price: 34,
        imagePath: "",
        count: 1,
      },
    ];
    component.basket =  testBasket;
    spyOn(component, 'getTotalPrice').and.callThrough();
    component.getTotalPrice();
    expect(component.getTotalPrice).toBeTruthy();
    expect(component.total).toBe(34);

    component.getTotalPrice();
    expect(component.getTotalCount).toBeTruthy();
    expect(component.count).toBe(0);
  });

  it('should delet bascet product', () => {
    const index = 1;
    const product = {
      id: 1,
      category: {
        id: 1,
        name: "string",
        path: "string",
        imagePath: "",
      },
      name: "string",
      path: "string",
      description: "string",
      productSize: "string",
      weight: "200g",
      price: 34,
      imagePath: "",
      count: 1,
    }
    const testBasket = [
      {
        id: 1,
        category: {
          id: 1,
          name: "string",
          path: "string",
          imagePath: "",
        },
        name: "string",
        path: "string",
        description: "string",
        productSize: "string",
        weight: "200g",
        price: 34,
        imagePath: "",
        count: 1,
      },
      {
        id: 1,
        category: {
          id: 1,
          name: "string",
          path: "string",
          imagePath: "",
        },
        name: "string",
        path: "string",
        description: "string",
        productSize: "string",
        weight: "200g",
        price: 34,
        imagePath: "",
        count: 1,
      }
    ]
    component.basket = testBasket;
    spyOn( component, "deleteCartItem" ).and.callThrough();
    component.deleteCartItem(product);
    expect(component.deleteCartItem).toHaveBeenCalled();
    expect( component.basket.length).toBe(1);
  })




});
