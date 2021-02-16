import React from 'react';
import Hello from './Hello';

function App(){

    const name = '허정욱';
    const style = {
        backgroundColor: 'blue',
        color: 'red',
        fonsize : 30,
        padding : '10rem'
    }
    return (
        <>
            <div style = {style}>
                <Hello />
                <Hello />
                <Hello />
                <input />
                <br />
            </div>
            <div>{name}</div>
            <>
            <Hello />
            <Hello />
            <Hello />
            <input />
            <br />
            </>
        </>
    );
}

export default App;