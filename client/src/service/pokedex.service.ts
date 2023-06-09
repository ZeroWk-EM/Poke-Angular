import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ResponsePokedex } from 'src/models/pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) {}

  createData = (page: number): Observable<ResponsePokedex> => {
    return this.http.get<ResponsePokedex>(`http://localhost:5000/v1/pokedex?page=${page}`);
  }
}
