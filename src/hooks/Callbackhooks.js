import React, { useCallback, useState } from 'react';
import List from './List';

function Callbackhooks() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItem = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroudColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Thema
      </button>

      <List getItem={getItem} />
    </div>
  );
}

export default Callbackhooks;
