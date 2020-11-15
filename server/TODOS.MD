- Remover o password do usuário a onde ocorrer o retorno de dados que estiver exibindo o usuário
- Fazer o restante das rotas

## Funcionalidades

### Home

- Trazer somente o balancete do mes atual e as ultimas 5 transações; - OK
- Trazer as recomendações dos indicadores;

### Gerenciar lances

- Trazer todas transações do mês selecionado: - OK
  - As transações; - OK
  - Somatória de Saída e Entrada; - OK
- Apagar transação; - OK
- Ordenar por dia;

### Gestão de caixa

- Trazer todas transações do mês selecionado: - OK
  - As transações; - OK
  - Somatória de Saída e Entrada; - OK
- Ordenar por dia;

### Tempo de vida (Ainda estamos resolvendo)

- Pegar todos balancetes;
- Order eles por ordem cronológica;
- Saldo em caixa (?)

## Regras de negócio

- Visualizar o balancete:
  - `gross_revenue`:
    - Diferença = `gross_revenue` cadastrado e o somatório de transações do tipo ENTRADA;
    - Somatório de transações do tipo ENTRADA + `Diferença`;
- Alterar o balancete:
  - `total_spend` não pode ser menor que a soma da quantidade total dos valores das transações do tipo SAÍDA;
  - `gross_revenue` não pode ser menor que a soma da quantidade total dos valores das transações do tipo ENTRADA;
- Lançamento

- Transação:
  - Chave para diferênciar:
    - name;
    - value;
    - day_register_at;
- Usuário só poderá pagar somente as transações dele
