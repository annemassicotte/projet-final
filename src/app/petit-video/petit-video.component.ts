import { Component, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-petit-video',
  templateUrl: './petit-video.component.html',
  styleUrls: ['./petit-video.component.css'],
})
export class PetitVideoComponent {
  @Input() petitVideo: Video = {
    id: 0,
    nom: '',
    description: '',
    code: '',
    categories: [],
    auteur: {
      nom_auteur: '',
      utilisateur: '',
      verifie: false,
      description_auteur: '',
    },
    date_publication: '',
    duree: 0,
    nombre_vues: 0,
    score: 0,
    sous_titres: '',
    avis: [],
    url_image: '',
  };
}
