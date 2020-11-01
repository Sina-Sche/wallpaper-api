import React from "react";

import "./Button.css";

export default function Button({ className, onClick, buttonText }) {
  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
}
