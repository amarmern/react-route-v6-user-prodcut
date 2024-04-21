import React, { useEffect, useMemo, useState } from 'react';

function Memohooks() {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(0);

  const doubleNumber = useMemo(() => {
    slowFuction(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      backGroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  useEffect(() => {
    console.log('theme changed');
  }, [themeStyle]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFuction(num) {
  console.log('calling Slow function');
  for (let i = 0; i <= 10000000000000; i++) {
    return num * 2;
  }
}

export default Memohooks;
