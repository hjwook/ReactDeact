// import React, { useState } from 'react';

// function Counter() {
//     const [number, setNumber] = useState(2);

    
//     const onIncrease = () => {
//       setNumber(number*number);
//         console.log('^2')
//     }
//     const onDecrease = () => {
//       setNumber(Math.pow(number,1/2));
//         console.log('^1/2');
//     }

//     const onIncreaseFunc = () => {
//         setNumber(prevNumber => prevNumber + 1);
//       }
    
//     const onDecreaseFunc = () => {
//     setNumber(prevNumber => prevNumber - 1);
//     }

//     return (
//       <div>
//         <h1>{number}</h1>
//         <button onClick={onIncreaseFunc}>+1</button>
//         <button onClick={onDecreaseFunc}>-1</button>
//     </div>
//     );
//   }
// export default Counter;

//1-20
// import React, { useReducer } from 'react';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({ type: 'INCREMENT' });
//   };

//   const onDecrease = () => {
//     dispatch({ type: 'DECREMENT' });
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;

//1-24
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;