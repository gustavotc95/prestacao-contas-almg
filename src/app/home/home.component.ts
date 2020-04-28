import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Fornecedores } from '../services/fornecedores';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fornecedores: Fornecedores[];
  fornecedoresName: Array<string> = [];

  contratosForm = new FormGroup({
    cod: new FormControl(''),
    ano: new FormControl(''),
    dota: new FormControl(''),
    tipo: new FormControl(''),
    forn: new FormControl(''),
    obj: new FormControl(''),
    numLic: new FormControl(''),
    anoLic: new FormControl(''),
    modal: new FormControl(''),
    numModalCto: new FormControl(''),
    anoModalCto: new FormControl(''),
  });

  constructor(
    private apiService: ApiService
  ) { }

  formatFornecedores() {
    this.fornecedores['list'].forEach(listaFornecedores => {
      if (listaFornecedores.listaFornecedorContrato) {
        listaFornecedores.listaFornecedorContrato.forEach(fornecedor => {
          this.fornecedoresName.push(fornecedor.nomeFornecedor);
        });
      }
    });
    console.log(this.fornecedoresName);
  }

  listFornecedores(): void {
    this.apiService.getFornecedores().subscribe(
      res => {
        this.fornecedores = res;
        this.formatFornecedores();
      },
      err => { console.log(err.msg); }
    );
  }

  ngOnInit() {
    this.listFornecedores();
  }

  onSubmit() {
    console.log(this.contratosForm.value);
  }

}
