import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DiscountComponent } from "./discount.component";
import { provideRouter } from "@angular/router";
import { IDiscountResponse } from "../../shared/interfaces/discount/discount.interface";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/compiler";
import { DiscountService } from "../../shared/services/discount/discount.service";

describe("DiscountComponent", () => {
  let component: DiscountComponent;
  let fixture: ComponentFixture<DiscountComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideRouter([]), DiscountService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  it("should create", () => {
    expect(component).toBeTruthy();
  });


  it("should fetch discounts successfully", () => {
    fixture.detectChanges();
    const userDiscounts: IDiscountResponse[] = [
      {
        id: 1,
        name: "name1",
        title: "title1",
        description: "Discount1",
        imagePath: "",
      },
      {
        id: 2,
        name: "name2",
        title: "title2",
        description: "Discount2",
        imagePath: "",
      },
    ];

    const req = httpTestingController.expectOne(
        "http://localhost:3000/discounts"
    );
    expect(req.request.method).toBe("GET");
    req.flush(userDiscounts);
    expect(component.userDiscounts).toEqual(userDiscounts);
  });

});
