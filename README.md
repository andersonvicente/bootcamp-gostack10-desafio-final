<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h2 align="center">
  :truck:&nbsp;FastFeet, desafio final GoStack 10 Rocketseat.&nbsp;:truck:
</h2>

<p align="center">
  <a href="#articulated_lorry-sobre-a-aplicação-fastfeet">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrows_counterclockwise-back-end">Back-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-front-end">Front-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :articulated_lorry: Sobre a aplicação FastFeet

O FastFeet é uma aplicação de entrega de encomendas. Utiliza Node.js e Express no Back-end, React JS no Front-end Web e React Native para o App Mobile.

```console
user@server:~/home$ git clone https://github.com/andersonvicente/bootcamp-gostack10-desafio-final.git fastfeet
```

## :arrows_counterclockwise: Back-end

A partir do diretório root do projeto fastfeet entre na pasta pasta backend:
```console
user@server:~/fastfeet$ cd ./backend
```

Instale os pacotes do projeto com NPM ou Yarn (Exemplo abaixo):
```console
user@server:~/backend$ yarn install
```

Crie um novo arquivo .env baseado no env.example existente na pasta e preencha as variáveis com as suas configurações:
```console
user@server:~/backend$ cp .env.example .env
```

Compile o projeto:
```console
user@server:~/backend$ yarn build
```

Inicie a execução do projeto (por padrão iniciará utilizando a porta 4444):
```console
user@server:~/backend$ yarn start
Listening on port 4444
```

Em outro console, executar o seguinte comando para ativar a fila de envio de e-mail:
yarn queue

## :computer: Front-end

a partir do diretório root do fastfeet

cd ./frontend

yarn install

yarn start

## :iphone: Mobile

a partir do diretório root do fastfeet

cd ./mobile

yarn install

react-native run-android

adb reverse tcp:8081 tcp:8081 && adb reverse tcp:4444 tcp:4444 && adb reverse tcp:9090 tcp:9090

react-native start

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
