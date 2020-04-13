import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './layouts/website/website.component';
import { UpComponent } from './layouts/website/menu/up/up.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    UpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
