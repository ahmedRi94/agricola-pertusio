import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoatExperienceComponent } from './goat-experience.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule( {
  declarations: [
    GoatExperienceComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot()
  ],
  exports: [
    GoatExperienceComponent
  ]
} )
export class GoatExperienceModule {}
