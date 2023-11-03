import { Component, Input } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-petit-video',
  templateUrl: './petit-video.component.html',
  styleUrls: ['./petit-video.component.css'],
})
export class PetitVideoComponent {
  @Input() petitVideo: Video = {
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
