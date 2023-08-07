import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: 'home-page'
  },
  {
    path: 'home-page',
    component: HomeComponent
  }
];

@NgModule( {
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
} )
export class AgricolaPertusioRoutingModule {}
