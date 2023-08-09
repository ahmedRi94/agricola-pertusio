import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GoalExperienceComponent } from './pages/goal-experience/goal-experience.component';

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
    path: 'goat-experience',
    component: GoalExperienceComponent
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
