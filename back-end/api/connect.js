// JavaScript Assíncrono
// async await

// MongoClient faz a conexão com o MongoDB
import { MongoClient } from "mongodb";
import "dotenv/config";

// Chave de acesso do meu cluster
const URI = process.env.MONGO_KEY;

// Definindo um novo objeto da classe MongoClient e passando a URI como parâmetro.
const client = new MongoClient(URI);

// Guardando o banco de dados do cluster na variável 'db'
// Exportando para uso no server
export const db = client.db("spotifyAula");
