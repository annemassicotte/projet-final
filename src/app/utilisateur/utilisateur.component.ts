import { Component, Input } from '@angular/core';
import { Auteur } from '../auteur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {
  @Input() utilisateur: Auteur = {
    nom: '',
    utilisateur: '',
    verifie: false,
    description: ''
  }
  @Input() userHeaderClass = false; 
}
