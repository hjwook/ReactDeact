import React from 'react';
import Hello from './1-6-Hello'; 
import Wrapper from './1-5-Wrapper'; 

function App() {
 
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;