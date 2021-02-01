import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Contas } from './extrato.interface';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})

export class ExtratoComponent implements OnInit {

  contas: Contas[] = [];
  pagina = 1;

  estaCarregando: boolean = false;
  erroNoCarregamento: boolean = false;

  constructor(
    private extratoService: ExtratoService
    ) { }

  ngOnInit() {
    this.carregarExtrato();
   }

  carregarExtrato() {
  this.estaCarregando = true;
  this.erroNoCarregamento = false;
  
  this.extratoService.getTransacoes(this.pagina)
  .pipe(
    take(1),
    finalize(() => this.estaCarregando = false)
  )
    .subscribe(
      response => this.onSuccesso(response),
      error => this.onError(error),
    );
  }
  
  onSuccesso(response: Contas[]){
    this.contas = response;
  }
  
  onError(error:any){
    this.erroNoCarregamento = true;
    console.error(error);
  }

  proximaPagina(){
    this.pagina = this.pagina + 1;
    this.carregarExtrato()
  }
  
  paginaAnterior(){
    this.pagina = this.pagina - 1;
    this.carregarExtrato()
  }
}
