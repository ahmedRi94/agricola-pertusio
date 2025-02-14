import { Component, HostListener } from '@angular/core';
import configJson from "./config/goat-experience.json";

@Component( {
  selector: 'app-goat-experience',
  templateUrl: './goat-experience.component.html',
  styleUrls: ['./goat-experience.component.scss'],
  standalone: false
} )
export class GoatExperienceComponent {
  content!: any;
  sizeWindow: number;
  constructor() {
    this.content = configJson
    this.sizeWindow = window.innerWidth
  }


  @HostListener( 'window:resize', ['$event'] )
  onResize( event: any ) {
    this.sizeWindow = event.target.innerWidth
  }
}
