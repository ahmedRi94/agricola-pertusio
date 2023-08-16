import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricolaPertusioRoutingModule } from './agricola-pertusio-routing.module';
import { UiComponentsModule } from './components/ui-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module';
import { GoalExperienceModule } from './pages/goal-experience/goal-experience.module';
import { LatteFormaggiModule } from './pages/latte-formaggi/latte-formaggi.module';
import { ContactModule } from './pages/contact/contact.module';

@NgModule( {
  imports: [
    UiComponentsModule,
    CommonModule,
    BrowserModule,
    AgricolaPertusioRoutingModule,
    AgricolaPertusioModule.customModule
  ],
  exports: [
    AgricolaPertusioModule.customModule,
    UiComponentsModule
  ]
} )
export class AgricolaPertusioModule {
  static customModule = [
    ContactModule,
    LatteFormaggiModule,
    GoalExperienceModule,
    HomeModule
  ]
}
