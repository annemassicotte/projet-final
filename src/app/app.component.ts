import { Component } from '@angular/core';
import { Video } from './video';
import { TABLEAUVIDEOS } from './mock-videos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../shared/shared_style.css', './app.component.css']
})
export class AppComponent {
  video: Video = TABLEAUVIDEOS[0];

}
