import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgricolaPertusioRoutingModule } from './agricola-pertusio-routing.module';
import { UiComponentsModule } from './components/ui-components.module';

@NgModule( {
  declarations: [
  ],
  imports: [
    UiComponentsModule,
    CommonModule,
    AgricolaPertusioRoutingModule
  ],
  exports: [
    UiComponentsModule
  ]
} )
export class AgricolaPertusioModule {}
