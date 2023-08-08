import { Component, HostListener } from '@angular/core';
import configJson from "./config/home.json"
@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent {
  content: any;
  sizeWindow: number;

  constructor() {
    this.content = configJson
    this.sizeWindow = window.innerWidth
  }

  getCorrectlyCol( isFirst: boolean ) {
    switch ( isFirst ) {
      case true: {
        if ( this.sizeWindow > 1400 )
          return '-8'
        if ( this.sizeWindow > 1200 )
          return '-7'
        if ( this.sizeWindow > 992 )
          return '-6'
        return null
      }
      default:
        if ( this.sizeWindow < 992 )
          return ' text-center'
        return null
    }
  }


  @HostListener( 'window:resize', ['$event'] )
  onResize( event: any ) {
    this.sizeWindow = event.target.innerWidth
  }
}
