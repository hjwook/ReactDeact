import React from 'react'; 
//import PropTypes from "prop-types";
//import { render } from 'react-dom';

class App extends React.Component{ 
  //console.log(fav)
  state = {
    isLoading : true
  }; 
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false});
    }, 3000);
  }
  render(){
        const{isLoading} = this.state;
        return (
        <div>
          {isLoading ? "Loading..." :"We are ready"}
        </div>
          )
  }; 
}
 
export default App;
