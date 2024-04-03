import React, { useState } from 'react';

function Practice() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = list.concat(item);
    setList(newItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <div>
          <ul>{list && list.map((i) => <li>{i}</li>)}</ul>
        </div>
        <button>add</button>
      </form>
    </div>
  );
}

export default Practice;
