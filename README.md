<h1> <a href="https://jornada-fullstack-spotify-vqeu.onrender.com">Spotify 2 </a><img width=30px src=".\front-end\src\assets\logo\spotify-logo.png"></h1>
<h3>Projeto final da Jornada Fullstack da <a href="https://www.hashtagtreinamentos.com">Hashtag Treinamentos</a>, lecionadas pelo professor Diego 👨‍🦲</h3>

O projeto consiste em uma cópia da interface e funcionalidades do <a href="https://open.spotify.com">Spotify</a>.
<br>

<h2>👨‍💻 Tecnologias usadas:</h2>
<h3>Frontend</h3>
<ul>
  <li><a href="https://react.dev">React</a></li>
  <li><a href="https://vite.dev">Vite</a></li>
  <li><a href="https://www.npmjs.com/package/axios">Axios</a>
  <li>Javascript</li>
  <li>CSS</li>
</ul>

<h3>Backend</h3>
<ul>
  <li><a href="https://nodejs.org">Node.js</a></li>
  <li><a href="https://expressjs.com">Express.js</a></li>
  <li><a href="https://cloud.mongodb.com">MongoDB</a></li>
  <li>CORS</li>
  <li>Path</li>
</ul>

<h2>🛠️ Instalação e Execução</h2>
<ol>
<li>Primeiro, é necessário o Node.js para a instalação dos pacotes usados no projeto. Você pode acessar o link para o download aqui (>=22): https://nodejs.org </li>
<br>
<li>Após a instalação do node, faça um clone do repositório na sua máquina </li>
<br>
  
~~~
git clone https://github.com/quisini/jornada-fullstack-spotify.git
~~~

<li>Acesse o diretório. A estrutura de pastas será essa:</li>
<br>
  
```
├── 📁 front-end
├── 📁 back-end
├── package.json
├── README.md
```
<br>
<li>Acesse o arquivo api.js no caminho:</li>
<br>

```
├── 📁 front-end
│   └── 📁 api
│       └── api.js
├── 📁 back-end
├── package.json
├── README.md
```
<br>
<li>Edite o valor da constante URL para o seguinte valor:</li>
<br>

~~~javascript
const URL = "http://localhost:3000/api";
~~~

Este valor é o local do nosso servidor (servidor local, ouvindo na porta 3000).
<br>
<i>Opcional: caso você queira mudar a porta do servidor vá para:
```
├── 📁 front-end
├── 📁 back-end
│   └── 📁 api
│       └── server.js
├── package.json
├── README.md
```
<br>

E mude o valor de PORT:
<br>

~~~javascript
const PORT = {porta de comunicação do seu servidor};
~~~
</i>

<br>
<li>Feita as configurações prévias (Node instalado, repositório baixado), rode os seguintes comandos dentro do diretório <i>jornada-fullstack-spotify</i>:</li>
<br>

~~~
# Este comando instalará todas as dependências e pacotes,
# tanto do backend quanto do frontend, e depois criará uma pasta dist, contendo o html estático.
npm run build

# Inicie o servidor da API
npm run start

# Rode o front da página
npm run dev
~~~

</ol>
Pronto! Acesse sua página rodando localmente pelo link que aparecerá no seu terminal (ou digite 'o' para abrir a página no navegador automaticamente).

<h2>🧑 Autor</h2>
<li><a href="https://github.com/Quisini">Quisini</a></li>

<h2>Acesso na web pelo link: https://jornada-fullstack-spotify-vqeu.onrender.com (Render) </h2>
