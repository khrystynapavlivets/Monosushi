import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from "@angular/forms";
import {Firestore} from "@angular/fire/firestore";
import {Storage} from "@angular/fire/storage";
import {provideRouter} from "@angular/router";

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComponent, ReactiveFormsModule],
      providers: [
        { provide: Firestore, useValue: {} },
        { provide: Storage, useValue: {} },
        provideRouter([]),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
