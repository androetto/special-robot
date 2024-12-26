import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyDVtFzg3HsRcX-5Lalj2L4UyrpsRZz-Vx0",
  authDomain: "special-robot-28f5a.firebaseapp.com",
  projectId: "special-robot-28f5a",
  storageBucket: "special-robot-28f5a.firebasestorage.app",
  messagingSenderId: "219007174420",
  appId: "1:219007174420:web:5d360bb60eccc0fb80e401",
  measurementId: "G-9BQFNHF69V"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ]
};
