# Desafio `Linker`

Eles querem descobrir como podem ajudar as empresas para a prevenção de crises financeiros. Indagações:

- `Como uma conta PJ pode ajudar o empreendedor a preparar o seu negócio para um momento de crise?`
- `Como um empreendedor pode saber de antemão se o seu negócio está em risco?`

## Falar com a Linker

- Me fala quantas contas tem e o segmento;
- Fazendo isso poderemos nichar qual segmentos iremos implementar a primeira etapa;
- Isso irá servir para saber se isso realmente irá ajudar ele;

---

- Temos que pegar os clientes que possuem integração com softwares de contabilidade (ContaAzul);
- Temos que verificar quais clientes usam e se querem compartilhar seus dados com a linker;

## Linker

- Foco na pequena e médias empresa/empreendedor;
- Visando resolver a dor e problemas da pequena empresa;
- Nova forma de relação com os clientes de forma bem automatizada e mais integrada com os parceiros da empresa;
- Eles estão fazendo uma parceria com o SEBRAE, **mas qual?Para abrir conta**
- Eles tem a política de open bank, que é possível integrar as informações deles com outros softwares;
- Eles "estão" integrando a API deles com outros sistema de contabilidade para facilitar a trocar de informações do cliente sobre os movimentos;

### Maiores desafios para levar às empresas

- Dificuldade para abrir uma conta no banco tradicional. Resolveram então criar maneiras novas da criação de contas;
<!-- - Como essa empresa consegue contratar serviços no mundo digital através de cartão de crédito. Resolveram criar uma conta com cartão de crédito sem análise de credito; -->
- Créditos para as empresas com base dos seguintes dados:
  - Balancete;
  - Score;
  - Dados do cliente já compartilhados para a linker; **Focar nisso em nossa solução**
  - Comportamento no mercado; **Focar nisso em nossa solução**
- A forma de dar crédito é baseado no histórico da empresa, porém se conseguir linkar com o empreendedor, seria uma solução inteligente;

# Nossa solução

## Etapa 1

Pegar os **dados da empresa** com a Linker e os **movimentos financeiros** (entrada e saida). Feito isso, identificar qual é o **segmento de mercado** dessa empresa, focando o que pode gerar impactos positivos e negativos ao seu redor.

- Gráficos:
  - Fluxo de caixa;
  - Capital de giro necessário;
- Após a analise falando o que está bom ou ruim:
  - Essa analise terá categórias:
    - Fluxo de caixa;
    - **Quais outras o InovAtiva/SEBRAE podem oferecem?**
  - Ruim:
    - Podemos indicar cursos e conteúdos de forma direcionada com base no problema detectado;

## Etapa 2

Dessa forma, será possível "cruzar" o contexto atual dessa empresa em relação ao cenário do mercado ao qual ela pertence. As informações do cenário atual do mercado, será capturadas através de um crawler em sites (G1) de notícias nas regiões em que a empresa está atuando.

## Etapa 3

Após ter todas as informações necessárias, iremos gerar um "modelo/relatório" da situação atual da empresa e uma previsibilidade de riscos(talvez). Dessa forma, ajudará a Linker e o empreendedor a ter uma visão de risco da empresa, sendo possível também a liberação de crédito.

## Inf

- O que é necessário para a solução?
  - Crawler no site da G1 nas regiões de atuações da empresa;
  - Integrar com as informações da API da linker;
  - Dados de contabilidade da empresa, sendo obtidos através de arquivos ou integrações via API;
  - **Como iremos "cruzar" as informações do contexto atual da empresa e dos dados obtidos das notícias?**
  - **Como será feito e quais informações terá esse modelo/relatório?**
- Quanto custa?
  - **As integrações?**
  - **Os crawlers? Já existe algo pronto?**
  - **Qual seria o custo de tempo/barreiras do empreendedor para pegar os dados de contabilidade?**
- Somos um serviço ou uma solução para eles?
  - **Estamos prestando um serviço ou uma solução para Linker?**
- Como iremos monetizar?
  - **Caso sejamos um serviço, qual será o modelo de negócio?**
- Onde está a ponte para unir a `Linker` e a `InovAtiva`?
  - **Ainda é necessário pesquisar mais, porem vejo na parte em da InovAtiva encontrar os empreendedores através dos clientes da Linker**
- Como construir essa ponte?

## Precisamos definir o esquema de trabalho

- Qual será o papel de cada um;
- Iremos se reunir em quais horários;
- Definir o fluxo de desenvolvimento;

# Qual é o critério de avaliação dos projetos?

a) Criatividade e originalidade: O quão o projeto apresentado demonstra originalidade e criatividade não apresentando apenas uma cópia de outras soluções já existentes em diferentes segmentos;

- Preciso pesquisar ainda se há algo parecido

b) Aplicabilidade: O quão o projeto apresentado demonstra potencial para para solucionar os problemas atinentes ao desafio proposto;

- Desde que seja possível obter as informações de movimento da empresa e definir o método de "cruzamento" das informações obtidas através do crawlers, poderemos responder isso...

c) Qualidade do protótipo: O quão o protótipo exibido no vídeo de demonstração apresenta aparente qualidade em suas funcionalidades;

d) Tecnologia: O quão a solução faz uso de tecnologias consideradas disruptivas e que te fato pode oferecer escala ao projeto; e

e) Elemento Futuro: O quão a solução apresentada demonstra elementos ligados a tendências futuristas;

# Mercado

- Qual será o custo para manter cada modalidade?
- Qual será os planos?

## B2B (Pago - recorrência)

- Alguma empresa já implementa isso?
- Quais empresas precisam disso?
- Pq elas precisam disso?
- Quem é nosso publico alvo?

## B2C (Freemium - MEI, pequenas empresas gratis?)

- Quem é nosso publico alvo?
- Já existe algo parecido para as pessoas físicas, pq as empresas não utilizariam essas soluções?
- Softwares de contabilidade já entregam isso?
  - https://visual.sci10.com.br/sistemas/dashboard-sci/
  - https://www.wolterskluwer.com.br/solucoes/
  - https://www.gestta.com.br/tudo-sobre-o-gestta/

### Minha visão

- Achei muita coisa voltada para a contabilidade, porem acredito que o cliente também tenha acesso a isso junto ao seu contador.
