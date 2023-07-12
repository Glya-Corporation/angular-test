import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient,
  ) { }

  getCharacters(){
    return this.http.get(`${environment.api_rick}/character`)
  }
}
