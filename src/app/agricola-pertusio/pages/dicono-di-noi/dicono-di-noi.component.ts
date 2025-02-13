import { Component } from "@angular/core";
import configJson from "./config/dicono-di-noi.json";

@Component( {
    selector: 'app-dicono-di-noi',
    templateUrl: './dicono-di-noi.component.html',
    styleUrls: ['./dicono-di-noi.component.scss'],
    standalone: false
} )
export class DiconoDiNoiComponent {
    content: any;

    constructor() {
        this.content = configJson;
    }
}