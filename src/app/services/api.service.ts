import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedores } from './fornecedores';
import { Contratos } from './contratos';

const urlApiFornecedores = 'http://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/fornecedores/indexados?formato=json';

const urlApiContratos = 'http://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/pesquisa';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getFornecedores() {
    return this.http.get<Fornecedores[]>(urlApiFornecedores);
  }

  getContratos(query) {
    return this.http.get('http://dadosabertos.almg.gov.br/ws/prestacao_contas/contratos/pesquisa?ano=2017&formato=json');
  }
}
