/* import { Component, Input } from '@angular/core';
import { Video } from '../video';
import { TABLEAUVIDEOS } from '../mock-videos';

@Component({
  selector: 'app-liste-petits-videos',
  templateUrl: './liste-petits-videos.component.html',
  styleUrls: ['./liste-petits-videos.component.css']
})
export class ListePetitsVideosComponent {
  videos: Video[] = TABLEAUVIDEOS;
}
 */

import { Component, Input } from '@angular/core';
import { Video } from '../video';
//import { TABLEAUVIDEOS } from '../mock-videos';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-liste-petits-videos',
  templateUrl: './liste-petits-videos.component.html',
  styleUrls: ['./liste-petits-videos.component.css'],
})
export class ListePetitsVideosComponent {
  /*  videos: Video[] = TABLEAUVIDEOS; */
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService
      .getVideos()
      .subscribe((resultat) => (this.videos = resultat));
  }
}
