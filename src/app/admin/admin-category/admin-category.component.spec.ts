import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminCategoryComponent } from "./admin-category.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import {provideRouter} from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Storage } from '@angular/fire/storage';

describe("AdminCategoryComponent", () => {
  let component: AdminCategoryComponent;
  let fixture: ComponentFixture<AdminCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports: [AdminCategoryComponent, HttpClientModule, ReactiveFormsModule],
      providers: [
        { provide: Storage, useValue: {} },
        { provide: ToastrService, useValue: {} },
        provideRouter([]),]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
