import React from 'react';
import withCounter from './withCounter';

function ClickCounter(props) {
  return (
    <div>
      <button onClick={props.increment}>{props.name}</button>
    </div>
  );
}

export default withCounter(ClickCounter);
