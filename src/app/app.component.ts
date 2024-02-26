import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../shared/shared_style.css', './app.component.css'],
})
export class AppComponent implements OnInit {
  video: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService
      .getVideos()
      .subscribe((resultat) => (this.video = resultat));
  }
}
