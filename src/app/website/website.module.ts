import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    CarouselModule.forRoot(),
    AlertModule.forRoot()
  ]
})
export class WebsiteModule { }
