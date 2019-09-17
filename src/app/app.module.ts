import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { appService } from './services/app.service';
import { BoxComponent } from './box/box.component';
import { RouterModule, Routes } from '@angular/router';
      

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { CmdComponent } from './cmd/cmd.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '',component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];


registerLocaleData(localeFr, 'fr-FR', localeFrExtra);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    BoxComponent,
    CmdComponent,
    NotFoundComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
