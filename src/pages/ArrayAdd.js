import React, { useState } from 'react';

export const ArrayAdd = () => {
  let nextId = 0;
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};
