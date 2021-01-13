import React from 'react';
import Hello from './1-5-Hello'; 
import Wrapper from './1-5-Wrapper'; 

function App() {
 
  return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;