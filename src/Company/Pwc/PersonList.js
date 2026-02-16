import React from 'react';
const PersonList = ({ person }) => {
  console.log(person);
  return (
    <>
      <ul>{person && person.map((p) => <li key={p.name}> {p.name} </li>)}</ul>
    </>
  );
};

export default PersonList;
