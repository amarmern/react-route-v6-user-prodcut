import React, { useEffect, useRef, useState } from 'react';

function Demouserefhooks() {
  const [name, setName] = useState('');
  const initRef = useRef(0);
  const initRefFocus = useRef();
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = name;
  }, [name]);

  const handleCLick = () => {
    initRefFocus.current.focus();
    initRef.current = initRef.current + 1;
    alert(` clicked on button ${initRef.current} times`);
  };

  return (
    <>
      <input
        ref={initRefFocus}
        type="text"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCLick}>Click Me!</button>
      <h1>
        My current name is {name} and Prevous name value used of :{' '}
        {prevRef.current}
      </h1>
    </>
  );
}

export default Demouserefhooks;
