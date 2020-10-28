import React from "react";
import ReactDOM from "react-dom";
import FavoriteImage from "./FavoriteImage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FavoriteImage photoId="OHHX4pKQaiA" />, div);
});
