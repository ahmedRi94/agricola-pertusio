import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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
    sessionStorage.setItem( 'selected', String( value ) )
    this.selectedChange.emit( value )
  }

  get selected() {
    return this._selected
  }

  @Output()
  selectedChange = new EventEmitter<number>()

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
    this.sizeWindow = window.innerWidth
  }

  goTo( path: string, indexSelected: number ) {
    this.selected = indexSelected;
    this.pathChange.emit( path )
  }

  splitter( name: string ) {
    return name.split( ' ' )
  }

  getColRow( propertyName: string | undefined ) {
    switch ( propertyName ) {
      case 'logo': {
        if ( this.sizeWindow > 1553 )
          return '6'
        else if ( this.sizeWindow > 1400 )
          return '5'
        else if ( this.sizeWindow > 966 )
          return '4'
        return '3'
      }
      default:
        return 'auto'
    }
  }

  private sizeWindow!: number;

  @HostListener( 'window:resize', ['$event'] )
  onResize( event: any ) {
    this.sizeWindow = event.target.innerWidth
  }
}
