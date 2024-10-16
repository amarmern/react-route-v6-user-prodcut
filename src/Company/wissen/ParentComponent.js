import React, { useState } from 'react';

const ChildComponent = ({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Button clicked');
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default React.memo(ParentComponent);
