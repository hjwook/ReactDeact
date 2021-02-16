import React from 'react';
import Hello from './1_5Hello';
import Wrapper from './1_5Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;