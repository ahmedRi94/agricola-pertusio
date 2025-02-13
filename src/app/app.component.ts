import { Component } from '@angular/core';
import { MenuNavbarModel } from './agricola-pertusio/components/navbar/menu-navbar.interface';
import { Router } from '@angular/router';
import { Platform } from './agricola-pertusio/utils/platform.class';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
} )
export class AppComponent {
  title = 'i-pastori-del-roero';

  sticky = false;

  menu: MenuNavbarModel[] = [
    {
      path: "/home-page",
      label: ["Home"]
    },
    {
      path: "/dicono-di-noi",
      label: ["Dicono", "di noi"]
    },
    {
      path: "/goat-experience",
      label: ["Goat", "experience"]
    },
    {
      path: "/latte-e-formaggi",
      label: ["Latte e", "formaggi"]
    },
    {
      path: "/home-page",
      label: ["i pastori", "del roero"],
      propertyName: "logo",
      imgUrl: "../../../../assets/images/logo.jpg"
    },
    {
      path: "/contact",
      label: ["Contact"],
      propertyName: "contact"
    }
  ]

  openVerticalMenu!: boolean;
  selected: number;

  constructor(
    private readonly router: Router
  ) {
    this.selected = sessionStorage.getItem( 'selected' ) && Number( sessionStorage.getItem( 'selected' ) ) === 4 && !Platform.isMobile() ? 0 : Number( sessionStorage.getItem( 'selected' ) )
    this.router.navigateByUrl( this.menu[this.selected].path )
  }

  changePath( path: string ) {
    this.router.navigateByUrl( path )
    this.selected === 4 && !Platform.isMobile() ? location.reload() : null
  }
}
