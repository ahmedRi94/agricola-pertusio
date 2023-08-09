import { Component } from '@angular/core';
import configJson from "./config/goal-experience.json";

@Component( {
  selector: 'app-goal-experience',
  templateUrl: './goal-experience.component.html',
  styleUrls: ['./goal-experience.component.scss']
} )
export class GoalExperienceComponent {
  content!: any;

  constructor() {
    this.content = configJson
  }

}
