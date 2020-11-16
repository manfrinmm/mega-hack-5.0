# Aplicação

- Anexar nossa solução em outras aplicações;
- Criar documentação da integração:
  - API;
  - Integração do dashboard;

# Frontend

- Nossa landing page:
  - Quem nós somos;
  - Nosso público alvo;
  - Qual nosso objetivo;
  - O que queremos resolver;
  - Porque nos escolher;
  - Nossos clientes (Empresas)

## Páginas

- Home:
  - 4 seções:
    - Geral:
      - Gráfico base;
      - Valores de Entrada, Saídas e Gastos futuros;
      - Selecionar mês de referência;
    - Tabela do mês:
      - Receita bruta;
      - Impostos (%);
      - Gastos totais;
      - Resultado;
      - **Os valores dela será em referência ao mês selecionado**
    - Saúde financeiro:
      - Tempo de vida (informação principal)
      - Fluxo de resultados com média pondera com relação aos dias do mês;
    - Interesses (Em relação a média dos dois mêses anteriores)
      - Conteúdos relacionados;

# Backend

## Dados

- Usuário:
  - Nome;
  - Email;
  - Senha;
  - CNPJ;
  - CNAE;
- Empresas:
  - Possui quais usuários;
  - Nome;
  - Email;
  - CNPJ;
  - Senha;
- Balanço:
  - Usuário;
  - Mês de referência
  - Receita bruta;
  - Porcentagem de impostos;
  - Gastos totais;
- Transações (Gastos totais): (Terá apenas entrada e saída do mês de referência selecionado)
  - Balanço;
  - Tipo: "Futuro", para ter isso teria que ter os meses que essa transação vai ocorrer.
  - Descrição;
  - Valor;
  - Data de registro (Mês de referência); 01/11/20
- Indicadores:
  - Nome;
  - Slug;
  - Descrição;
- Conteúdos de interesse:
  - Nome;
  - Relacionar indicadores;
  - Cor;
  - Link;

## Recursos funcionais

- Criar usuários;
- Autenticação de usuários:
  - Empresas;
  - Usuário;
- Usuários podem fazer upload de arquivos no formato CSV com modelo de `Transações`;
- Usuários podem lançar/editar/apagar as `Transações`;
- Listar conteúdos interessantes para o usuário com base nos indicadores;
- Mostrar o balanço com base no mês de referência;
- Listrar as transações de um balanço;
- Gerar token de permissão para as empresas integrarem com a nossa plataforma;

## Regras de negócio

- Indicadores (Em relação a média dos dois mêses anteriores)
  - Capital de giro: (Esse indicador responde um pouco de como o empreendedor consegue superar momentos de crises)
    - Está vinculado a gestão do caixa, caso o capital fique menor ou igual a 6 x do gasto;
  - Receita e gastos:
    - Se a receita aumentar muito (20%), indicar conteúdos relacionados;
    - Se a variação de receita e gastos for menor ou igual a 10%, indicar conteúdos relacionados;
  - Caso não entrem em nenhum dos anteriores:
    - Indicar conteúdos para fazer crescer;
- Converter o nome do indicador para slug:
  ```js
  function slugify(string, separator = "-") {
    return string
      .toString()
      .normalize("NFD") // split an accented letter in the base letter and the accent
      .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
      .replace(/\s+/g, separator);
  }
  ```
- As empresas podem acessar somente as informações dos usuários delas;
- Usuários que estiverem acessando através de uma empresa, não precisam de senha para pegar o token de autenticação;
