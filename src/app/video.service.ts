import { Injectable } from '@angular/core';
import { Video } from './video';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  API_URL = 'http://localhost/tp2-api/';
  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.API_URL);
  }
}
