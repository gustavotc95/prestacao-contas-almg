export interface ListContratos {
  seqDocumentoContrato: number;
  codTipoObjetoContrato: number;
  nomeFornecedor: string;
  codigoFornecedor: number;
  codDotacaoOrcamentaria: string;
  dataProxApostila: string;
  tipoDocumentoContrato: string;
  codDocumentoContrato: number;
  anoDocumentoContrato: number;
  descObjetoDocumento: string;
  dataTerminoVigencia: object;
  dataInicioVigencia: object;
  dataTermVigenciaContratoOrig: object;
  numProcessoLicitatorio: string;
  anoProcessoLicitatorio: number;
  valorInicialContrato: string;
  descModalidadePedido: string;
  dataAssinaturaContrato: object;
  numCNPJ: string;
  tipoValor: string;
  simboloMoeda: string;
  dataPublicacaoContrato: object;
  listaAditamento: Array<any>;
  listaMaoDeObra: Array<any>;
}

export interface Contratos {
  list: Array<ListContratos>;
}
