import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private http: HttpClient
  ) { }

  getTopHeadLines() {
    return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=345cb328f6314437b27a1528f9ae8ceb`);
  }
}
