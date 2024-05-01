import React from 'react';
import useApi from './useAPI';

function ApiExample() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const { data, isLoading, error } = useApi(apiUrl);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <h1>Data from API</h1>
      <ul>
        {data.map((p) => (
          <li>{p.name} </li>
        ))}
      </ul>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default ApiExample;
