import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
import { RegesterComponent } from './auth/regester/regester.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardDetailComponent } from './dashboard/card-detail/card-detail.component';

const routes: Routes = [

  {
    path: '',
    component: RegesterComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/auth/auth.module').then(
            (m) => m.AuthModule
          )
      }
    ]
  },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          )
      }
    ]
  },
  { path: 'cardDetail', component: CardDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
