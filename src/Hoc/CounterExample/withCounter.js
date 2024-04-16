import { useState } from 'react';

const withCounter = (OriginalComponent) => {
  const NewComponent = (props) => {
    //perform some logic
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((c) => c + 1);
    };

    return (
      <div>
        {count}
        <OriginalComponent increment={incrementCount} {...props} />
      </div>
    );
  };
  NewComponent.add = OriginalComponent.add; //passing the static method using hoc.
  return NewComponent;
};

export default withCounter;
