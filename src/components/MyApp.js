import React, { useState } from 'react';
import MyButton from './MyButton';

function MyApp() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCnt) => prevCnt + 1);
  };
  return (
    <>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

export default MyApp;
