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

  pathIcon = 'menu'

  private _selected!: number;

  @Input()
  set selected( value: number ) {
    this._selected = value
    localStorage.setItem( 'selected', String( value ) )
    this.selectedChange.emit( value )
  }

  get selected() {
    return this._selected
  }

  @Output()
  selectedChange = new EventEmitter<number>()

  constructor(
  ) {}

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
    console.log( this.isMobile );

  }

  goTo( path: string, indexSelected: number ) {
    this.selected = indexSelected;
    this.pathChange.emit( path )
  }

  splitter( name: string ) {
    return name.split( ' ' )
  }
}
