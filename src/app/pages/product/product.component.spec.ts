import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductComponent } from "./product.component";
import { provideRouter } from "@angular/router";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/compiler";
import { ProductService } from "../../shared/services/product/product.service";
import { IProductsResponse } from "../../shared/interfaces/product/product.interface";
import { of } from "rxjs";

describe("ProductComponent", () => {
  let service: ProductService;
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let PRODUCTS: IProductsResponse[];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideRouter([]), { provide: ProductService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    service = TestBed.inject(ProductService);
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should test loadProducts()", () => {
    spyOn(service, "getAllByCategory").and.returnValue(of(PRODUCTS));
    component.loadProducts();
    expect(component.userProducts).toEqual(PRODUCTS);
  });
});
