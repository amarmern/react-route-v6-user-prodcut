import React, { useEffect, useState } from 'react';

function Practice() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((cnt) => cnt + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <div>{count}</div>;
}

export default Practice;
