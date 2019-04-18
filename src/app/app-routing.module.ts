import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'benefits',
    loadChildren: './benefits/benefits.module#BenefitsPageModule'
  },
  {
    path: 'hcp',
    loadChildren: './hcp/hcp.module#HcpPageModule'
  },
  {
    path: 'help',
    loadChildren: './help/help.module#HelpPageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule'
  },
  { 
    path: 'login', loadChildren: './login/login.module#LoginPageModule' 
  },
  {
    path: 'adresse',
    loadChildren: './adresse/adresse.module#AdressePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
