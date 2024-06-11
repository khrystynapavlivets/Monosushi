import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationComponent } from './authorization.component';
import {HttpClientModule} from "@angular/common/http";
import {provideRouter} from "@angular/router";
import {Auth} from "@angular/fire/auth";
import { ToastrService } from "ngx-toastr";
import { Firestore } from "@angular/fire/firestore";
import { ReactiveFormsModule } from "@angular/forms";


describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizationComponent, HttpClientModule, ReactiveFormsModule],

      providers: [
        provideRouter([]),
        { provide: Auth, useValue: {} },
        { provide: Firestore, useValue: {} },
        { provide: ToastrService, useValue: {} },
      ],
    }).compileComponents();
    
    fixture = TestBed.createComponent(AuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
