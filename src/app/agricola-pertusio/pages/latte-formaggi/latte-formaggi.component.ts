import { Component } from '@angular/core';
import configJson from "./config/latte-formaggi.json";

@Component( {
    selector: 'app-latte-formaggi',
    templateUrl: './latte-formaggi.component.html',
    styleUrls: ['./latte-formaggi.component.scss'],
    standalone: false
} )
export class LatteFormaggiComponent {
  content: any;

  constructor() {
    this.content = configJson
  }
}
