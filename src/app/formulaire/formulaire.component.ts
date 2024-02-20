import { Component, Inject } from '@angular/core';
import { Video } from '../video';
/* import { FormGroup, NgModel } from '@angular/forms'; */
import { TABLEAUCATEGORIES } from '../mock-categories';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { NgForm } from '@angular/forms';
import { VideoService } from '../video.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent {
  video: Video = {
    /*  id: 0, */
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
    /*  avis: [], */
    url_image: '',
  };

  constructor(
    private videoService: VideoService,
    public dialogRef: MatDialogRef<FormulaireComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video
  ) {
    if (data) {
      this.video = data;
    }
  }

  ngOnInit(): void {}

  addVideo(videoForm: NgForm) {
    if (videoForm.valid) {
      this.videoService.addVideo(this.video).subscribe((_) => {
        videoForm.resetForm();
        this.dialogRef.close('Vidéo ajouté!');
      });
    }
  }

  updateVideo(videoForm: NgForm) {
    if (videoForm.valid) {
      this.videoService.updateVideo(this.video).subscribe((_) => {
        videoForm.resetForm();
        this.dialogRef.close('Vidéo modifié!');
      });
    }
  }

  annuler() {
    this.dialogRef.close();
  }

  /* ======================================================================================= */

  /* Date picker */

  minDate = new Date();

  /* Autocomplete */

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
