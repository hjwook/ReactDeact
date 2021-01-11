import react from 'react';

// function Hello(props){

//     return <div style = {{color: props.color}}>힘세고 강한 아침! {props.name}</div>

// }


//1-5
function Hello({ color, name }) {

    return <div style = {{color}}>힘세고 강한 아침! {name}</div>

}

Hello.defaultProps = {
    name : 'noName',
    color: 'red'
}

export default Hello;
