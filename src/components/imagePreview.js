import React from "react";
import "./imagePreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <>
      <div className="imageContainer">
        <button
          className="fav_button"
          onClick={() => {
            let favorites = null;
            try {
              favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            } catch (error) {
              console.error(error);
              favorites = [];
            }

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
