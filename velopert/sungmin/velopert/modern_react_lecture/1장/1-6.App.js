import React from 'react';
import Hello from '../../modern_react/src/Hello';
import Wrapper from '../../modern_react/src/Wrapper';


function App() {
  return (
    <Wrapper>
      {/* <Hello name="react" color="red" isSpecial={true}/> */}
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App;