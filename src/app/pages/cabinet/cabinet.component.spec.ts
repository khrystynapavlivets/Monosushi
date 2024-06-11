import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CabinetComponent } from "./cabinet.component";
import { HttpClientModule } from "@angular/common/http";
import { Firestore } from "@angular/fire/firestore";
import { Storage } from "@angular/fire/storage";
import { provideRouter } from "@angular/router";

describe("CabinetComponent", () => {
  let component: CabinetComponent;
  let fixture: ComponentFixture<CabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetComponent, HttpClientModule],
      providers: [
        { provide: Storage, useValue: {} },
        { provide: Firestore, useValue: {} },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
