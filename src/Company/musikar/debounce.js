import React, { useState, useEffect } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  // debounce input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searched);
    }, 500);

    return () => clearTimeout(timer);
  }, [searched]);

  // fetch once (no delay needed)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredUsers = users.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  return (
    <div>
      <h1>User Search</h1>

      <input
        type="text"
        value={searched}
        onChange={(e) => setSearched(e.target.value)}
        placeholder="Search users..."
      />

      <ul>
        {filteredUsers.map((usr) => (
          <li key={usr.id}>{usr.name}</li>
        ))}
      </ul>
    </div>
  );
}
