import { Routes } from '@angular/router';
import { FullComponent } from './components/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './ui-modules/home/home.module#HomeModule'
      },
    ]
  }

];

export class AppRoutingModule { }
