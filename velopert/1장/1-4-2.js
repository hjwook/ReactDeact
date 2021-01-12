import React from 'react';
import Hello from './1-3-1Hello2';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize : 24, // 기본단위는 픽셀
    padding: '1rem' //다른단위 사용시 문자열로 설정
  }
  return (
    <>
      <Hello /> 
      <div style={style}>{name}</div>
    </>
  );
}

export default App;