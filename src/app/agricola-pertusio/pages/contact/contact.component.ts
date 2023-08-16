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

  goTo( iconName: string, label: string ) {
    iconName === 'phone' ? window.location.href = `tel:+39${label}` : iconName === 'mail' ? window.location.href = `mailto:${label}` : null
  }
}
