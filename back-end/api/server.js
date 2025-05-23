//Application Programming Interface
// GET, POST, PUT, DELETE
// CRUD = CREATE, READ, UPDATE & DELETE
import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

// Usa o middleware cors para o tratamento de requests e responses
app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Vá para os endpoints /artists e /songs");
});

// Aqui, o async deve ser usado para especificar que essa arrow function é assíncrona, e deve ser executada com um tempo de espera
app.get("/api/artists", async (request, response) => {
  // Pegando a coleção artists.
  // O 'find' retorna os documentos da collection baseado no filtro '{}', no caso, quando o filtro está vazio, ele retorna todos os documentos.
  // O .toArray() transforma cada documento em uma posição em um array (songCollection).
  // O 'await' faz com que o comando seja assíncrono, fazendo com que ele rode com um tempo de espera até ficar pronto, já que é um processo demorado.
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  // Fazendo o mesmo mas com a coleção songs.
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));
app.get("(.*)", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {});

console.log("Servidor ouvindo na porta " + PORT);
