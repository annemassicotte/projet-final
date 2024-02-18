import { Component } from '@angular/core';
import { Video } from '../video';
/* import { FormGroup, NgModel } from '@angular/forms'; */
import { TABLEAUCATEGORIES } from '../mock-categories';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent {
  infosVideo: Video = {
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

  onSubmit() {
    console.log(this.infosVideo);
  }

  minDate = new Date();

  input_categories: string = '';
  listeCompleteCategories: string[] = TABLEAUCATEGORIES;
  listeCategoriesFiltrees: string[] = this.listeCompleteCategories;
  categoriesChoisies: string[] = [];

  retirer(categorie: string): void {
    const index = this.categoriesChoisies.indexOf(categorie);

    if (index >= 0) {
      this.categoriesChoisies.splice(index, 1);
    }
  }

  ajouter(event: MatAutocompleteSelectedEvent): void {
    let valeurChoisie = event.option.viewValue;

    // s'il n'est pas déjà présent dans la liste
    if (!this.categoriesChoisies.includes(valeurChoisie)) {
      this.categoriesChoisies.push(valeurChoisie);
    }

    this.input_categories = ''; // réinitialise la zone de texte
  }

  filtrer(): void {
    this.listeCategoriesFiltrees = this.listeCompleteCategories.filter(
      (categorie) => categorie.toLowerCase().includes(this.input_categories)
    );
  }
}
