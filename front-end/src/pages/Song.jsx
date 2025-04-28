import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs.js";
import { artistArray } from "../assets/database/artists.js";

const Song = () => {
  const { id } = useParams();

  const { name, image, artist, duration, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artistObj.name
  );

  const currentIndex = songsArrayFromArtist.findIndex(
    (currSong) => currSong._id === id
  );

  const lastSongFromArray =
    songsArrayFromArtist[songsArrayFromArtist.length - 1]._id;

  const firstSongFromArray = songsArrayFromArtist[0]._id;

  const nextSongId =
    id === lastSongFromArray
      ? firstSongFromArray
      : songsArrayFromArtist[currentIndex + 1]._id;

  // console.log(nextSongId);

  const previousSongId =
    id === firstSongFromArray
      ? lastSongFromArray
      : songsArrayFromArtist[currentIndex - 1]._id;

  // console.log(previousSongId);

  return (
    <div className="song">
      <div className="song__container">
        <img
          className="song__image-container"
          src={image}
          alt={`Imagem da música ${name}`}
        />
      </div>
      <div className="song__bar">
        <div className="song-artist__image-name">
          <div className="song-artist__image-container">
            <Link to={`/artist/${artistObj._id}`}>
              <div className="song-artist__image">
                <img
                  src={artistObj.image}
                  alt={`Imagem do artista ${artist}`}
                />
              </div>
            </Link>
          </div>
          <div className="song-artist__name-container">
            <p className="song__name">{name}</p>
            <Link to={`/artist/${artistObj._id}`}>
              <p className="song-artist__name">{artist}</p>
            </Link>
          </div>
        </div>

        <Player
          duration={duration}
          nextSongId={nextSongId}
          previousSongId={previousSongId}
          audio={audio}
        />
      </div>
    </div>
  );
};

export default Song;
