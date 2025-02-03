import { Component, HostListener } from '@angular/core';
import configJson from "./config/goal-experience.json";

@Component( {
    selector: 'app-goal-experience',
    templateUrl: './goal-experience.component.html',
    styleUrls: ['./goal-experience.component.scss'],
    standalone: false
} )
export class GoalExperienceComponent {
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
