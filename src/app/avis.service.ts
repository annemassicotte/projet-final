import { Injectable } from '@angular/core';
import { Avis } from './avis';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  API_URL = 'http://localhost/tp2-api/avis/';
  constructor(private http: HttpClient) {}

  getAvis(id: string): Observable<Avis[]> {
    return this.http.get<Avis[]>(`${this.API_URL}/?id=${id}`);
  }
}


