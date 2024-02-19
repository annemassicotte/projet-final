import { Component, Input } from '@angular/core';
import { Auteur } from '../auteur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent {
  @Input() utilisateur: Auteur = {
    nom_auteur: '',
    utilisateur: '',
    verifie: false,
    description_auteur: '',
  };
  @Input() userHeaderClass: boolean = false;
  @Input() showDescription: boolean = false;
}
