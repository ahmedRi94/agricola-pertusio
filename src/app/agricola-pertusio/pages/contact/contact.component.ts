import { Component } from '@angular/core';
import jsonConfig from "./config/contact.json";

@Component( {
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false
} )
export class ContactComponent {
  content: any;

  constructor() {
    this.content = jsonConfig;
  }

  goTo( iconName?: string, label?: string, url?: string ) {
    if ( !url )
      iconName === 'phone' ? window.location.href = `tel:+39${label}` : iconName === 'mail' ? window.location.href = `mailto:${label}` : null
    else window.open( url, "_blank" );
  }
}
