import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Fornecedores } from '../services/fornecedores';
import { Contratos } from '../services/contratos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fornecedores: Fornecedores[];
  fornecedoresName: Array<string> = [];

  contratos: Contratos[];

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

  listContratos(query: string) {
    this.apiService.getContratos(query).subscribe(
      res => {
        console.log('res');
      },
      err => {
        console.log('teste');
        console.log(err);
      }
    );
  }


  ngOnInit() {
    this.listFornecedores();
  }

  onSubmit() {
    // tslint:disable-next-line: max-line-length
    const query = `?cod=${this.contratosForm.value.cod}&ano=${this.contratosForm.value.ano}&dota=${this.contratosForm.value.dota}&tipo=${this.contratosForm.value.tipo}&forn=${this.contratosForm.value.forn}&obj=${this.contratosForm.value.obj}&numLic=${this.contratosForm.value.numLic}&anoLic=${this.contratosForm.value.anoLic}&modal=${this.contratosForm.value.modal}&numModalCto=${this.contratosForm.value.numModalCto}&anoModalCto=${this.contratosForm.value.anoModalCto}`;
    this.listContratos(query);
  }

}
