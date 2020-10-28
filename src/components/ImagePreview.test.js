import React from "react";
import ReactDOM from "react-dom";
import imagePreview from "./imagePreview";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<imagePreview />, div);
});
