import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duree',
})
export class DureePipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || isNaN(value)) {
      return '0:00';
    }

    const heures = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const secondes = Math.floor(value % 60);

    const heuresDisplay = heures > 0 ? `${heures}:` : '';
    const minutesDisplay =
      heures > 0 && minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondesDisplay = `${secondes < 10 ? '0' : ''}${secondes}`;

    return `${heuresDisplay}${minutesDisplay}:${secondesDisplay}`;
  }
}
