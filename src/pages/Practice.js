import React, { useState } from 'react';

function Practice() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = list.concat(item);
    setList(newItem);
  };

  const handleClick = (e) => {
    let val = e.currentTarget.innerText;
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
          <ul onClick={handleClick}>{list && list.map((i) => <li>{i}</li>)}</ul>
        </div>
        <button>add</button>
      </form>
    </div>
  );
}

export default Practice;
