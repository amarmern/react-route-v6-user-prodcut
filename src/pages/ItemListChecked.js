import React, { useState } from 'react';

const InitialItems = [
  { id: 1, name: 'item1', isSelected: false },
  { id: 2, name: 'item2', isSelected: false },
  { id: 3, name: 'item3', isSelected: false },
];

const ItemListChecked = () => {
  const [items, setItems] = useState(InitialItems);

  const handleCheckboxChange = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleAllCheckboxChange = () => {
    const allSelected = items.every((item) => item.isSelected);
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isSelected: !allSelected }))
    );
  };

  return (
    <div>
      {/* <button onClick={handleAllCheckboxChange}>
        {items.every((item) => item.isSelected) ? 'Uncheck All' : 'Check All'}
      </button> */}

      <input Type="checkbox" onClick={handleAllCheckboxChange}></input>
      <label>
        {items.every((item) => item.isSelected) ? 'Uncheck All' : 'Check All'}
      </label>

      {items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.isSelected}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <label>{item.name}</label>
        </div>
      ))}

      <p>
        {items.filter((item) => item.isSelected).length > 0
          ? 'At least one item is selected.'
          : 'No items selected.'}
      </p>
    </div>
  );
};

export default ItemListChecked;
