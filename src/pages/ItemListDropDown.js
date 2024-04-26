import React, { useState } from 'react';

const Products = [
  { id: 1, name: 'item1' },
  { id: 2, name: 'item2' },
  { id: 3, name: 'item3' },
];

const ItemListDropDown = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectChange = (event) => {
    const selectedProduct = Products[event.target.value];
    setSelectedItem(selectedProduct);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="">Select an item</option>
        {Products.map((item, index) => (
          <option key={item.id} value={index}>
            {item.name}
          </option>
        ))}
      </select>
      {selectedItem && <p>Selected item: {selectedItem.name}</p>}
    </div>
  );
};

export default ItemListDropDown;
