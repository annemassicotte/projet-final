import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { ActivatedRoute } from '@angular/router';
import { AvisService } from '../avis.service';

@Component({
  selector: 'app-video-complet',
  templateUrl: './video-complet.component.html',
  styleUrls: ['../../shared/shared_style.css', './video-complet.component.css'],
})
export class VideoCompletComponent implements OnInit {
  @Input() videoComplet: Video = {
    id: 0,
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
    avis: [],
    url_image: '',
  };

  constructor(
    private videoService: VideoService,
    private avisService: AvisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getVideo();
    this.getAvis();
  }

  getVideo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.videoService
        .getVideoById(Number(id))
        .subscribe((resultat) => (this.videoComplet = resultat));
    }
  }

  getAvis(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.avisService
        .getAvis(id)
        .subscribe((resultat) => (this.videoComplet.avis = resultat));
    }
  }
}
