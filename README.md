# Play Vídeos Local

Este projeto Node.js permite que você crie um servidor local para hospedar seus animes, filmes e vídeos favoritos. Com ele, você pode assistir a tudo isso sem precisar armazená-los no Google Drive ou em outros serviços de streaming.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Dependências](#dependências)
- [Scripts](#scripts)
- [Autor](#autor)
- [Licença](#licença)
- [Estrutura do Projeto](#estrutura)

## Instalação

Para instalar e configurar o projeto, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/play-anime-local-backend.git
   cd play-anime-local-backend

2. Instale as dependências:

    ```bash
   npm install
   ```

3. Crie um arquivo .env baseado no .env.example (caso exista) para configurar variáveis de ambiente.

   | Variável | Descricão                                                              |
   |--------|------------------------------------------------------------------------|
   | `SERVERPORT` | Define a porta do servidor HTTP.                                       |
   | `SERVERDOMINIO` | Domínios que serão usados no CORS origin (separe por vírgula).         |
   | `MODE` | 'development' ou 'production' para o servidor saber que ambiente está. |
   | `DIRETORIO_VIDEOS` | Nome da pasta em que os vídeos serão salvados.                         |

## Uso

Para iniciar o servidor local, execute o comando:

   ```bash
   npm start
   ```

O servidor será iniciado e estará disponível em http://localhost:3000 (ou outra porta configurada).

* Obs: ao abrir o arquivo `Start.bat`, você não precisará navegar pelo CMD para chegar na pasta do projeto.

## Dependências

Este projeto utiliza as seguintes dependências:

* [body-parser](https://www.npmjs.com/package/body-parser): ^1.20.2
* [cors](https://www.npmjs.com/package/cors): ^2.8.5
* [dotenv-safe](https://www.npmjs.com/package/dotenv-safe): ^8.2.0
* [express](https://www.npmjs.com/package/express): ^4.18.2
* [express-async-errors](https://www.npmjs.com/package/express-async-errors): ^3.1.1
* [express-validator](https://www.npmjs.com/package/express-validator): ^7.0.1
* [mime](https://www.npmjs.com/package/mime): ^2.4.4
* [multer](https://www.npmjs.com/package/multer): ^1.4.5-lts.1
* [node-dev](https://www.npmjs.com/package/node-dev): ^8.0.0
* [sharp](https://www.npmjs.com/package/sharp): ^0.33.2

## Scripts

Os seguintes scripts estão disponíveis no arquivo `package.json`:

* `test`: Exibe uma mensagem de erro (sem testes especificados).
* `start`: Inicia o servidor usando `node-dev`.

## Autor

* **[Karlos Warney](https://www.github.com/its.war)**

## Licença

Este projeto está licenciado sob a licença ISC.

Você pode ajustar o conteúdo conforme necessário, especialmente a seção de variáveis de ambiente, se você tiver um arquivo `.env.example` ou outras configurações específicas que precisem ser descritas.

## Estrutura

A estrutura básica do projeto é a seguinte:

    play-videos-local-backend/
    ├── node_modules/
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── server.js
    ├── public/
    |   ├── videos/
    |   ├── assets/
    |   ├── img/
    |   └── index.html
    └── src/
        ├── controllers/
        ├── model/
        ├── plugins/
        └── router/

* `node_modules/`: Diretório onde as dependências são instaladas.
* `.env`: Arquivo para variáveis de ambiente.
* `.gitignore`: Arquivo para ignorar arquivos/diretórios no Git.
* `package.json`: Arquivo de configuração do npm com dependências e scripts.
* `package-lock.json`: Arquivo de bloqueio de versão de dependências.
* `README.md`: Documentação do projeto.
* `server.js`: Arquivo principal do servidor.
* `public/`: Diretório público do servidor.
* `public/videos/`: Diretório onde será salvo todos os vídeos (nome pode ser diferente dependendo da variável de ambiente `DIRETORIO_VIDEOS`)
* `src/`: Diretório do código-fonte.
