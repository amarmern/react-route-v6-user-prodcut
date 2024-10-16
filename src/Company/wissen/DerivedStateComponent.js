import React, { useState } from 'react';

function DerivedStateComponent() {
  const [input, setInput] = useState('');
  const [length, setLength] = useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
    setLength(e.target.value.length);
  };
  return (
    <>
      <div>DerivedStateComponent</div>
      <input value={input} name={input} onChange={handleChange} />
      <p>Length of input: {length}</p>
    </>
  );
}

export default DerivedStateComponent;
