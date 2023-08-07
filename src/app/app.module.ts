import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgricolaPertusioModule } from './agricola-pertusio/agricola-pertusio.module';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    AgricolaPertusioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule {}
