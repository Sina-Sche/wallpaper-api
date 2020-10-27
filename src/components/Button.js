import React from "react";

import "./button.css";

export default function Button() {
  return (
    <button className="random_button" onClick={() => alert("Test")}>
      Show me a random image
    </button>
  );
}
