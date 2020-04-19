<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h2 align="center">
  :truck:&nbsp;FastFeet, desafio final GoStack 10 Rocketseat.&nbsp;:dash:
</h2>

<p align="center">
  <a href="#articulated_lorry-sobre-a-aplicação-fastfeet">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-ferramentas">Ferramentas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-back-end">Back-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-front-end">Front-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iphone-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :articulated_lorry: Sobre a aplicação FastFeet

O FastFeet é uma aplicação de entrega de encomendas. Utiliza Node.js e Express no Back-end, React JS no Front-end Web e React Native para o App Mobile.

Clone este repositório para uma pasta conforme exemplo abaixo:
```console
user@server:~/home$ git clone https://github.com/andersonvicente/bootcamp-gostack10-desafio-final.git fastfeet
```

## :wrench: Ferramentas

Instale o Docker :whale2: disponível em <a href="https://www.docker.com/">https://www.docker.com/</a> e inicie um container do Postgres :elephant:, outro do Mongodb :leaves: e outro para o redis (Alpine) :rotating_light:.

Acesse o container do Postgres e crie um novo banco de dados, por exemplo, fastfeetdb.

Instale o Reactotron :collision: disponível em <a href="https://infinite.red/reactotron">https://infinite.red/reactotron</a>. Inicie o Reactotron antes de iniciar o projeto Front-end ou Mobile. O Reactotron inicia através da porta 9090.

Você pode criar uma conta em <a href="https://mailtrap.io/">https://mailtrap.io/</a> para configurar as variáveis de envio de e-mail do projeto Back-end :email: (Mas também pode configurar os dados de e-mail do seu provedor de e-mail).

## :gear: Back-end

A partir do diretório root do projeto fastfeet entre na pasta pasta backend:
```console
user@server:~/fastfeet$ cd ./backend
```

Instale os pacotes do projeto com NPM ou Yarn:
```console
user@server:~/backend$ yarn install
```

Crie um novo arquivo .env baseado no .env.example existente na pasta e preencha as variáveis com as suas configurações dos containers do Docker, banco de dados e conta de e-mail:
```console
user@server:~/backend$ cp .env.example .env
```

O comando a seguir irá criar todas as tabelas no banco de dados Postgres que você criou:
```console
user@server:~/backend$ npx sequelize-cli db:migrate
```

Execute o seguinte comando para criar o primeiro usuário administrador do fastfeet (usuário é admin@fastfeet.com e a senha é 123456):
```console
user@server:~/backend$ npx sequelize-cli db:seed:all
```

Inicie a execução do projeto (por padrão iniciará utilizando a porta 4444):
```console
user@server:~/backend$ yarn dev
Listening on port 4444
```
OU
```console
user@server:~/backend$ yarn build
```
```console
user@server:~/backend$ yarn start
Listening on port 4444
```

Abra outro console e execute o seguinte comando para ativar a fila de envio de e-mail:
```console
user@server:~/backend$ yarn queue
```

## :computer: Front-end

A partir do diretório root do projeto fastfeet entre na pasta pasta frontend:
```console
user@server:~/fastfeet$ cd ./frontend
```

Instale os pacotes do projeto com NPM ou Yarn:
```console
user@server:~/frontend$ yarn install
```

Inicie a execução do projeto (por padrão iniciará utilizando a porta 3000):
```console
user@server:~/frontend$ yarn start
Listening on port 3000
```

## :iphone: Mobile

A partir do diretório root do projeto fastfeet entre na pasta pasta mobile:
```console
user@server:~/fastfeet$ cd ./mobile
```

Instale os pacotes do projeto com NPM ou Yarn:
```console
user@server:~/mobile$ yarn install
```

#### :warning: Leia isso antes de prosseguir! Todas as etapas a seguir foram realizadas no Android via emulação USB. Não consegui testar no IOS porém é muito provável que funcione já que não existe nenhuma funcionalidade diferenciada por plataforma dentro da aplicação. 
#### Recomendo que acessem a documentação da Rocketseat sobre configuração de ambientes para React Native <a href="https://react-native.rocketseat.dev/">Clicando Aqui</a>.

Atualize as bibliotecas no celular:
```console
user@server:~/mobile$ react-native run-android
```

Libere a proxy reverso no celular para as porta 8081 (Metro), 4444 (Back-end) e 9090 (Reactotron):
```console
user@server:~/mobile$ adb reverse tcp:8081 tcp:8081 && adb reverse tcp:4444 tcp:4444 && adb reverse tcp:9090 tcp:9090
```

Inicie a execução do projeto no celular:
```console
user@server:~/mobile$ react-native start
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
