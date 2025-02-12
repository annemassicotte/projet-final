import { Component, Input } from '@angular/core';
import { Avis } from "../avis";

@Component({
  selector: 'app-ajout-avis',
  templateUrl: './ajout-avis.component.html',
  styleUrls: ['./ajout-avis.component.css'],
})
export class AjoutAvisComponent {
  @Input() avis: Avis = {
    id: 0,
    fk_video: 0,
    note: 0,
    commentaire: '',
  };

  onSubmit() {
    console.log(this.avis.commentaire);
  }
}
