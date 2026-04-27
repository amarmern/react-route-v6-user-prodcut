import React, { useState, useReducer, useRef, useEffect } from 'react';

export default function App() {
  const [step, setSteps] = useState(1);
  const [formData, setFromData] = useState({ name: '', email: '', age: '' });
  const nextStep = () => {
    setSteps(step + 1);
  };

  const prevStep = () => {
    setSteps(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <h2> steps </h2>
      {step === 1 && (
        <>
          <input
            placeholder="name"
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <button onClick={nextStep}>Next </button>
        </>
      )}
      {step === 2 && (
        <>
          <input
            placeholder="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <button onClick={prevStep}>back </button>
          <button onClick={nextStep}>Next </button>
        </>
      )}
      {step === 3 && (
        <>
          <input
            placeholder="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <br />
          <button onClick={prevStep}>back </button>
          <button onClick={handleSubmit}>submit </button>
        </>
      )}
    </>
  );
}
