import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Usuario } from './contatos.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosServices {

  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({
      Autorization: '.....Token de Autorização.....'
    })
  }

  constructor(private http: HttpClient,
  ) { }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.API_URL + '/usuarios');
  }
  
  getUsuario(id: string) {
    return this.http.get<Usuario>(this.API_URL + '/usuarios/' + id, this.httpOptions);
  }

  createUsuario(usuario: Usuario){
    return this.http.post<Usuario[]>(this.API_URL + '/usuarios', usuario, this.httpOptions);
  }

  updateUsuario(id: string, usuario: Usuario){
    return this.http.put<Usuario[]>(this.API_URL + '/usuarios' + id, usuario);
  }
  
  deleteUsuario(id: string) {
    return this.http.delete<Usuario[]>(this.API_URL + '/usuarios/' + id);
  }
}



