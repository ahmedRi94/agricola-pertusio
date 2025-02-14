import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GoatExperienceComponent } from './pages/goat-experience/goat-experience.component';
import { LatteFormaggiComponent } from './pages/latte-formaggi/latte-formaggi.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DiconoDiNoiComponent } from './pages/dicono-di-noi/dicono-di-noi.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: 'home-page'
  },
  {
    path: 'home-page',
    component: HomeComponent
  },
  {
    path: 'dicono-di-noi',
    component: DiconoDiNoiComponent
  },
  {
    path: 'goat-experience',
    component: GoatExperienceComponent
  },
  {
    path: 'latte-e-formaggi',
    component: LatteFormaggiComponent
  },
  {
    path: 'contact',
    component: ContactComponent
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
