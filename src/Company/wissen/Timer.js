import React, { useEffect } from 'react';

function Timer() {
  //useEffect(() => {
  for (var i = 0; i < 5; i++) {
    ((i) => {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
  //}, []);

  return <div>time check</div>;
}

export default Timer;
