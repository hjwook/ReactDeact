import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      선생님..숙제가 너무 많아요.. {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '자게해줘'
}

export default Hello;