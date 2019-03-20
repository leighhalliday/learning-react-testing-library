import React from "react";
import { inject, observer } from "mobx-react";

function MobCounter({ CounterStore }) {
  return (
    <div>
      <button onClick={CounterStore.increment}>+</button>
      <span data-testid="count">{CounterStore.count}</span>
      <button onClick={CounterStore.decrement}>-</button>
    </div>
  );
}

export default inject("CounterStore")(observer(MobCounter));
