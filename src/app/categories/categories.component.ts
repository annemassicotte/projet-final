import { Component } from '@angular/core';
import { TABLEAUCATEGORIES } from '../mock-categories';
import { ActivatedRoute } from "@angular/router";
import { VideoService } from "../video.service";
import { Video } from "../video";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  tableauCategories: string[] = TABLEAUCATEGORIES;
  categories: string[] = [];
  videos: Video[] = [];

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const category = params.get('categorie');
      this.categories = category ? [category] : [];
      this.getVideos();
    });
  }

  getVideos(): void {
    this.videoService
      .getVideos()
      .subscribe((resultat) => (this.videos = resultat));
  }
}
