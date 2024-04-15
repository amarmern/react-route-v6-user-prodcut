import React, { useState } from 'react';

import { useErrorBoundary } from 'react-error-boundary';
const MAX_COUNT_ALLOW = 5;

function ClickCounter() {
  const [count, setCount] = useState(0);

  const { resetBoundary } = useErrorBoundary();

  function handleCount() {
    try {
      if (count === MAX_COUNT_ALLOW) {
        throw new Error('Count lilimt excceded');
      } else {
        setCount((c) => c + 1);
      }
    } catch (error) {
      resetBoundary(error);
      // console.log('error');
    }
  }

  return (
    <div>
      <button onClick={handleCount}>Counter Count {count}</button>
    </div>
  );
}

export default ClickCounter;
