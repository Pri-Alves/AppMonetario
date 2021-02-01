import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';


const routes: Routes = [{
  path: '',
  component: ListarUsuariosComponent,
},{
  path: 'novo',
  component: NovoUsuarioComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuariosRoutingModule { }
