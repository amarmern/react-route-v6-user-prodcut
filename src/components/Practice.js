import React, { useEffect, useReducer, useRef, useState } from 'react';
const initialState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        count: state.count + 1,
      };
    case 'sub':
      return {
        count: state.count - 1,
      };
    case 'reset':
      return {
        count: initialState.count,
      };
    default: {
      return new Error();
    }
  }
}

function Practice() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>add</button>
      <button onClick={() => dispatch({ type: 'sub' })}>sub</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
}

export default Practice;
