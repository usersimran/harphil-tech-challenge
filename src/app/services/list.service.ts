import { Injectable ,Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(map(res => res));
  }
}
