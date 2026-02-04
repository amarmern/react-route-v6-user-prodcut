import React, { useState } from 'react';

const ItemListDropDown = () => {
  const Products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'mobile' },
    { id: 3, name: 'headphone' },
  ];
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
