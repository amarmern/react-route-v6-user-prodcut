import React, { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

function ProductCountIncrement() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId) {
    // setProducts((prev) =>
    //   prev.map((item) =>
    //     item.id === productId ? { ...item, count: item.count + 1 } : item
    //   )
    // );
    let newItem = products.map((item) =>
      item.id === productId ? { ...item, count: item.count + 1 } : item
    );
    setProducts(newItem);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductCountIncrement;
