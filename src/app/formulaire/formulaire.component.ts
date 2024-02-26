import { Component, Inject } from '@angular/core';
import { Video } from '../video';
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
}
