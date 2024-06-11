import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from "@angular/router";
import {Firestore} from "@angular/fire/firestore";




describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent,  ],
      providers: [
        provideRouter([]),
        { provide: Firestore, useValue: {} },
      ]

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });``

  it(`should have the 'monosushi' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.title='monosushi';
    expect(app.title).toEqual('monosushi');
  });
  // Statements   : 42.78% ( 243/568 )
  // Branches     : 7.52% ( 7/93 )
  // Functions    : 36.11% ( 78/216 )
  // Lines        : 41.94% ( 229/546 )


  // Statements   : 43.13% ( 245/568 )
  // Branches     : 7.52% ( 7/93 )
  // Functions    : 37.03% ( 80/216 )
  // Lines        : 42.3% ( 231/546 )

  // Statements   : 42.6% ( 242/568 )
  // Branches     : 7.52% ( 7/93 )
  // Functions    : 35.64% ( 77/216 )
  // Lines        : 41.75% ( 228/546 )

  // Statements   : 42.95% ( 244/568 )
  // Branches     : 7.52% ( 7/93 )
  // Functions    : 36.57% ( 79/216 )
  // Lines        : 42.12% ( 230/546 )

  // Statements   : 42.6% ( 242/568 )
  // Branches     : 7.52% ( 7/93 )
  // Functions    : 35.64% ( 77/216 )
  // Lines        : 41.75% ( 228/546 )



  // Statements   : 43.2% ( 245/567 )
  // Branches     : 7.52% ( 7/93 )
  // Functions    : 37.2% ( 80/215 )
  // Lines        : 42.38% ( 231/545 )


  // Statements   : 43.3% ( 246/568 )
  // Branches     : 7.52% ( 7/93 )
  // Functions    : 37.2% ( 80/215 )
  // Lines        : 42.49% ( 232/546 )

  // Statements   : 45.99% ( 264/574 )
  // Branches     : 9.57% ( 9/94 )
  // Functions    : 41.28% ( 90/218 )
  // Lines        : 45.28% ( 250/552 )


});
