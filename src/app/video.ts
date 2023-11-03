import { Auteur } from "./auteur";
import { Avis } from "./avis";


export interface Video {
    nom: string;
    description: string;
    code: string;
    categories: string[];
    auteur: Auteur;
    datePublication: string;
    duree: number;
    nombreVues: number;
    score: number;
    sousTitres: string;
    avis: Avis[];
    image: string;
}

