// Usando Axios
import axios from "axios";

const URL = "http://localhost:3000";

// Faz uma requisição para o nosso servidor
const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// Como a response contém vários elementos, selecionamos somente o .data
export const songsArray = responseSongs.data;
export const artistArray = responseArtists.data;
