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

7) Instalou o plugin ``` npm i prettier-plugin-tailwindcss -D``` que é responsavel por organizar as classes do tailwind de maneira semantica e configurou o arquivo prettier.config.js

Passo a passo da configuração do mobile:

1) Rodamos o comando ```npx create-expo-app mobile``` para criar o projeto

2) Trocamos o App.js para App.tsx e rodamos o comando ```npm run start``` e ele identificou que o projeto tem typescript e perguntou se gostariamos de configurar, só selecionar que sim.

3) Explicou sobre as tags para o ambiente mobile, sobre como estilizar e sobre a unidade de medida dp que é diferente do px para web.

4) Instalamos o nativewind com o comando: ```npm i nativewind``` e ```npm i tailwindcss -D```.

5) Rodamos o comando ```npx tailwindcss init``` para criar o arquivo taildwind.config.js e depois adicionamos no arquivo criado a seguinte linha:
```
content: ["./App.tsx", "./app/**/*.tsx"],
```

6) Editamos o arquivo babel.config.js e adicionamos a linha (abaixo de presets):
```
plugins: ["nativewind/babel"],
```

7) Editamos também o arquivo tsconfig.json dentro de compilerOptions ficou assim:
```
"compilerOptions": {
    "types": ["nativewind/types"]
},
```

8) Aprendemos a estilizar com tailwind no mobile

9) Instalamos o eslint com ```npm i eslint @rocketseat/eslint-config -D```

10)Instalou o plugin ``` npm i prettier-plugin-tailwindcss -D``` que é responsavel por organizar as classes do tailwind de maneira semantica e configurou o arquivo prettier.config.js

####Aula 2

Configurando o layout da parte web:

1) Configurando fontes com nextjs e tailwind: 
    a) ir no arquivo layout.tsx e importar as fontes conforme abaixo:
    ```
    import {
        Bai_Jamjuree as BaiJamjuree,
        Roboto_Flex as Roboto,
    } from 'next/font/google'
    ```

    b) atribuir elas as variaveis conforme abaixo: 
    ```
    const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
    const baiJamjuree = BaiJamjuree({
        subsets: ['latin'],
        weight: '700',
        variable: '--font-bai-jamjuree',
    })
    ```

    c) tailwind.config.js alterar no tema para ficar conforme abaixo:
    ```
    theme: {
        extend: {
            fontFamily: {
                sans: 'var(--font-roboto)',
                alt: 'var(--font-bai-jamjuree)',
            },
        },
    },
    ```

    d) O html do layout.tsx deve ficar assim: 
    ```
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
    ```

2) Importamos as cores do figma, copiei a paleta de cores do github da rocketseat e salvei no arquivo tailwind.config.js

3) Baixamos o favicon renomeando para icon.png e colocando na pasta app que automaticamente o next já reconhece como favicon

4) Para redefinir o title da pagina editar no layout.tsx conforme abaixo:
```
export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma capsula do tempo construída com React, Next.js, TailwindCSS e Typescript',
}
```

5) Começamos a criar o layout da home dividindo em coluna esquerda e direita e suas devidas estilizações.

6) Instalamos o pacote de icones ```npm i lucide-react```

Configurando o layout da parte mobile:

1) Copiamos as cores do tailwind.config.js do projeto web

2) Instalamos o Expo Google Fonts ```npx expo install @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font```
 
 a) Importamos as fontes no arquivo App.tsx:
  ```
  import {
    Roboto_400Regular,
    Roboto_700Bold,
    useFonts,
  } from '@expo-google-fonts/roboto'

  import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
  ```

  b) Garantimos que as fontes só serão carregadas no App.tsx com:
  ```
  const [hasLoadedFonts] = useFonts({
      Roboto_400Regular,
      Roboto_700Bold,
      BaiJamjuree_700Bold,
    })

    if (!hasLoadedFonts) {
      return null
    }
  ```

  c) Configuramos o fontFamily no tailwind.config.css:
  ```
  fontFamily: {
          title: 'Roboto_700Bold',
          body: 'Roboto_400Regular',
          alt: 'BaiJamjuree_700Bold',
        },
  ```
  obs: Pronto agora basta usar as fontes com font-title, font-body ou font-alt. Lembrando que tem que remover o font-bold que estava antes.

3) Criamos o blur e os stripes com imagem porque o css do react native é limitado e agora vamos instalar uma biblioteca para importar svgs
  a) Resolvemos o import da imagem do blur que tava dando erro com o arquivo assets.d.ts para reconhecer arquivos *.png
  ```declare module '*.png'```

  b) Instalamos o React Native SVG Transformer: ```npx expo install react-native-svg``` e ```npm i react-native-svg-transformer -D```

  c) Criamos um arquivo na raiz chamado metro.config.js com o seguite conteudo:
  ```
  const { getDefaultConfig } = require("expo/metro-config");

  module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    const { transformer, resolver } = config;

    config.transformer = {
      ...transformer,
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    };
    config.resolver = {
      ...resolver,
      assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...resolver.sourceExts, "svg"],
    };

    return config;
  })();
  ```

  d) Inserir mais um bloco de código no addets.d.ts:
  ```
  declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
  }
  ```

  e) Apresentou o comando de limpar o cashe do expo sendo: ```npx expo start --clear```

4) Habilitamos como usar o tailwind no svg dos stripes com:
```
import { styled } from 'nativewind'

const StyledStripes = styled(Stripes)
```
obs: Trocando o componente do svg Stripes por StyledStripes

5) Importamos o logo que é diferente do web e terminamos de estilizar o mobile com tailwindcss


Configurando melhor o backend:

1) Configuramos as tabelas e relacionamentos do banco de dados e depois disso rodamos o comando npx prisma migrate dev e ao encontrarmos um erro executamos o ```npx prisma migrate reset``` por conta do usuário que haviamos criado na aula passada que gerou conflito por não possuir todos os campos. Novamente depois isso executamos o ```npx prisma migrate dev``` e nomeamos a migration como: create memories table.

2) Separamos a estrutura do projeto em relação as rotas e o prisma em lib, routes e server

3) Criamos a rota de obter todas as memórias pegando só os 115 primeiros caracteres do conteudo

4) Instalamos o zod pra poder usar validação na rota de pegar uma memória por id com o comando ```npm i zod```

5) Explicou sobre como validar campos da requisição de obter uma memória pelo id conforme abaixo:
```
const paramsSchema = z.object({
      id: z.string().uuid(),
    })

const { id } = paramsSchema.parse(request.params)
```

6) Começamos a rota do post e explicou as validações para o post: 
```
const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      isPublic: z.coerce.boolean().default(false)
    })
    
const { content, coverUrl, isPublic } = bodySchema.parse(request.body)
```
obs: O coerce serve para converter o valor boolean que viria do formulario como (0, undefined...) em true e false

7) Criando o metodo para delete copiando praticamente tudo do getById.

8) Criando o metodo de put que foi uma mistura do post com o getById.

9) Diferentemente do diego validei tudo pelo meu insomnia.

10) Instalando o plugin de CORS ```npm i @fastify/cors``` e adicionamos as seguintes linhas no server.ts:
```
import cors from '@fastify/cors'

app.register(cors, {
  origin: true, // todas URLs de front-end poderão acessar nosso back-end
})
```

####Aula 3

1) Criamos a aplicação OAuth no github

2) Configuramos as variaveis de ambiente para autenticar via github nos .env.local (web) e .env (server)

3) Configuramos para obter o github code, fomos no page.tsx e configuramos o href do sign in para a seguinte rota:
```href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}```
obs: Ali obtemos de volta no nosso callback o seguinte endereço:
```http://localhost:3000/api/auth/callback?code=bb36402d85cd68ab0a55```
sendo depois do ? o codigo que precisamos

4) Componentizamos a parte web da aplicação

5) Para o backend (server) reconehcer suas respectivas variáveis de ambiente, precisamos instalar o pacote ```npm i dotenv -D```
obs: Também adicionamos no arquivo server o seguinte import: ```import 'dotenv/config'```

6) Instalamos o axios com o comando ```npm i axios``` e configuramos a rota para obter o codigo de autenticação

7) Salvamos o usuario no banco de dados caso ele ainda não seja registrado

8) Instalamos o ```npm i @fastify/jwt```
 a) Registramos o jwt no server.ts conforme abaixo:
 ```
  import jwt from '@fastify/jwt'

  app.register(jwt, {
    secret: 'spacetime',
  })
 
 ```

 b) Agora retornaremos o token ao em vez do usuario na rota de autenticação:
 ```
  const token = app.jwt.sign({
      name: user.name,
      avatar: user.avatar
  }, {
      sub: user.id,
      expiresIn: '30 days',
  })
 ```

 9) Agora todas as rotas são autenticadas no backend.

 10) Instalamos o axios no frontend com ```npm i axios``` para podermos obter o codigo da página de callback do sign in.

 11) Tive que corrigir o retorno do register para um objeto com token, pois estava retornando undefined quando tentava obter o token no frontend.

 12) Terminamos de configurar o arquivo route.ts para que ele redirecione o usuario para uma rota e salve nos cookies o token, liberando o acesso dele em todas as rotas com uma validade de 30 dias

 13) Permitir que todas as páginas acessem os cookies e verificar se existe um cookie com o token informando assim que o usuario estaria logado
 ```
 import { cookies } from 'next/headers'

 const isAuthenticated = cookies().has('token')
 ```

 14) Para decodificar o token jwt presente nos cookies instalamos a biblioteca ```npm i jwt-decode```

 15) Criando o componente de profile para aparecer apenas quando o usuario estiver logado

 16) Precisamos permitir no next.config.js quais dominios podem carregar imagens externas com:
 ```
  const nextConfig = {
    images: {
      domains: ['avatars.githubusercontent.com'],
    },
  }
```
17) Configuramos demais elementos do profile como nome e link para quero sair que ainda não possui rota.

18) Agora indo pro projeto mobile instalamos o pacote ```npx expo install expo-auth-session expo-crypto``` 
e adicionar no app.json a linha ```"scheme": "nlwspacetime",```

19) Para poder pegar nossa redirect url de desenvolvimento usamos o seguinte console.log:
  ```
  console.log(
    makeRedirectUri({
    scheme: 'nlwspacetime',
    }),
  )
  ```

20) Instalamos o axios com ```npm i axios``` e colocando o base url com o ip da minha máquina no momento.

21) Obtemos o token no mobile e depois instalamos o ```npx expo install expo-secure-store``` porque no ambiente mobile não temos cookies

22) Salvamos o token o secure store

23) Instalamos o expo router ```npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler```

24) Criamos o arquivo index.js na raiz do projeto contendo apenas: ```import 'expo-router/entry'```

25) Fizemos algumas alterações no package.json do projeto como por exemplo:
  a) Trocamos o main:
  ```
  "main": "index.js",
  ```

  b) Inserimos no final:
  ```
  "overrides": {
    "metro": "0.76.0",
    "metro-resolver": "0.76.0"
  },
  ```

26) Configuramos o plugin do babel.config.js:
  ```
  plugins: ['nativewind/babel', require.resolve('expo-router/babel')],
  ```
  obs: Adicionando o segundo plugin

27) Configurando a rota de redirect após login do usuário para ser a tela de memories e ajustando o App.tsx dentro da pasta app como index.tsx e criando o memories.tsx também.


####Aula 4

1) Aqui separamos o que é fixo de toda pagina(layout) e o que muda de acordo com a rota.

2) Criamos a função de deslogar

3) Estilizamos a tela de nova memória e precisamos instalar um pacote para editar o css do checkbox com o comando: ```npm i @tailwindcss/forms -D``` e adicionando esse require no fim do arquivo tailwind.config.js ```plugins: [require('@tailwindcss/forms')],```

4) Criamos o restante do layout da página de nova memória

5) Criamos uma proteção de rotas para as rotas que não podem ser acessadas sem estar logado com o middleware.ts

6) Ajustamos os redirects para que o usuario consiga ir para onde estava indo caso queira acessar a tela de criação de nova memória não esteja logado, ele é redirecionado para login e depois novamente para nova memória.

7) Adicionamos a funcionalidade do cadastrar lembrança.

8) Trocamos pro projeto mobile e agora vamos configurar o layout por lá também.

9) Definimos as rotas iniciais e testamos se o usuario está logado ou não para sofrer um redirect

10) Criamos a tela de nova memória do mobile

11) Partimos para o back para trabalhar com upload de arquivos e pra isso instalamos um plugin com o comando ```npm i @fastify/multipart```

12) É possivel visualizar toda a lógica no arquivo upload.ts e acredito ser necessário revisar mais pra frente

13) Instalamos um pacote com o seguinte comando ```npm i @fastify/static``` para que seja possivel acessar as imagens pela rota delas

####Aula 5

1) Vamos criar o preview da imagem anexada na aplicação web



