import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: ':name-profile', component: ProfileComponent },
    { path: '**', redirectTo: '' }, // Redirección en caso de rutas no encontradas
  ];