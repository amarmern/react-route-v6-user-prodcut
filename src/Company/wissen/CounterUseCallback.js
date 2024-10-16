import React, { useState } from 'react';

function CounterUseCallback() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}

export default CounterUseCallback;
