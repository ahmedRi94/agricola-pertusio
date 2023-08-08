import { Component } from '@angular/core';
import configJson from "./config/home.json"
@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
} )
export class HomeComponent {
  content: any;

  constructor() {
    this.content = configJson
  }
}
