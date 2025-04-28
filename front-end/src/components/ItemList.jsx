import React from "react";
import { useEffect } from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, itemsArray, path, idPath, itemsToShow }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">
            <p>Mostrar tudo</p>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="item-list__container">
        {itemsArray
          .filter((currValue, index) => index < itemsToShow)
          .map((currObj, index) => (
            <SingleItem
              //   id={currValue.id}
              //   name={currValue.name}
              //   image={currValue.image}
              //   banner={currValue.banner}
              {...currObj}
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
