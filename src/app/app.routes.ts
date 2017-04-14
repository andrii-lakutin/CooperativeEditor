import { LoginPageComponent } from './login/login-page/login-page.component';

export const appRoutes = [
  {
    path: 'login',
    component: LoginPageComponent,
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
