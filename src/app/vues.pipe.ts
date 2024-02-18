import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vues',
})
export class VuesPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === 0) {
      return 'Aucun visionnement';
    }

    const pluralMapping = {
      singulier: 'visionnement',
      pluriel: 'visionnements',
    };

    if (value === 1) {
      return `${value} ${pluralMapping.singulier}`;
    } else if (value < 1000) {
      return `${value} ${pluralMapping.pluriel}`;
    } else if (value < 1000000) {
      const milliers = Math.floor(value / 1000);
      return `${milliers}K ${pluralMapping.pluriel}`;
    } else {
      const millions = value / 1000000;
      return `${millions}M ${pluralMapping.pluriel}`;
    }
  }
}

/* import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vues',
})
export class VuesPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === 0) {
      return 'Aucun visionnement';
    } */

/* if (value === 1) {
      return '1 visionnement';
    }

    if (value < 1000) {
      return `${value}`;
    } else if (value < 1000000) {
      const milliers = Math.floor(value / 1000);
      return `${milliers}K`;
    } else {
      const millions = value / 1000000;
      return `${millions}M`;
    }
  } */
