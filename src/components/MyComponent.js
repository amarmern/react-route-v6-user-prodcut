import React, { useContext } from 'react';
import { MyContext } from '../App';

function MyComponent() {
  const { text, setText } = useContext(MyContext);
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello, world!')}>Click me</button>
    </div>
  );
}

export default MyComponent;
