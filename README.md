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


Passo a passo da configuração do frontend:

```npx create-next-app@latest web --use-npm``` -> comando para criar o projeto com nextjs (selecionou sim para todas as opções)

```npm run dev``` -> comando para rodar o projeto

1) Deletou o README.md, os svgs na pasta public, o favicon da pasta app, editou o globals.css deixando só as 3 primeiras linhas e apagou no arquivo page.tsx todo o conteudo html no return e substituiu por Hello World

2) Criamos a pasta components e incluimos o componente Button la dentro

3) Repassou os conceitos importantes como o de componentes, propriedades, tipagem de propriedades.

4) Explicou sobre roteamento com Next.js (todo arquivo que for um page.tsx dentro de uma pasta automaticamente será uma rota "com o nome da pasta/componente" da nossa aplicação) -> Tudo isso deverá estar dentro da pasta app

5) Apresentou o tailwind e exemplificou como usar

6) Rodou o comando ```npm i @rocketseat/eslint-config -D``` para utilizarmos a configuração do eslint da rocketseat para react

7) Instalou o plugin ``` npm i prettier-plugin-tailwindcss -D``` que é responsavel por organizar as classes do tailwind de maneira semantica