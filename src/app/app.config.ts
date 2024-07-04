import { ApplicationConfig, ModuleWithProviders, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideFirestore, getFirestore, FirestoreModule } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    BrowserModule,
    BrowserAnimationsModule,
  provideAnimations(),
  provideClientHydration(),
  provideHttpClient(withFetch()),
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideStorage(() => getStorage()),
  importProvidersFrom(ToastrModule.forRoot() as ModuleWithProviders<ToastrModule>),
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth()),
  provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
