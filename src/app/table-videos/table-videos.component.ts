import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Video } from '../video';
import { VideoService } from '../video.service';
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

      this.dataSourceVideos = new MatTableDataSource(resultat);

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


  deleteVideo(id: number) {
    this.videoService.deleteVideo(id).subscribe((_) => {
      this.getVideos();
    });
  }
}
