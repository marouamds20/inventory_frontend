import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from 'app/pages/login/login.component';
export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path: '**',
    redirectTo: 'login'
  }
  ,{
     path: 'login',
     component: LoginComponent,
  pathMatch: 'full',}
]
