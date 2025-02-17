import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiconoDiNoiComponent } from './dicono-di-noi.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule( {
    declarations: [
        DiconoDiNoiComponent
    ],
    imports: [
        CommonModule,
        CarouselModule.forRoot()
    ],
    exports: [
        DiconoDiNoiComponent
    ]
} )
export class DiconoDiNoiModule {}
