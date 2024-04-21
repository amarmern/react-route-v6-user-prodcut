import React, { useEffect, useRef, useState } from 'react';

function Demouserefhooks() {
  const [name, setName] = useState('');
  const prevRef = useRef('');

  useEffect(() => {
    prevRef.current = name;
  }, [name]);

  // function focus() {
  //   inputRef.current.focus();
  // }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My Name is {name} use of my Prevous name {prevRef.current}
      </div>
      {/* <button onClick={focus}>Focus</button> */}
    </>
  );
}

export default Demouserefhooks;
