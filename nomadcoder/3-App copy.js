import React from 'react'; 
//import PropTypes from "prop-types";
//import { render } from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("constructor");

  }
  //console.log(fav)
  state = {
    count: 0
  };
  add = () => {
    //console.log("add");
    //this.setState({count :this.state.count + 1});
    this.setState(ffff =>({count :ffff.count + 1}));
  };
  minus = () =>{
    //console.log('minus');
    //this.setState({count :this.state.count - 1});
    this.setState(ffff =>({count :ffff.count - 1}));
  };
  render(){
        console.log("render()");
        return (
        <div>
          <h1>The number is :  {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
          )
  };
  componentDidMount(){ 
    console.log("component renderd");
  };
  componentDidUpdate(){ 
    console.log("component update");
  };
  componentWillUnmount(){ 
    console.log("Good bye");
  };
}
 
export default App;
