import { Component, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-complet',
  templateUrl: './video-complet.component.html',
  styleUrls: ['../../shared/shared_style.css', './video-complet.component.css'],
})
export class VideoCompletComponent {
  @Input() videoComplet: Video = {
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
    sousTitres: '',
    avis: [],
    url_image: '',
  };
}
