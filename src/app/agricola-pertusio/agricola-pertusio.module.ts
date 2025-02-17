import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricolaPertusioRoutingModule } from './agricola-pertusio-routing.module';
import { UiComponentsModule } from './components/ui-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module';
import { GoatExperienceModule } from './pages/goat-experience/goat-experience.module';
import { LatteFormaggiModule } from './pages/latte-formaggi/latte-formaggi.module';
import { ContactModule } from './pages/contact/contact.module';
import { DiconoDiNoiModule } from './pages/dicono-di-noi/dicono-di-noi.module';

@NgModule( {
  imports: [
    UiComponentsModule,
    CommonModule,
    BrowserModule,
    AgricolaPertusioRoutingModule,
    AgricolaPertusioModule.customModule,
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
    GoatExperienceModule,
    HomeModule,
    DiconoDiNoiModule
  ]
}
