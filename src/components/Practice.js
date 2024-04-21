import React, { useReducer, useState } from 'react';

function Practice() {
  const uid = 0;
  const [user, setUser] = useState('');
  const [list, setList] = useState([]);

  return (
    <div>
      <input
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={() => setList([...list, { id: uid + 1, user: user }])}>
        Add
      </button>
      <p>
        {list.map((lst) => (
          <li key={lst.id}>{lst.user}</li>
        ))}
      </p>
    </div>
  );
}

export default Practice;
