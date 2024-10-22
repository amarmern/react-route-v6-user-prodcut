import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [secondPass, setSecondPass] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setSecondPass((prevTime) => prevTime + 0.01);
      }, 10); // update every 10 milliseconds
    }
  };

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const handleContinue = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setSecondPass((prevTime) => prevTime + 0.01);
      }, 10);
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(timerRef.current); // Clean up on component unmount
    };
  }, []);

  return (
    <>
      <h1>Time Passed {secondPass.toFixed(2)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleContinue}>Continue</button>
    </>
  );
}

export default App;
