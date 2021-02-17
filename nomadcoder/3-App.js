import React from 'react'; 
//import PropTypes from "prop-types";
//import { render } from 'react-dom';

class App extends React.Component{
  //console.log(fav)
  state = {
    count: 0
  };
  add = () => {
    //console.log("add");
    this.state.count = 1;
  };
  minus = () =>{
    //console.log('minus');
    this.state.count = -1;
  };
  render(){
        return (
        <div>
          <h1>The number is :  {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
          )
  }

}
 
export default App;
