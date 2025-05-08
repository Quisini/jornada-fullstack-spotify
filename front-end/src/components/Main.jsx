import React from "react";
import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const singleItemWidth = window.innerWidth >= 480 ? 172 : 150;
const singleItemPadding =
  window.innerWidth >= 480 ? 25 * 2 - 20 * 2 : 20 - 10 * 2;

const Main = ({ type }) => {
  const itemsPerRow = type
    ? Infinity
    : Math.floor((window.innerWidth - singleItemPadding) / singleItemWidth);

  return (
    <>
      <section className="main">
        {type === "artists" || !type ? (
          <ItemList
            title="Artistas"
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
            itemsToShow={itemsPerRow}
          />
        ) : (
          <></>
        )}

        {type === "songs" || !type ? (
          <ItemList
            title="Músicas"
            itemsArray={songsArray}
            path="/songs"
            idPath="/song"
            itemsToShow={itemsPerRow * 2}
          />
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Main;
