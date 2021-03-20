import { useState } from 'react';

export function Counter() {

  let [counter, setCounter] = useState<Number>(0);

  function increment() {
    setCounter(counter ++);
  }

  return (

    <div>
      <h2>Count: {counter}</h2>
      <button type='button' onClick={increment}>
        Increment
      </button>
    </div>

  );
}