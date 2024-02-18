import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'videosPopulaires'
})
export class VideosPopulairesPipe implements PipeTransform {

  transform(videos: Video[], min: number = 1000): Video[] {
    return videos.filter((video) => video.score > min);
  }

}
