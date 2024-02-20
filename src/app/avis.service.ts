import { Injectable } from '@angular/core';
import { Avis } from './avis';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  API_URL = 'http://localhost/tp2-api/?id=';
  constructor(private http: HttpClient) {}

  getAvis(id: number): Observable<Avis[]> {
    return this.http.get<Avis[]>(this.API_URL+id);
  }
}


