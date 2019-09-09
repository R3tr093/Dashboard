import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { mainService } from './services/app.service';
import { BoxComponent } from './box/box.component';


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
  providers: [mainService],
  bootstrap: [AppComponent]
})
export class AppModule { }