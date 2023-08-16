import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule( {
  declarations: [
    ContactComponent
  ],
  imports: [
    MatIconModule,
    CommonModule
  ],
  exports: [
    ContactComponent
  ]
} )
export class ContactModule {}
