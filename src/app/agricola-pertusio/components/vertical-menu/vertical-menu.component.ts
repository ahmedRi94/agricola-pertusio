import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuNavbarModel } from '../navbar/menu-navbar.interface';
import { Platform } from '../../utils/platform.class';

@Component( {
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
} )
export class VerticalMenuComponent implements OnInit {
  @Input() menu!: MenuNavbarModel[];
  @Input() sidenav!: MatSidenav;
  isMobile!: boolean;

  @Output()
  pathChange = new EventEmitter<string>()

  private _selected!: number;

  @Input()
  set selected( value: number ) {
    this._selected = value
    localStorage.setItem( 'selected', String( this.selected ) )
    this.selectedChange.emit( this.selected )
  }

  get selected() {
    return this._selected
  }

  @Output()
  selectedChange = new EventEmitter<number>()


  constructor() {}

  ngOnInit(): void {
    this.isMobile = Platform.isMobile();
  }

  goTo( path: string, indexSelected: number ) {
    this.selected = indexSelected
    this.sidenav.toggle()
    this.pathChange.emit( path )
  }
}
