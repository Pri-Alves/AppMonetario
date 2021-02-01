import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UsuariosRoutingModule } from './contatos-routing.module';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';


@NgModule({
  declarations: [
    ListarUsuariosComponent,
    NovoUsuarioComponent
   ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContatosModule { }
