import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { appService } from './services/app.service';
import { BoxComponent } from './box/box.component';

      

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { CmdComponent } from './cmd/cmd.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'posts', component: PostComponent }
];

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    BoxComponent,
    CmdComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
