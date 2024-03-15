import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      Home
      <Link to="user">User</Link>
    </div>
  );
}

export default HomePage;
