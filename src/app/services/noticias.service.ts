import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(
    private http: HttpClient
  ) { }

  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    console.log('query: ', query);

    return this.http.get<T>(query, { headers });
  }

  getTopHeadLines() {
    // return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=345cb328f6314437b27a1528f9ae8ceb`);
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us`);
  }

  getTopHeadLinesCategoria(categoria: string) {
    // return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=345cb328f6314437b27a1528f9ae8ceb`);
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}`);
  }
}
