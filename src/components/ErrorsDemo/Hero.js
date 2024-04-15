import React from 'react';

function Hero({ heroName }) {
  if (heroName === 'Jocker') {
    throw new Error('not a hero');
  }
  return <div>Hero</div>;
}

export default Hero;
