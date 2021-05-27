import React, { useState } from "react";

function CounterHooks() {
  const [count, setCount] = useState(0);

  // returns an array with two items:
  // 1. returns the piece of state
  // 2. function to update that piece of state

  return (
    <div>
      <h1>The Count Is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}

export default CounterHooks;
