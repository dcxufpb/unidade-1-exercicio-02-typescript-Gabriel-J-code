const cupom = require('./cupom');

test('Exercício 1', () => {
  expect(cupom.imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Exercício 2 - tudo vazio', () => {

  cupom.dados.nome_loja = "";
  cupom.dados.logradouro = "";
  cupom.dados.numero = 0;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "";
  cupom.dados.municipio = "";
  cupom.dados.estado = "";
  cupom.dados.cep = "";
  cupom.dados.telefone = "";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "";
  cupom.dados.inscricao_estadual = "";

  expect(cupom.imprime_dados_loja()).toBe(
		`
, 0 
 -  - 
CEP: Tel 

CNPJ: 
IE: 
`);
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "Tropical";
  cupom.dados.logradouro = "Rua siqueira Campos";
  cupom.dados.numero = 580;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "Centro";
  cupom.dados.municipio = "Paulista";
  cupom.dados.estado = "Pernambuco";
  cupom.dados.cep = "53401-320";
  cupom.dados.telefone = "(81) 3438-5714";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "37.886.772/0001-82";
  cupom.dados.inscricao_estadual = "4232303-79";

  //E atualize o texto esperado abaixo
  expect(cupom.imprime_dados_loja()).toBe(
    `Tropical
Rua siqueira Campos, 580 
Centro - Paulista - Pernambuco
CEP:53401-320 Tel (81) 3438-5714

CNPJ: 37.886.772/0001-82
IE: 4232303-79
`);
});
