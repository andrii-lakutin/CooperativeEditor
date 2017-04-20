import { Routes } from '@angular/router';

import { LoginPageComponent } from './login/login-page/login-page.component';
import { RoomComponent } from './room/room.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'rooms/:id',
    component: RoomComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
