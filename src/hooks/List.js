import React, { useEffect, useState } from 'react';

function List({ getItem }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(getItem());
  }, [getItem]);
  return item.map((item) => <div key={item}>{item}</div>);
}

export default List;
