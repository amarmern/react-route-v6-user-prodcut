import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [peson, sertPerson] = useState([]);
  const [selected, setSelected] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => sertPerson(data));
  }, []);

  const searchedPerson = peson.filter((item) => {
    const selectedPerson = selected ? item.id === Number(selected) : true;
    const serachedItem = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return serachedItem && selectedPerson;
  });
  return (
    <>
      <select onChange={(e) => setSelected(e.target.value)}>
        {' '}
        <option value=""> All</option>{' '}
        {peson.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={searchTerm}
        name="searchTerm"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchedPerson.map((p) => (
        <li key={p.id}>{p.name} </li>
      ))}
    </>
  );
}
