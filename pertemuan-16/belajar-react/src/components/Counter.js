import {useState} from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1)
  }

  function decrease() {
    if (number > 0) setNumber(number - 1)
  }

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{number}</span>
      <button onClick={increase}>+</button>
    </div>
  )
}

export default Counter