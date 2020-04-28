export interface ListaFornecedorContrato {
  codigoFornecedor: number;
  nomeFornecedor: string;
}

export interface List {
  chave: string;
  listaFornecedorContrato: Array<ListaFornecedorContrato>;
}


export interface Fornecedores {
  list: Array<List>;
}
