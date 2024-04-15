import React, { useReducer, useState } from 'react';

function Practice() {
  const [on, setOn] = useState(false);
  return (
    <div>
      <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Practice;
