const throttle = (cb, d) => {
  let lastCall = 0;
  return function (...rest) {
    let now = Date.now();
    if (now - lastCall < d) {
      return;
    }
    now = lastCall;
    cb(...rest);
  };
};
