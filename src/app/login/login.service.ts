import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logar(email: String, password: String): Observable<LoginResponse> {
    if (email === 'maria@email.com' && password ==='123') {
      return of({
        usuario: {
          nome: 'Maria',
          sobrenome: 'Farias',
          email: 'maria@email.com',
        },
        token: 'aDrahabiAdGugiua16287',
      })
        .pipe(
          delay(2000),
          tap(response => {
            this.authService.setUsuario(response.usuario);
            this.authService.setToken(response.token)
          })
        );
    }
    
    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos'))
    );
  }
}
