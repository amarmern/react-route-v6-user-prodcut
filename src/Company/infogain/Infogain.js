import React, { useState } from 'react';

function Infogain() {
  const [on, setOn] = useState('false');
  return (
    <div>
      <button onClick={() => setOn(!on)}>{on ? 'On' : 'OFF'}</button>
    </div>
  );
}

export default Infogain;
