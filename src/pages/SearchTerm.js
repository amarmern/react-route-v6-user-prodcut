import { useEffect, useState } from 'react';

function SearchTerm() {
  const [person, setPerson] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);
  const searchedPerson = person.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        name="searchTerm"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchedPerson.map((p) => (
          <li>{p.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchTerm;
