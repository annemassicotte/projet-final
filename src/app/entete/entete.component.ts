import { Component, Input } from '@angular/core';
import { Video } from '../video';
import { TABLEAUVIDEOS } from '../mock-videos';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent {
  video: Video = TABLEAUVIDEOS[0];
}
