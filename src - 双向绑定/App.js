import React from 'react';
import './App.css';

import Child1 from "./components/Child1"
import Child2 from "./components/Child2"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      msg:"父组件传入的数据"
    }
  }

  // 父组件的msg 修改行数， e 是子组件 input 标签 onChange 的event
  changeMsg(e){
    console.log(e)
    this.setState({
      msg:e.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <p>{this.state.msg}</p>
        <Child1 msg={this.state.msg} changeMsg={this.changeMsg.bind(this)}></Child1>
        <Child2 msg ="App传入到Child1的值"></Child2>
      </div>
    );
  }
}

export default App;
