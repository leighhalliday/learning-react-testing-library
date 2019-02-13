import React from "react";

export default function Header({ text }) {
  return (
    <header>
      <h1 data-testid="h1tag" className="fancy-h1">
        {text}
      </h1>
    </header>
  );
}
