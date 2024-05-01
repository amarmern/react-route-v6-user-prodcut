import React from 'react';
import useCount from './useCount';

function Counter() {
  const { count, increment, decrement, reset } = useCount(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Incremnent</button>
      <button onClick={decrement}>Decremnent</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
