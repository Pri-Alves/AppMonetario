import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      id: ['', [Validators.required]],
    })
  }

  exibeErro(nomeControle: string){
    if (this.contatoForm.controls[nomeControle]) {
      return false;
    }
    return this.contatoForm.controls[nomeControle].invalid && this.contatoForm.controls[nomeControle].touched
  }

  validadeAllFormFields(){
    Object.keys(this.contatoForm.controls).forEach(field => {
      const control = this.contatoForm.get(field);
      control?.markAsTouched();
    });
  }

  salvarContato(){
    if (this.contatoForm.invalid) {
      this.validadeAllFormFields();
      return;
    }
    console.log(this.contatoForm);
  }

}
