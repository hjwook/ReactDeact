import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(2);

    
    const onIncrease = () => {
      setNumber(number*number);
        console.log('^2')
    }
    const onDecrease = () => {
      setNumber(Math.pow(number,1/2));
        console.log('^1/2');
    }

    const onIncreaseFunc = () => {
        setNumber(prevNumber => prevNumber + 1);
      }
    
    const onDecreaseFunc = () => {
    setNumber(prevNumber => prevNumber - 1);
    }

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={onIncreaseFunc}>+1</button>
        <button onClick={onDecreaseFunc}>-1</button>
    </div>
    );
  }
export default Counter;