import { Component } from '@angular/core';
import { MenuNavbarModel } from './agricola-pertusio/components/navbar/menu-navbar.interface';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
} )
export class AppComponent {
  title = 'agricola-pertusio';

  sticky = false;

  menu: MenuNavbarModel[] = [
    {
      path: "/home-page",
      label: "Home"
    },
    {
      path: "/goat-experience",
      label: "Goat experience"
    },
    {
      path: "/latte-e-formaggi",
      label: "Latte e formaggi"
    },
    {
      path: "/gallery",
      label: "Gallery"
    },
    {
      path: "/home-page",
      label: "Agricola pertusio",
      propertyName: "logo"
    },
    {
      path: "/contacts",
      label: "Contact",
      propertyName: "contact"
    }
  ]

  openVerticalMenu!: boolean;
  selected: number;

  constructor(
    private readonly router: Router
  ) {
    console.log( Number( localStorage.getItem( 'selected' ) ) );

    this.selected = localStorage.getItem( 'selected' ) && Number( localStorage.getItem( 'selected' ) ) !== 4 ? Number( localStorage.getItem( 'selected' ) ) : 0
  }

  changePath( path: string ) {
    this.router.navigateByUrl( path )
  }
}
