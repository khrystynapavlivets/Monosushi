import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataComponent } from './user-data.component';
import { HttpClientModule } from "@angular/common/http";
import {Firestore} from "@angular/fire/firestore";
import { provideRouter } from "@angular/router";
import { Storage } from "@angular/fire/storage";
import { ToastrService } from "ngx-toastr";
import { Auth } from "@angular/fire/auth";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDataComponent, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        { provide: Auth, useValue: {} },
        { provide: Firestore, useValue: {} },
        { provide: Storage, useValue: {} },
        { provide: ToastrService, useValue: {} },
        provideRouter([]),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the user form', () => {
    component.initUserForm();
    expect(component.userForm).toBeDefined();
    expect(component.userForm.get('email')).toBeDefined();
    expect(component.userForm.get('firstN')).toBeDefined();
    expect(component.userForm.get('lastN')).toBeDefined();
    expect(component.userForm.get('phone')).toBeDefined();
    expect(component.userForm.get('address')).toBeDefined();
  });



});
