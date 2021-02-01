import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contas } from './extrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) {}

  getTransacoes(page: number) {
    return this.http.get<Contas[]>(this.API_URL + '/contas', { 
     params: {
       _page: String(page),
     }
    });
  }
}
