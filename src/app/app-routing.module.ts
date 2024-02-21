import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePetitsVideosComponent } from './liste-petits-videos/liste-petits-videos.component';
import { AProposComponent } from './apropos/apropos.component';
import { AdministrationComponent } from './administration/administration.component';
import { VideoCompletComponent } from './video-complet/video-complet.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: ListePetitsVideosComponent,
  },
  {
    path: 'a-propos',
    component: AProposComponent,
  },
  {
    path: 'administration',
    component: AdministrationComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  { path: 'video/:id', component: VideoCompletComponent },
  { path: 'categories/:categorie', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
