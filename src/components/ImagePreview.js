import React from "react";
import { getFavorites } from "../api/storage";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <>
      <div className="imageContainer">
        <button
          className="fav_button"
          onClick={() => {
            const favorites = getFavorites();

            if (favorites.includes(id)) {
              return;
            }
            const newFavourites = [...favorites, id];
            localStorage.setItem("favorites", JSON.stringify(newFavourites));
          }}
        >
          ♥
        </button>
        <img className="imageThumb" src={src} alt={alt} />
        <p className> Author: {author}</p>
      </div>
    </>
  );
}
