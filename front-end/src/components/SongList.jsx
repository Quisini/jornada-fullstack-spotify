import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);
  let isShowingAll = items === songsArray.length ? true : false;
  // console.log(songsArray.length);
  return (
    <div className="song-list">
      {songsArray
        .filter((currSongObj, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem key={index} index={index} {...currentSongObj} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() =>
          isShowingAll ? setItems(items - 5) : setItems(items + 5)
        }
      >
        {isShowingAll ? "Ver Menos" : "Ver Mais"}
      </p>
    </div>
  );
};

export default SongList;
