import { Component, Input } from '@angular/core';
import { Auteur } from "../auteur";

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css'],
})
export class EnteteComponent {
  @Input() utilisateur: Auteur = {
    nom_auteur: '',
    utilisateur: '',
    verifie: false,
    description_auteur: '',
  };
}
