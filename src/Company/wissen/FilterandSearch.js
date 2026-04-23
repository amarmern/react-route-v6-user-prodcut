import React, { useState } from 'react';

let STUDENTDATA = [
  { id: 1, name: 'test1' },
  { id: 2, name: 'john' },
  { id: 3, name: 'alex' },
  { id: 4, name: 'test4' },
  { id: 5, name: 'mike' },
  { id: 6, name: 'test6' },
];

export default function FilterandSearch() {
  const [student] = useState(STUDENTDATA);
  const [selectedId, setSelectedId] = useState('');
  const [searchText, setSearchText] = useState('');

  // 🔥 Combined filtering
  const filteredStudent = student.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchDropdown = selectedId ? item.id === Number(selectedId) : true;

    return matchDropdown && matchSearch;
  });

  return (
    <>
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search student..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* 🔽 Dropdown */}
      <select onChange={(e) => setSelectedId(e.target.value)}>
        <option value="">All</option>
        {student.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      {/* 📋 List */}
      <ul>
        {filteredStudent.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </>
  );
}
