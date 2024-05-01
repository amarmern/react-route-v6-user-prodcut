import { useState } from 'react';

function useCount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export default useCount;
