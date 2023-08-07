import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platform } from '../../utils/platform.class';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuNavbarModel } from './menu-navbar.interface';

@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
} )
export class NavbarComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  isMobile!: boolean;

  @Input()
  menu!: MenuNavbarModel[]

  @Output()
  pathChange = new EventEmitter<string>();

  pathIcon = ''

  constructor(
  ) {}

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
  }

  goTo( path: string ) {
    this.pathChange.emit( path )
  }
}
