import { Injectable } from '@angular/core';
import { Video } from './video';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  API_URL = 'http://localhost/tp2-api/';
  constructor(private http: HttpClient) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.API_URL);
  }

  getVideoById(id: string): Observable<Video> {
    const url = `${this.API_URL}/?id=${id}`;
    return this.http.get<Video>(url);
  }

  addVideo(video: Video): Observable<void> {
    video.date_publication = formatDate(
      video.date_publication,
      'yyyy-MM-dd',
      'en'
    );
    return this.http.post<void>(this.API_URL, video, httpOptions);
  }

  deleteVideo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/?id=${id}`);
  }
}
