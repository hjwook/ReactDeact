import react from 'react';

// function Hello(props){

//     return <div style = {{color: props.color}}>힘세고 강한 아침! {props.name}</div>

// }


//1-5
// function Hello({ color, name }) {

//     return <div style = {{color}}>힘세고 강한 아침! {name}</div>

// }

// Hello.defaultProps = {
//     name : 'noName',
//     color: 'red'
// }

import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      선생님..숙제가 너무 많아요.. {name}

      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '자게해줘'
}


export default Hello;
