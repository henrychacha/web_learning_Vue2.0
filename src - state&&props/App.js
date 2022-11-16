import React from 'react';
import './App.css';

import Child1 from "./components/Child1"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      parentCount:10
    }
  }

  componentDidMount(){
    this.setState({
      parentCount:20
    })
  }
  render(){

    return (
      <div className="App">
        <Child1 parentCount={this.state.parentCount}></Child1>

      
      </div>
    );
  }
}

export default App;
