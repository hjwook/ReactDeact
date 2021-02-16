import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Counter from './Counter';

// 하나의 루트 DOM 노드가 존재
// React 엘리먼트를 루트 DOM 노드에 렌더링하려면 ReactDOM.render()로 전달하면 된다.
// Counter 컴포넌트를 랜더링 하겠다.
ReactDOM.render(

  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
