import { Component } from '@angular/core';
import jsonConfig from "./config/contact.json";

@Component( {
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
} )
export class ContactComponent {
  content: any;

  constructor() {
    this.content = jsonConfig;
  }
}
