import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faCirclePlay, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SongItem = ({ image, name, duration, _id, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Link
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      to={`/song/${_id}`}
      className="song-item"
    >
      <div className="song-item__number-album">
        <p className="song-item__number">
          {isHovering ? <FontAwesomeIcon icon={faPlay} /> : index + 1}{" "}
        </p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem da música ${name}`}
          ></img>
          <p className="song-item__name">{name}</p>
        </div>
      </div>
      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
