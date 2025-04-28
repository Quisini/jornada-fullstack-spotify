// JavaScript Assíncrono
// async await

// MongoClient faz a conexão com o MongoDB
import { MongoClient } from "mongodb";

// Chave de acesso do meu cluster
const URI =
  "mongodb+srv://gustavoquisini:OMHTnAoBOUvF4P1n@clusterfree.52q45ph.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFree";

// Definindo um novo objeto da classe MongoClient e passando a URI como parâmetro.
const client = new MongoClient(URI);

// Guardando o banco de dados do cluster na variável 'db'
// Exportando para uso no server
export const db = client.db("spotifyAula");
