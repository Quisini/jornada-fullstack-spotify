import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ _id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Artista ${name}`}
          />
          <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
        </div>
      </div>
      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>
        {/* O operador ?? checa se o parâmetro passado é diferente de undefined, caso ele for, usa a si mesmo, senão usa o resultado "Artista"
        Podemos reescrever da seguinte forma: artist != undefined ? artist : "Artista" */}
        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
