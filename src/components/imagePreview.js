import React from "react";
import "./imagePreview.css";

export default function ImagePreview({ src, alt, author }) {
  return (
    <>
      <div className="imageContainer">
        <button className="fav_button">♥</button>
        <img className="imageThumb" src={src} alt={alt} />
        <p className> Author: {author}</p>
      </div>
    </>
  );
}
