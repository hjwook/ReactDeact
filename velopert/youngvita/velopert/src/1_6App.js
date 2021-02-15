import React from 'react';
import Hello from './1_6Hello';
import Wrapper from './1_5Wrapper';


function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={false} />
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App;