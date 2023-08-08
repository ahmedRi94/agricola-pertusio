import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricolaPertusioRoutingModule } from './agricola-pertusio-routing.module';
import { UiComponentsModule } from './components/ui-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module';

@NgModule( {
  declarations: [
  ],
  imports: [
    UiComponentsModule,
    CommonModule,
    BrowserModule,
    AgricolaPertusioRoutingModule,
    HomeModule
  ],
  exports: [
    HomeModule,
    UiComponentsModule
  ]
} )
export class AgricolaPertusioModule {}
