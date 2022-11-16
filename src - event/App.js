import React from 'react';
import './App.css';

import Child1 from "./components/Child1"
import Child2 from "./components/Child2"

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count:100
    }
    this.addCountP2 = this.addCount.bind(this);
  }

  addCount(n){
    console.log("addCount");
    let {count} = this.state;
    this.setState({
      count:count+n
    })
  }

  render(){
    var obj = {
      msg:"App传入到Child1的值",
      num:1
    }
    return (
      <div className="App">
        <Child1 msg="App传入到Child1的值" 
                num={1} 
                count={this.state.count}
                // 传入的addCountP 是addCount 绑定当前组件实例（父组件） 最为this 的拷贝函数
                addCountP = {this.addCount.bind(this)}></Child1>

        {/* 使用对象形式传入多个值 */}
        <Child1 {...obj} 
                count={this.state.count}
                addCountP = {this.addCountP2}
                ></Child1>
        <Child2 msg ="App传入到Child1的值"></Child2>
      </div>
    );
  }
}

export default App;
