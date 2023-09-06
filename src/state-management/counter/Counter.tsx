import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      Counter {value}
      <button
        className="btn btn-primary mx-1"
        onClick={() => setValue(value + 1)}
      >
        Increment
      </button>
      <button className="btn btn-primary mx-1" onClick={() => setValue(0)}>
        Reset
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => setValue(value > 0 ? value - 1 : 0)}
      >
        Discrement
      </button>
    </div>
  );
};

export default Counter;
