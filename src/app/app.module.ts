import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PetitVideoComponent } from './petit-video/petit-video.component';
import { VideoCompletComponent } from './video-complet/video-complet.component';
import { ListePetitsVideosComponent } from './liste-petits-videos/liste-petits-videos.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { MenuAsideComponent } from './menu-aside/menu-aside.component';
import { EnteteComponent } from './entete/entete.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AjoutAvisComponent } from './ajout-avis/ajout-avis.component';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteModule,
} from '@angular/material/autocomplete';
import { DureePipe } from './duree.pipe';
import { VuesPipe } from './vues.pipe';
import { VideosPopulairesPipe } from './videos-populaires.pipe';
import { CategorieFiltreePipe } from './categorie-filtree.pipe';

import {VideoService} from './video.service';
import { TableVideosComponent } from './table-videos/table-videos.component';
import { AdministrationComponent } from './administration/administration.component';
import { AProposComponent } from './apropos/apropos.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PetitVideoComponent,
    VideoCompletComponent,
    ListePetitsVideosComponent,
    UtilisateurComponent,
    MenuAsideComponent,
    EnteteComponent,
    CategoriesComponent,
    FormulaireComponent,
    AjoutAvisComponent,
    DureePipe,
    VuesPipe,
    VideosPopulairesPipe,
    CategorieFiltreePipe,
    TableVideosComponent,
    AdministrationComponent,
    AProposComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [VideoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
