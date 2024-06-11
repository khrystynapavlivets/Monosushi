import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDialogComponent } from './auth-dialog.component';
import {provideRouter} from "@angular/router";
import {Auth} from "@angular/fire/auth";
import {Firestore} from "@angular/fire/firestore";
import {ToastrService} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('AuthDialogComponent', () => {
  let component: AuthDialogComponent;
  let fixture: ComponentFixture<AuthDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthDialogComponent, HttpClientModule,ReactiveFormsModule,MatDialogModule, BrowserAnimationsModule],
      providers: [
        provideRouter([]),
        { provide: Auth, useValue: {} },
        { provide: Firestore, useValue: {} },
        { provide: ToastrService, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize admin auth form', () => {
    expect(component.authForm.value).toEqual({email: null, password: null});
  });

  it('should initialize register form', () => {
    expect(component.registerForm.value).toEqual({email: null, password: null,
      confirmedPassword:null,firstName:null,lastName:null,phoneNumber:null});
  });

  it('should set checkError to true when passwords do not match', () => {
    const passwordControl = component.registerForm.controls['password'];
    const confirmedPasswordControl = component.registerForm.controls['confirmedPassword'];
    passwordControl.setValue('password');
    confirmedPasswordControl.setValue('password');
    expect(component.checkPassword).toBeTrue();
  });

  it('should set checkError to false when passwords match', () => {
    const passwordControl = component.registerForm.controls['password'];
    const confirmedPasswordControl = component.registerForm.controls['confirmedPassword'];
    passwordControl.setValue('password');
    confirmedPasswordControl.setValue('password1');
    expect(component.checkPassword).toBeFalse();
  });

});
