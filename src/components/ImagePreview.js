import React from "react";
import { getFavorites } from "../api/storage";
import IconButton from "./IconButton";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <>
      <div className="imageContainer">
        <IconButton
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
        </IconButton>
        <img className="imageThumb" src={src} alt={alt} />
        <p className> Author: {author}</p>
      </div>
    </>
  );
}
