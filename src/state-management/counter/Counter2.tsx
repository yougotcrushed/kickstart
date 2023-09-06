import React, { useState } from "react";
import useCounterStore from "./store";

const Counter2 = () => {
  const { increment, dicrement, counter, reset } = useCounterStore();

  return (
    <div>
      Counter {counter}
      <button className="btn btn-primary mx-1" onClick={() => increment()}>
        Increment
      </button>
      <button className="btn btn-primary mx-1" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-primary mx-1" onClick={() => dicrement()}>
        Discrement
      </button>
    </div>
  );
};

export default Counter2;
