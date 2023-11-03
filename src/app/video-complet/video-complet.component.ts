import { Component, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-complet',
  templateUrl: './video-complet.component.html',
  styleUrls: ['../../shared/shared_style.css', './video-complet.component.css'],
})
export class VideoCompletComponent {
  @Input() videoComplet: Video = {
    nom: '',
    description: '',
    code: '',
    categories: [],
    auteur: {
      nom: '',
      utilisateur: '',
      verifie: false,
      description: '',
    },
    datePublication: '',
    duree: 0,
    nombreVues: 0,
    score: 0,
    sousTitres: '',
    avis: [],
    image: '',
  };
}
