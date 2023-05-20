####Aula 1

Comando para rodar o backend:

```npm run dev``` -> rodar o projeto

Passo a passo da configuração do backend:

```npm init -y``` -> criando o package.json

```npm i typescript -D``` -> instalando o typescript no projeto

```npm i @types/node -D``` -> permite que o typescript saiba que está dentro de um projeto node

```npx tsc -init``` -> configurando o typescript no projeto (tsconfig.json)
obs: Aqui trocamos o target para es2020 no arquivo tsconfig.json

1) Criamos a pasta source
2) Criamos um arquivo chamado server.ts dentro da pasta source

```npm i tsx -D``` -> O node não entende typescript por padrão e esse comando é uma biblioteca que automatiza o processo de conversão para javascript

3) Criamos o script no package.json para rodar o comando de execução do server.ts com ```npm run dev```
obs: Excutando com o watch fique executando e é atualizada caso o código altere (veja o script no package.json)

```npm i fastify``` -> instalando o fastify (interpretando requisições HTTP)

4) Criamos a configuração do arquivo server.ts para que possua as rotas da nossa APIRestful
obs: Diego recomendou o uso do httpie (uma espécie de postman/insomnia para o terminal)

```npm i eslint -D``` -> instalando o eslint para ajudar na padronização do código do projeto
obs: ```npx eslint --init``` -> para criar o proprio padrão
No projeto ele usou um próprio da rocketseat

```npm i @rocketseat/eslint-config -D``` -> instalando o eslint da rocketseat

5) Criamos o arquivo .eslintrc.json e apontamos para a configuração da rockeseat
obs: Importante ter configurado no settings.json a linha (quando salvar o arquivo ele corrige os erros de eslint):
```
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
},
```

6) Configuramos no package.json um script para corrigir todos os erros de eslint de uma vez com o comando ```npm run lint```

```npm i prisma -D``` -> instalando o prisma para poder acessar o banco
```npm prisma init --datasource-provider SQLite``` -> configurando o prisma para usar o SQLite
obs: Dentro da pasta prisma agora temos um arquivo de schema que é possivel criar as tabelas do nosso banco(models)

7) Indicou a configuração no settings.json para que ao salvar um arquivo do prisma ele formate corretamente conforme as convenções:
```
"[prisma]": {
        "editor.formatOnSave": true
    },
```

```npx prisma migrate dev``` -> criando a tabela no banco de dados (gerando uma migration de acordo com o arquivo schema)
obs: O nome da migration dado foi create users table

```npx prisma studio``` -> gerenciar tabelas do banco de dados por uma GUI, como por exemplo adicionamos um usuário

```npm i @prisma/client``` -> liberando o prisma para ser importado no nosso server.ts

8) Criamos a configuração para conseguir obter todos os usuários do nosso banco
