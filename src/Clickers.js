import React, { useState } from "react";

export default function Clickers() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 250);
  };

  return (
    <div>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <span data-testid="count">{count}</span>
    </div>
  );
}
