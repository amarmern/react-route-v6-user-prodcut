import React, { useState } from 'react';

const Products = [
  { id: 1, name: 'item1', isSelected: false },
  { id: 2, name: 'item2', isSelected: false },
  { id: 3, name: 'item3', isSelected: false },
];

function Practice() {
  const [items, setItems] = useState(Products);
  const handleChnage = (id) => {
    setItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleAllCheckboxChange = () => {
    const allSelected = Products.every((item) => item.isSelected);
    setItems((prevItem) =>
      prevItem.map((item) => ({ ...item, isSelected: !allSelected }))
    );
  };
  return (
    <>
      <div>
        <button onClick={handleAllCheckboxChange}>
          {items.every((item) => item.isSelected)
            ? 'Unchecked All'
            : 'Checked All'}
        </button>
        {items.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.isSelected}
              onChange={() => handleChnage(item.id)}
            />
            <label>{item.name}</label>
          </div>
        ))}
        <p>
          {items.filter((item) => item.isSelected).length > 0
            ? 'At least one Item Selected'
            : 'No Item selected'}
        </p>
      </div>
    </>
  );
}

export default Practice;
