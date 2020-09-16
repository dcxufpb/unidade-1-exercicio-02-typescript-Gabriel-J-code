let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function imprime_dados_loja() {
	var aux= dados.nome_loja +
	dados.logradouro + ", " + dados.numero.toString() + " " + dados.complemento +
	dados.bairro + " - " + dados.municipio + " - " + dados.estado + 
	"CEP:" + dados.cep + " Tel " + dados.telefone + 
	dados.observacao + 
	"CNPJ: " + dados.cnpj + 
	"IE: " + dados.inscricao_estadual + ;
	return aux;
}

module.exports = {
  dados: dados,
  imprime_dados_loja:  imprime_dados_loja
};
