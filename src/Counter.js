import React, { useState } from "react";

function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <div>
        <button onClick={handleDecrement} data-cy="decrement">-</button>
        <h5 data-cy="count">Count is {count}</h5>
        <button onClick={handleIncrement} data-cy="increment">+</button>
      </div>
      <button onClick={() => setCount(0)} data-cy="reset">Reset</button>
    </div>
  );
}

export default Counter;