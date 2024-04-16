import React from 'react';
import withCounter from './withCounter';

function ClickCounter({ increment, name }) {
  return (
    <div>
      <button onClick={increment}>{name}</button>
    </div>
  );
}

export default withCounter(ClickCounter);
