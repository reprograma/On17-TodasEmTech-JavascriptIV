# On17-TodasEmTech-JavaScriptIV

Esta é a 11ª semana da turma online: Todas em Tech on17 - Front-end, nesta aula do dia 05/06/2022 teremos os seguintes conteúdos:

- Promise
- async e await
- Requisição a APIs
    - Server/Client
    - URL, Domínio, IP e DNS
    - Protocolo HTTP
    - Request/Response
    - API
    - JSON
    - XMLHttpRequest()
    - fetch()

<br>

--- 

## Apresentação
<br>

### 1. Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=700 alt='selfie de Lilit com cabelos cacheados pretos com franja média divida ao meio, olhos fechados, baton rosa e brinco dourado, parte do rosto e cabelo de Gabriel está a sua frente no primeiro plano da foto, o fundo é chapado de um tom de verde petróleo'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), sou uma travesti paraibana residente em São Paulo, trabalho como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam;

#### Contatos

- E-mail: devlilitbandeira@gmail.com
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

<br>

### 2. Quem são as monitoras?

<img src='./assets/nezuko.avif' width=700 alt='personagem nezuko do anime kimetsu no yaiba na sua forma oni, possui veias altas na testa, tem olhos cor de rosa, cabelos pretos lisos e longos e um pedaço de bambu na boca, veste um kimono rosa sobreposto com um cardigan pretol,tem unhas pontudas e possui chamas vermelhas carmesin nas mãos'>

<br>

### 3. Quem são as alunas?

<img src='./assets/jujutsu.jpg' width=700 alt='3 personagens do anime Jujutsu Kaisen, todas vestem terno colegial preto, cada uma está deferindo seu golpe, da esquerda para direita temos a primeira com cabelos longos verdes amarrados e olhos amarelos, segunda com cabelos castanhos claros chanel  e olhos da mesma cor e a terceira tem cabelos azuis clarinhos longos e soltos e olhos da mesma cor, a imagem é dividida em três partes por linhas pretas e o fundo tem fagulhas de poder do golpe de cada uma'>

---
## Acordos

- Manter atenção nas explicações e codar nos momentos definidos;
- Enviar dúvidas no chat para as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;
---
<br>

# Plano de aula

## 0. Instruções iniciais 

- Instalar [node.js](https://nodejs.org/en/download/)
- Instalar [Postman](https://www.postman.com/downloads/)

---
## 1. Promises

- Promise é um objeto do JavaScript que tem a função de lidar com assincronicidade através de estados;
- Funções assíncronas modernas retornam uma promise que representa a eventual falha ou conclusão de uma operação assíncrona, assim uma função assíncrona retorna um valor como uma função síncrona, porém no lugar do valor final, retorna uma promessa ao valor em algum momento no futuro;
- Ciclo de vida da Promisse (estados):

  | Estado     | Significado                                                                                  |
  | ---------- | -------------------------------------------------------------------------------------------- |
  | Pending    | Estado inicial, quando a promise ainda está em execução (não resolveu ou rejeitou)           |
  | Fulfilled  | Quando executou todas as operações com sucesso                                               |
  | Rejected   | Quando a execução finalizou com erro, falhou                                                 |

<br>
<img src='./assets/promise.png' width=700 alt='bloco de texto com código javascript'>
<br><br>

- Cria-se uma promise a partir da função construtora Promise passando como argumento uma callback que por sua vez recebe como argumentos os dois resultados possíveis para a promise: resolve ou reject, duas outras funções que executam o possível sucesso ou erro da promessa, respectivamente;
- `resolve()`: Função que executa caso a promise seja resolvida com sucesso;
- `reject()`: Função que executa caso a promise seja resolvida com erro;
- Tratamos o retorno das promises através de métodos próprios, que chamam as callbacks depois da conclusão da promise;
- `then()`: Método que ativa uma callback quando a promise for resolvida, o argumento desta callback é sempre o valor retornado na função resolve();

<img src='./assets/then().gif' width=700 alt='bloco de texto com código javascript'>
  
> O then() retorna uma nova promise e por isso vários thens podem ser encadeados para casos onde existam duas ou mais operações assíncronas consecutivas, neste caso o valor do primeiro argumento de cada then encadeado será o valor do retorno do anterior; 

- `catch()`: Método que ativa uma callback quando a promise for rejeitada, o argumento desta callback é sempre o valor retornado na reject();

<img src='./assets/catch().gif' width=700 alt='bloco de texto com código javascript'>

- `finally()` -  Método que ativa uma callback quando a promisse acabar, independente de ter sido resolvida ou rejeitada, não recebe como argumento o retorno de resolve() ou reject();

---
## 2. async/await

- As palavra-chaves async e await atuam como um 'açúcar sintático' em cima de promises, faciltando a visualização e tornando a leitura do código assíncrono mais próxima do código síncrono;
- Toda função que recebe o `async` se torna uma função assíncrona, que passa a retornar uma promise ao invés de retornar um valor diretamente, como uma promise o retorno desta função pode ser tratado com um then() normalmente;
- Uma função `async` permite que a palavra-chave `await` seja usada dentro dela para invocar código assíncrono;
-  o `await` só funciona dentro de funções `async` e é colocado na frente de qualquer função que retorne promise para pausar o código até que a promise seja resolvida, retornando o valor resultante, importante usar apenas quando necessário tratar respostas de uma promise para não paralizar o fluxo, quando usado da maneira correta não altera a performance da aplicação;
- Não precisa de funções para sincronizar os resultados;
- Outro método importante da promise é o `Promisse.all()` que recebe uma array de funções assincronas independentes entre si, evitando o uso de awaits que não sejam necessários;
- Facilita o tratamento de erros seja com menor encadeamento do .then() ou ainda com o uso de `try/catch`;

<img src='./assets/asyncawait.png' width=700 alt='bloco de texto com código javascript'>
<br>

---
### 2.1. try/catch

- É usado para marcar um bloco que será testado (`try`) e especifica uma ação para que uma possível exceção(erro) seja capturada pelo `catch()`;
- Ao usar o `try` é criado um bloco de código protegido, que caso ocorra algum erro neste bloco, a execução é desviada para o `catch()`, desta forma a aplicação não será quebrada e o erro poderá ser tratado, permitindo que o código siga sua execução;
- O `catch()` é executado somente quando há alguma exceção no bloco `try`, caso contrário ele será ignorado, o argumento recebido pelo catch é a exceção ocorrida no bloco `try` e costuma ser chamada de `err`/`error`;

---
## 3. Requisição a APIs

### 3.1. Server/Client

<img src="./assets/server-client.png" width=700>

- <b style="color: greenyellow;">Client</b> é a interface que as usuárias interagem, isso inclui os navegadores e os apps e demais interfaces utilizadas pela usuária e que acessa a internet em diversas plataformas. O Client é responsável por solicitar serviços e dados que estão nos Servers;

- É no Client que podemos:
  1. Capturar e Validar dados inseridos pelas usuárias;
  2. Manipular a tela de acordo com as informações vindas do servidor;
  3. Gerenciar os eventos disparados pelas usuárias;
  4. Gerenciar as mídias dos dispositivos das usuárias (som e vídeo);

<br>

- <b style="color: greenyellow;">Server</b> é o responsável pelo processamento, a organização e o gerenciamento dos dados. Um Server responde às solicitações de serviços e dados realizadas pelos Clients;

- É no Server que podemos:
  1. Autenticar usuárias nas aplicações;
  2. Organizar e atualizar os dados compartilhados;
  3. Gerenciar recursos compartilhados;
  4. Fazer a comunicação com os bancos de dados;

---
### 3.2. URL, Domínio, IP e DNS

- A <b style="color: greenyellow;">URL</b> - Uniforme Recourse Locator (Localizdor de recurso uniforme), representa um recurso específico na web, cada página, imagem ou qualquer arquivo na internet possui um endereço, a URL.

<img src="./assets/url-dominio-ip-dns.png" width=700>

- Todo site possui um <b style="color: greenyellow;">domínio</b>, que é como o conhecemos e acessamos normalmente;
- Para o servidor este mesmo site é registrado, identificado e localizado pelo seu <b style="color: greenyellow;">IP</b> - Internet Protocol Address (Endereço de protocolo da Internet); 
- É por isso que existe o <b style="color: greenyellow;">DNS</b> - Domain Name System (Sistema de Nome de Domínio), que é como um grande dicionário de `domínios <-> IPs` nativo nos browsers e demais Clients;

---
### 3.3. Protocolo HTTP

- O <b style="color: greenyellow;">HTTP</b> - Hypertext Transfer Protocol (Protocolo de transferência de Hipertexto) é um protocolo de comunicação. Através dele o cliente e o servidor conseguem se comunicar, seguindo um conjunto de regras bem definidas. Esse protocolo determina como devem ser solicitadas informações e como elas devem ser entregues.

- Quando acessamos uma <b style="color: greenyellow;">URL</b>, o <b style="color: greenyellow;">Client</b> envia uma solicitação passando todas as informações que precisamos para o <b style="color: greenyellow;">Server</b>, esta comunicação é feita na grande maioria dos casos de aplicações modernas através do <b style="color: greenyellow;">Protocolo HTTP</b>

---
### 3.4. Request/Response

<img src="./assets/http.png" width=700>

- O protocolo HTTP é um protocolo usado no modelo Client/Server e é baseado em <b style="color: greenyellow;">requests</b>(requisições) e 
<b style="color: greenyellow;">responses</b>(respostas);

- Uma <b style="color: greenyellow;">Request</b> deve indicar a ação a ser executada de acordo com as definições do protocolo HTTP, estes são os <b style="color: greenyellow;">Métodos HTTP</b>

- Principais métodos HTTP:

| Estado   | Ação realizada                                                                                             |
| -------- | -------------------------------------------------------------------------------------------------------    |
| POST     | <b style="color: greenyellow;">C</b>reate (Criar) - Armazena dados no banco                                |
| GET      | <b style="color: greenyellow;">R</b>ead (Ler) - Realiza apenas leitura de dados no banco                   |
| PUT      | <b style="color: greenyellow;">U</b>pdate (Substituir) - Atualiza dados substituindo o conjunto de dados   |
| PATCH    | <b style="color: greenyellow;">U</b>pdate (Modificar) - Atualiza dados modificando apenas o campo desejado |
| DELETE   | <b style="color: greenyellow;">D</b>elete (Excluir) - Exclui dados do banco                                |

- Uma <b style="color: greenyellow;">Response</b> é a <i style="color: pink;">reação</i> do <b style="color: greenyellow;">Server</b> enviada após receber uma requisição do <b style="color: greenyellow;">Client</b>, e seu conteúdo possui além do que foi solicitado, um <b style="color: greenyellow;">Status Code</b>.

| Código    | Tipo de Resposta       |
| --------- | ---------------------  |
| 100 - 199 | Apenas informações     |
| 200 - 299 | Sucesso                |
| 300 - 399 | Redirecionamento       |
| 400 - 499 | Erro do Client         |
| 500 - 599 | Erro do Server         |

---
### 3.5. APIs

- Uma <b style="color: greenyellow;">API</b> - Application Programming Interface (Interface de Programação de Aplicativos) é uma interface de comunicação e integração entre aplicações. As <b style="color: greenyellow;">APIs</b> criam formas e ferramentas para que utilizemos uma funcionalidade ou acessemos dados sem precisar recriar coisas que já existem.

- As <b style="color: greenyellow;">APIs</b> podem ser uma Web APIs, uma lib, um framework e todas as interfaces que forneçam funcionalidades em uma linguagem específica;

- As <b style="color: greenyellow;">Web APIs</b> são um conjunto de instruções e padrões de programação para acesso a um aplicativo de software fornecido por uma empresa de software para que outras desenvolvedoras possam utiliza-o em sua próprias aplicações, algumas destas são <b style="color: greenyellow;">APIs públicas</b> que podem ser acessadas por meio de cadastros gratuitos ou até completamente aberta, outras são <b style="color: greenyellow;">APIs privadas</b> que são de uso restrito/interno da empresa criadora.

- Dentre as arquiteturas das APIs, temos as <b style="color: greenyellow;">APIs REST</b>: A arquitetura REST - ou Representational State Transfer (Transferência de Estado Representacional), que é amplamente utilizada dentro do desenvolvimento de APIs pois possui um modelo mais simples de requisição que segue determinadas práticas e diretrizes na sua criação, neste curso iremos estudar as <b style="color: greenyellow;">APIs REST</b>.

- Exemplos de APIs públicas:
  1. [Dog API](https://dog.ceo/dog-api/)
  2. [ViaCEP API](https://viacep.com.br/)
  3. [ReqRes API](https://reqres.in/)
  4. [Studios Ghibli API](https://ghibliapi.herokuapp.com/)
  5. [Poke API](https://pokeapi.co/)
 
 <br>

- Toda API possui uma documentação que nos fornecem tudo que precisamos saber para utilizá-la;

---
### 3.6. JSON

- <b style="color: greenyellow;">JSON</b> - JavaScript Object Notation (Notação de Objeto JavaScript) é um formato baseado em texto padrão para representar dados estruturados com base na sintaxe do objeto JavaScript; _(MDN)_

- Mesmo que se assemelhe à sintaxe literal do objeto JavaScript, ele pode ser usado independentemente do JavaScript, e muitos ambientes de programação possuem a capacidade de ler (analisar) e gerar JSON; _(MDN)_

- O <b style="color: greenyellow;">JSON</b> é transmitido por uma rede como string e é uma formatação muito leve, o que permite ser utilizado em uma variedade enorme de aplicações. 

- O JavaScript possui o Objeto global `JSON` que possui métodos para converter para objeto quando queremos acessar os dados e para string quando queremos enviá-lo por rede;

- Um objeto JSON pode ser armazenado em seu próprio arquivo. _(MDN)_ (**ex.: arquivo.json**)

#### 3.6.1. Estrutura JSON

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

_(fonte: MDN)_

#### 3.6.2. Acessando JSON

```js
console.log(superHeroes.homeTown);
console.log(superHeroes["active"]);
console.log(superHeroes["members"][1]["powers"][2]);
```

#### 3.6.3. Matrizes como JSON

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

#### 3.6.4. Acessando JSON (matrizes)

```js
console.log(heroes[0]["powers"][0]);
```

#### 3.6.5. Importante:

> JSON contém apenas propriedades, sem métodos; <br> JSON só aceita aspas duplas; <br> JSON não aceita chaves/propriedades sem aspas como objetos JS, toda string precisa usar aspas;

---
### 3.7. XMLHttpRequest()

- `XMLHttpRequest` é um objeto que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor. Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira, com o `XHR` criamos uma requisição assíncrona;

- Apesar de `XML` em seu nome, a requisição realizada pelo XMLHttpRequest pode receber qualquer tipo de dado.

- É um modelo antigo de requisição que era usado principalmente na programação de `AJAX`;

- Estrutura de uma requisição `XMLHttpRequest`

```js
// cria um nova instancia do Objeto apartir do construtor XMLHttpRequest()
const request = new XMLHttpRequest();

// inicializa a requisição
request.open("GET", "https://api.exemplo.com", true);

// adiciona um evento para ser ativado quando o readyState mudar
request.onreadystatechange = () => {
  // verifica se a conexão foi bem sucedida:
  if (request.readyState == 4 && request.status == 200) {
    // atribui a uma nova variável o JSON já transformado em objeto Javascript (através do JSON.parse())
    const data = JSON.parse(request.response);
  }
})

// envia a requisição para o servidor
request.send();

```

---
### 3.8. fetch()

- `fetch()` é um método moderno e amplamente utilizado nas aplicações JavaScript atualmente que permite acesso e manipulação de requisições HTTP, este método é fornecido pela <b style="color: greenyellow;">API Fetch</b>. O `fetch()`retorna uma `Promise`.

- Estrutura do `fetch()`:

```js
  fetch(url, options)
```

- `url` é geralmente uma string que se refere ao recurso que desejamos buscar, no caso do método `GET` somente este argumento é necessário;
- `options` é um argumento opcional, um objeto que contém qualquer configurações customizadas que desejamos adicionar às requisições, sendo os principais: 
  1. `method` uma string que define o método da requisição;
  2. `headers` um objeto com informações de cabeçalho;
  3. `body` um objeto com informações do corpo da requisição;

<br>

- Uma requisição `GET` utilizando `fetch()`, sem informações adicionais:

```js
async function getData() {
  try {
    const response = await fetch("https://api.exemplo.com")
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("HTTP-Error: " + erro);
  }
}
getData()
```

- Uma requisição `GET` utilizando `fetch()`, adicionando um objeto de configurações:

```js
async function getData() {
  try {
    const response = await fetch("https://api.exemplo.com", {
      method: 'GET',
      headers: {
      'Content-Type': 'image/jpeg'
      },
      cache: 'default'
    })
    const data = await response.json()
    console.log(data)
  }
  catch(erro) {
    console.log("HTTP-Error: " + erro);
  }
}
getData()
```

---
## 4. Exercícios de fixação

### 4.1. Exercitar Requisição `GET` 

- Vamos Realizar uma mesma requisição à [Dog API](https://dog.ceo/dog-api/) utilizando `XMLHttpRequest()` e `fetch()` para trazer imagens de doguinhos de acordo com suas raças através do <b style="color: greenyellow;">endpoint</b>: https://dog.ceo/api/breed/${dogName}/images/random e exibir a imagem na tela a cada atualização da página;

### 4.2. Exercitar Requisições `POST`, `PUT`, `PATCH` e `DELETE`

- Vamos Realizar com o método `fetch()` requisições com os demais métodos para a [ReqRes API](https://reqres.in/) utilizando seus endpoints específicos;

---
## 5. Desafios da Semana

### 5.1. Desafio Ghibli

- Utilize o `fetch()` para realizar uma requisição ao endpoint https://ghibliapi.herokuapp.com/films da [Studios Ghibli API](https://ghibliapi.herokuapp.com/) e popule a página que também será criados por vocês (HTML e CSS) com os dados do json que é a lista com todos os filmes da Ghibli (22);


### 5.2. Desafio ViaCEP

- Utilize o `fetch()` para realizar uma requisição ao endpoint https://viacep.com.br/ws/${cep}/json/ da [ViaCEP API](https://viacep.com.br/) permitindo que a usuária forneça um CEP e popule a página que também será criados por vocês (HTML e CSS) com os os dados (logradouro, bairro, localidade e uf) do json que é a objeto com todas as informações do CEP fornecido;

### 5.3. Extra

- Exercite criar requisições POST, PUT, PATCH e DELETE na [ReqRes API](https://reqres.in/)

### 5.4. Dica

- Utilize o Postman para testar os endpoints antes de construir o código

---
## 6. Referências

| Conteúdo          | Fonte    | Link                                                                                                     |
| ----------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| Promises          | MDN      | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise                 |
|                   | MDN      | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises                             |
|                   | Medium   | https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2                  |
| async/await       | MDN      | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function              |
|                   | MDN      | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Async_await                       |
| try/cacth         | MDN      | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch                 |
|                   | DevMedia | https://www.devmedia.com.br/javascript-try-catch/41019                                                   |     
| Requisição APIs   | MDN      | https://developer.mozilla.org/pt-BR/docs/Glossary/API                                                    |
|                   | MDN      | https://developer.mozilla.org/en-US/docs/Web/API                                                         |
| Status Code       | MDN      | https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status                                                 |
| JSON              | MDN      | https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON                                   |
| XMLHTTPRequest    | MDN      | https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest                                          |
| Fetch API         | MDN      | https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch                                   |
| fetch()           | MDN      | https://developer.mozilla.org/en-US/docs/Web/API/fetch                                                   |

### Extras

| Complementares  | Canal              | Link                                                 |
| --------------- | ------------------ | ---------------------------------------------------- |
| Promises        | Erick Wendel       | https://www.youtube.com/watch?v=_gmXKsVS40s          |                
| async/await     | DevPleno           | https://www.youtube.com/watch?v=D01xWkT2W7c          |
| fetch()         | DevPleno           | https://www.youtube.com/results?search_query=fetch() |

---
## 7. Agradecimentos

- [💜 analu](https://github.com/analuizasampaio) -> Pois utilizei como referência a aula que me deu na turma on11-backend nos conteúdos de 3.1 à 3.5 além de me inspirar nas imagens criadas para esta aula;
- [Vivian Caldas](https://www.linkedin.com/in/vivian-caldas/) -> Utilizei duas imagens do seu repositório da turma on13-frontend que ilustram de ótima excelente os métodos then() e cacth(), além de ter como referência seus conteúdos nos pontos 3.7 e 3.8;
