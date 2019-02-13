import React from "react";
import { connect } from "react-redux";

function Counters({ dispatch, count }) {
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span data-testid="count">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default connect(state => ({ count: state.count }))(Counters);
