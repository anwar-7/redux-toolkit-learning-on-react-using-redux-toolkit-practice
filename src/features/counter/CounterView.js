import React from 'react';
import { useSelector } from 'react-redux';

const CounterView = () => {
  const count = useSelector((state) => console.log(state));

  return (
    <div>
      <h3>Count: 0</h3>
      <button>Increment</button>
    </div>
  );
};

export default CounterView;
