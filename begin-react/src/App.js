import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import React from 'react';
import Wrapper from './Wrapper';


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
  //1-3
  // return (
  //   <div>
  //       <Hello />
  //   </div>
  // );

  //1-4
  // const name = '허정욱';
  //   const style = {
  //       backgroundColor: 'blue',
  //       color: 'red',
  //       fonsize : 30,
  //       padding : '10rem'
  //   }
  //   return (
  //       <>
  //         {/* 주석은 보이지 않는다 이말이야.*/}
  //           <div style = {style}>
  //               <Hello />
  //               <Hello />
  //               <Hello />
  //               <input />
  //               <br />
  //           </div>
  //           <div className="gray-box">{name}</div>
  //           <>
  //           <Hello />
  //           <Hello />
  //           <Hello />
  //           <input />
  //           <br />
  //           </>
  //       </>
  //   );
  //1-5
  // return (
  //   <>
  //     <Hello name="허정욱" color = "blue" />
  //     <Hello  color = "blue" />
  //     <Hello />

  //     <Wrapper>
  //       <Hello color = "pink"/>
  //   </Wrapper>
  //   </>
  // );
  //1-6
  return (
    <Wrapper>
      <Hello name="살려주세오" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
  )


}

export default App;
