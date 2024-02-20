import { Pipe, PipeTransform } from '@angular/core';
import { Video } from './video';

@Pipe({
  name: 'categorieFiltree',
})
export class CategorieFiltreePipe implements PipeTransform {
  transform(videos: Video[], selectedCategories: string[]): Video[] {
    if (!selectedCategories || selectedCategories.length === 0) {
      return videos;
    }

    return videos.filter((video) =>
      video.categories.some((category) =>
        selectedCategories.includes(category)
      )
    );
  }
}
