# Como utilizar

Todos os passos abaixo serão executados dentro da pasta `server`

### Instalando as dependências

- Execute `yarn` ou `npm install`;

### Iniciando um banco de dados PostgreSQL

- Inicie um serviço do postgres utilizando docker ou o próprio PostgreSQL instalado na sua máquina;
- Crie uma Database com o nome `mega-hack`;

### Configurando variáveis ambientes

- Faça uma cópia do arquivo `.env.example` para `.env`;
- Insirá ou altere os os dados necessários;

### Iniciando servidor

- Execute `yarn dev` para iniciar a API;

### Utilizando API

- Nesta mesma pasta há um arquivo `api-template-insomnia.json`, no qual pode ser importado no `Insomnia` para utilizar a API;
