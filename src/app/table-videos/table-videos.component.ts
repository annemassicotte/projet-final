import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Video } from '../video';
import { VideoService } from '../video.service';
/* import { NgForm } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TABLEAUCATEGORIES } from '../mock-categories'; */
import { MatDialog } from '@angular/material/dialog';
import { FormulaireComponent } from '../formulaire/formulaire.component';

@Component({
  selector: 'app-table-videos',
  templateUrl: './table-videos.component.html',
  styleUrls: ['./table-videos.component.css'],
})
export class TableVideosComponent implements OnInit {
  dataSourceVideos: MatTableDataSource<Video> = new MatTableDataSource();
  columnsToDisplay = ['nom', 'code', 'date_publication', 'duree', 'actions'];
  @ViewChild(MatTable) tableVideos!: MatTable<Video>;

  constructor(private videoService: VideoService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideos().subscribe((resultat) => {
      console.log(resultat);
      /* associer les résultats reçus par l'API à la source de données du tableau */
      this.dataSourceVideos = new MatTableDataSource(resultat);

      /* générer les résultats du tableau */
      this.tableVideos.renderRows();
    });
  }

  openDialog(video?: Video) {
    const dialogRef = this.dialog.open(FormulaireComponent, {
      data: video,
      height: '1000px',
      width: '1000px',
    });
    dialogRef.afterClosed().subscribe(() => {
      console.log('Le dialog du formulaire de vidéo a été fermé');
      this.getVideos();
    });
  }

 /*  showFormVideo(video?: Video) {
    this.openDialog(video);
  } */

  deleteVideo(id: string) {
    this.videoService.deleteVideo(id).subscribe((_) => {
      this.getVideos();
    });
  }
}

/* addVideo(videoForm: NgForm) {
    if (videoForm.valid) {      
      this.videoService.addVideo(this.video).subscribe((_) => {
        videoForm.resetForm();
        this.getVideos();
      });
    }
  } */

/* ======================================================================================= */

/*  minDate = new Date();


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

    if (!this.categoriesChoisies.includes(valeurChoisie)) {
      this.categoriesChoisies.push(valeurChoisie);
    }

    this.input_categories = '';
  }

  filtrer(): void {
    this.listeCategoriesFiltrees = this.listeCompleteCategories.filter(
      (categorie) => categorie.toLowerCase().includes(this.input_categories)
    );
  }
} */
