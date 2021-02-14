import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    
    const onIncrease = () => {
      setNumber(number*number);
        console.log('^2')
    }
    const onDecrease = () => {
      setNumber(Math.pow(number,1/2));
        console.log('^1/2');
    }

    return (
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
    );
  }
export default Counter;