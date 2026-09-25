import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Estado } from './brasilapi.models';

@Injectable({
  providedIn: 'root',
})
export class Brasilapi {
  baseUrl: string = 'https://brasilapi.com.br/api';
 constructor(private http: HttpClient) { }

  listarUfs(): Observable<Estado[]> {
    const path = '/ibge/uf/v1';
    return this.http.get<Estado[]>(`${this.baseUrl}${path}`);

  }
}
