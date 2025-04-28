// Esse arquivo vai adicionar os arrays abaixo no Mongo
// Ele vai ser usado somente 1 vez

import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

// Formatando um novo array onde é tirado o id
const newArtistsArray = artistArray.map((currArtistObj) => {
  const newArtistObj = { ...currArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currSongObj) => {
  const newSongObj = { ...currSongObj };
  delete newSongObj.id;

  return newSongObj;
});

// Usando a função insertMany para adicionar os objetos dos arrays.
// A response recebe um status referente à adição dos objetos.
const artistsResponse = await db
  .collection("artists")
  .insertMany(newArtistsArray);
const songsResponse = await db.collection("songs").insertMany(newSongsArray);

console.log(songsResponse);
console.log(artistsResponse);
