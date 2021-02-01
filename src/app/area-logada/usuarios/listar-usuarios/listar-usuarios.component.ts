import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Usuario } from '../contatos.interface';
import { UsuariosServices } from '../contatos.service';


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {

  usuario: Usuario[] = [];
  estaCarregando: boolean = false;
  erroNoCarregamento: boolean = false;

  constructor(
    private UsuariosServices: UsuariosServices,
    private router: Router,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
    this.CarregarUsuario();
  }

  CarregarUsuario() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    this.UsuariosServices
.getUsuarios()
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    )
  }

  onSuccess(response: Usuario[]){
    this.usuario = response;
  }

  onError(error:any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  irParaDetalhes(idUsuario
: string){
    this.router.navigate([`usuarios/${idUsuario
}`])
  }

  deletarUsuario(idUsuario
: string){
    this.UsuariosServices
.deleteUsuario(idUsuario
)
    .subscribe(
      _response => this.onSuccessDeletarUsuario(idUsuario
),
      _error => this.onErrorDeletarUsuario(),
    );
  }

  onSuccessDeletarUsuario(idUsuario
: string){
    this.toastr.success('Sucesso!', 'usuario Deletado');
    this.usuario = this.usuario.filter(usuario=> usuario.id !== idUsuario
);
  }

  onErrorDeletarUsuario(){
    console.log('erro o deletar')
  }

  novoUsuario(){
    this.router.navigate(['usuarios/novo']);
  }
}
