import React from 'react';
import { useReducer } from 'react';

const initialState = {
  count: 0,
};

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case 'add':
      return {
        count: state.count + 1,
      };
    case 'subtract':
      return { count: state.count - 1 };
    case 'reset':
      return { count: initialState.count };
    default:
      throw new Error();
  }
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>add</button>
      <button onClick={() => dispatch({ type: 'subtract' })}>subtract</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
}

export default ReducerCounter;
