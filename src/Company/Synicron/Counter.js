import React, { useState, useRef } from 'react';

export default function Counter() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secondPass = 0;

  if (startTime && now) {
    secondPass = (now - startTime) / 1000;
  }
  return (
    <div className="App">
      <h1> Time Passed {secondPass.toFixed(2)} </h1>
      <button onClick={handleStart}> Start</button>
      <button onClick={handleStop}> Stop</button>
    </div>
  );
}
