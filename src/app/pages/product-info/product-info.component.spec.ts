import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductInfoComponent } from "./product-info.component";
import { ActivatedRoute, provideRouter } from "@angular/router";
import { ProductService } from "../../shared/services/product/product.service";
import { NO_ERRORS_SCHEMA } from "@angular/compiler";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { IProductsResponse } from "../../shared/interfaces/product/product.interface";
import { Subject, of } from "rxjs";
import { OrderService } from "../../shared/services/order/order.service";

describe("ProductInfoComponent", () => {
  let component: ProductInfoComponent;
  let fixture: ComponentFixture<ProductInfoComponent>;
  let productService: jasmine.SpyObj<ProductService>;
  let orderService: jasmine.SpyObj<OrderService>;

  const activatedRouteMock = {
    data: of({ productInfo: { id: 1, name: "Test Product", count: 1 } }),
  };

  const mockProduct: IProductsResponse = {
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

  beforeEach(async () => {

    const productServiceSpy = jasmine.createSpyObj("ProductService", [
      "getAllByCategory",
    ]);
    const orderServiceSpy = jasmine.createSpyObj("OrderService", [
      "addToBasket",
    ]);

    orderServiceSpy.changeBasket = new Subject<boolean>();
    await TestBed.configureTestingModule({
      imports: [ProductInfoComponent, HttpClientTestingModule],
      providers: [
        provideRouter([]),
        { provide: ProductService, useValue: productServiceSpy },
        { provide: OrderService, useValue: orderServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({ productInfo: mockProduct }),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();


    productService = TestBed.inject(
        ProductService,
    ) as jasmine.SpyObj<ProductService>;
    orderService = TestBed.inject(OrderService) as jasmine.SpyObj<OrderService>;

    fixture = TestBed.createComponent(ProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load the product info on init", () => {
    expect(component.currentProduct).toEqual(mockProduct)
    });


  it("should add to basket", () => {
    spyOn(orderService.changeBasket, 'next');
    localStorage.clear();
    const productToAdd = { ...mockProduct };
    component.addToBasket(productToAdd);
    const expectedBasket = [productToAdd];
    expect(localStorage.getItem("basket")).toEqual(JSON.stringify(expectedBasket));
    expect(productToAdd.count).toEqual(1);
    expect(orderService.changeBasket.next).toHaveBeenCalledWith(true);
});

  it('should increase and decrease product count', () => {
    component.productCount(mockProduct, true);
    expect(mockProduct.count).toEqual(2);
    component.productCount(mockProduct, false);
    expect(mockProduct.count).toEqual(1);
  });

  it('change product count', () => {
    spyOn( component, "productCount" ).and.callThrough();
    component.productCount(mockProduct,true);
    expect(component.productCount).toHaveBeenCalled();
    expect(mockProduct.count).toBe(2);
  });

  it('should addBasket', () => {
    spyOn( component, "addToBasket" ).and.callThrough();
    component.addToBasket(mockProduct);
    expect(component.addToBasket).toHaveBeenCalled();
    expect(mockProduct.count).toBe( 1 );
  });
});
