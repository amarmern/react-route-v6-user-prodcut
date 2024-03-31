import React, { useRef } from 'react';

function Myref() {
  const ref1 = useRef();

  const handleSubmit = () => {
    console.log(ref1.current.value);
  };
  return (
    <div>
      <input type="text" ref={ref1} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Myref;
