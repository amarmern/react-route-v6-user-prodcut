import React, { useState } from 'react';

function Greeting() {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting;
