import React from 'react';
import withCounter from './withCounter';

function HoverCounter(props) {
  return (
    <div>
      <div>
        <button onMouseOver={props.increment}> {props.name}</button>
      </div>
    </div>
  );
}

HoverCounter.add = function (a, b) {
  return a + b;
};
export default withCounter(HoverCounter);
