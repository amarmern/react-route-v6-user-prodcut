import React, { useState } from 'react';

const data = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Carrot', category: 'Vegetable' },
  { name: 'Banana', category: 'Fruit' },
  { name: 'Potato', category: 'Vegetable' },
];

export default function CategoryFilter() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === 'All' || item.category === filter)
    );
  });

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Dropdown Filter */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
      </select>

      {/* Result */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
