import React from 'react';

function MyButton({ onClick, count }) {
  return <button onClick={onClick}>clicked {count} times</button>;
}

export default MyButton;
