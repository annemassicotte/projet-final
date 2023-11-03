import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetitVideoComponent } from './petit-video/petit-video.component';
import { VideoCompletComponent } from './video-complet/video-complet.component';
import { ListePetitsVideosComponent } from './liste-petits-videos/liste-petits-videos.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { MenuAsideComponent } from './menu-aside/menu-aside.component';
import { EnteteComponent } from './entete/entete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    PetitVideoComponent,
    VideoCompletComponent,
    ListePetitsVideosComponent,
    UtilisateurComponent,
    MenuAsideComponent,
    EnteteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
