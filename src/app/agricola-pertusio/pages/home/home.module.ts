import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UiComponentsModule } from '../../components/ui-components.module';


@NgModule( {
  declarations: [
    HomeComponent
  ],
  imports: [
    UiComponentsModule,
    CommonModule,
  ],
  exports: [
    HomeComponent
  ]
} )
export class HomeModule {}
