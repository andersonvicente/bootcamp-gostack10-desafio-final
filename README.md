<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
  FastFeet, desafio final GoStack 10 Rocketseat.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/andersonvicente/bootcamp-gostack10-desafio-final?color=%2304D361">

  <a href="https://github.com/andersonvicente">
    <img alt="Made by Anderson Vicente" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://img.shields.io/github/languages/count/andersonvicente/bootcamp-gostack10-desafio-final/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/languages/count/andersonvicente/bootcamp-gostack10-desafio-final?style=social">
  </a>
</p>

<p align="center">
  <a href="#sobre-a-aplicacao">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#back-end">Back-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#front-end">Front-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :checkered_flag: Sobre o aplicação FastFeet

O FastFeet é uma aplicação de entrega de encomendas. Utiliza Node.js e Express no Back-end, React JS no Front-end Web e React Native para o App Mobile.

### :arrows_counterclockwise **Back-end**

a partir do diretório root do fastfeet

cd ./backend

yarn install

cp .env.example .env

Preencha as configurações do .env

yarn build

yarn start

Em outro console, executar o seguinte comando para ativar a fila de envio de e-mail:
yarn queue

### :computer **Front-end**

a partir do diretório root do fastfeet

cd ./frontend

yarn install

yarn start

### :iphone **Mobile**

a partir do diretório root do fastfeet

cd ./mobile

yarn install

react-native run-android

adb reverse tcp:8081 tcp:8081 && adb reverse tcp:4444 tcp:4444 && adb reverse tcp:9090 tcp:9090

react-native start

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
