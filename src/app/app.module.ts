import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { appService } from './services/app.service';
import { BoxComponent } from './box/box.component';

      

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    FooterComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
