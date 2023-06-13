import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ResponsePokedex } from 'src/models/pokedex';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private http: HttpClient) {}

  createData = (page: number): Observable<ResponsePokedex> => {
    const header = new HttpHeaders({
      authorization: `${localStorage.getItem('token')}`,
    });

    return this.http.get<ResponsePokedex>(
      `http://localhost:5000/v1/pokedex?page=${page}`,
      { headers: header }
    );
  };

  searchPokemon(name: string): Observable<ResponsePokedex> {
    const header = new HttpHeaders({
      authorization: `${localStorage.getItem('token')}`,
    });
    return this.http.get<ResponsePokedex>(
      `http://localhost:5000/v1/pokedex/${name}`,
      { headers: header }
    );
  }
}
