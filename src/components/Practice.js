import React, { useReducer, useRef, useState } from 'react';

const initialSate = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'sub':
      return { count: state.count - 1 };
    case 'reset':
      return { count: initialSate.count };
    default:
      throw new Error();
  }
}
function Practice() {
  const [state, dispatch] = useReducer(reducer, initialSate);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'sub' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  );
}

export default Practice;
