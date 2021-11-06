import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature(){

    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2021-12-31&api_key=8a05395ea724c063ec59fe2970f1c730&language=es&include_image_language=es`);

  }

}
