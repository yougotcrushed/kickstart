import React, { useReducer, useState } from "react";
import counterReducer from "../reducers/CounterReducer";

const Counter1 = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter {value}
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch({ type: "Increment" })}
      >
        Increment
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch({ type: "Discrement" })}
      >
        Discrement
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => dispatch({ type: "Reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter1;
