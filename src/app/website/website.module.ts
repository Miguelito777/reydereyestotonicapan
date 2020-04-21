import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    CarouselModule.forRoot()
  ]
})
export class WebsiteModule { }
