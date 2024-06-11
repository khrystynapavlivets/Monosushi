import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDialogComponent } from './phone-dialog.component';
import { Firestore } from "@angular/fire/firestore";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogRef } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('PhoneDialogComponent', () => {
  let component: PhoneDialogComponent;
  let fixture: ComponentFixture<PhoneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneDialogComponent,BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Firestore, useValue: {} }
      ],

      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize  phone form', () => {
    expect(component.phoneForm.value).toEqual({ name: null, phoneNumber: null });
  });
});
