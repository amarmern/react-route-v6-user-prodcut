import React, { useState } from 'react';
import './style.css';

import PersonList from './PersonList.js';

export default function Person() {
  const [state, setState] = useState({ name: '', email: '' });
  const [person, setPerson] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPerson((prev) => [...prev, state]);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <button> Add</button>
      </form>
      <PersonList person={person} />
    </>
  );
}
