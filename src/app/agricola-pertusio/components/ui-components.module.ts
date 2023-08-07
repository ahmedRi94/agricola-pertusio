import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';


@NgModule( {
  declarations: [
    UiComponentsModule.customComponent,
  ],
  imports: [
    CommonModule,
    UiComponentsModule.material
  ],
  exports: [
    UiComponentsModule.customComponent,
    UiComponentsModule.material
  ]
} )
export class UiComponentsModule {
  static customComponent = [
    VerticalMenuComponent,
    NavbarComponent
  ]
  static material = [
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ]
}
