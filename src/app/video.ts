import { Auteur } from './auteur';
import { Avis } from './avis';

export interface Video {
  id?: number;
  nom: string;
  description: string;
  code: string;
  categories: string[];
  auteur: Auteur;
  date_publication: string;
  duree: number;
  nombre_vues: number;
  score: number;
  sous_titres: string;
  avis?: Avis[];
  url_image: string;
}
