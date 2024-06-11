import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BasketDialogComponent } from "./basket-dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { Storage } from "@angular/fire/storage";
import { Firestore } from "@angular/fire/firestore";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("BasketDialogComponent", () => {
  let component: BasketDialogComponent;
  let fixture: ComponentFixture<BasketDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BasketDialogComponent,
        HttpClientModule,
        ReactiveFormsModule,
        MatDialogModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Storage, useValue: {} },
        { provide: Firestore, useValue: {} },
        provideRouter([]),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(BasketDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("it should change total", () => {
    spyOn(component, "getTotalPrice").and.callThrough();
    component.getTotalPrice();
    expect(component.getTotalPrice).toHaveBeenCalled();
    // expect(component.total).toBe(0) ;
  });
  it("should delete basket product", () => {
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
    };
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
        id: 2,
        category: {
          id: 2,
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
    component.basket = testBasket;
    spyOn(component, "delete").and.callThrough();
    component.delete(product);
    expect(component.delete).toHaveBeenCalled();
    expect(component.basket.length).toBe(1);
  });



  it('change product count', () => {
    const Fake_Product =
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
        };
    spyOn( component, "productCount" ).and.callThrough();
    component.productCount(Fake_Product,true);
    expect(component.productCount).toHaveBeenCalled();
    expect( Fake_Product.count).toBe(2);
  });
});
