import React, { useState } from 'react';
import useCount from './useCount';
import usePrevious from './usePrevious';

function Counter() {
  const { count, increment, decrement, reset } = useCount(0);
  // use ref hooks get the current value
  const [refcount, setRefCount] = useState(0);

  const prevCount = usePrevious(refcount);
  return (
    <>
      <h1>
        Noe: {prevCount} , before : {prevCount}
      </h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Incremnent</button>
      <button onClick={decrement}>Decremnent</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
