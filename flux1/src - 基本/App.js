import React from 'react';
import './App.css';
import store from "./store/store"
import actions from "./store/actions"

class App extends React.Component{
  constructor(){
    super();

    // 从store 获取初始 状态
    this.state = {
      todos:store.getTodoList(),
      flag:true
    }
  }
  // 组件挂在之后
  componentDidMount(){
    // 调用 store 的bindChange方法 ， 传入的实参 是 更新 视图 的_change 函数
    store.bindChange(this._change.bind(this))
    // store.on("change",this._change.bind(this))
  }

  //  更新 组件的state
  _change(){
    this.setState({
        todos:store.getTodoList()
    })
  }
  addFn(){
    // 用户的操作发出一个action
    actions.sendAction("睡觉");
  }
  render(){
    return (
      <div className="App">
        <div><button onClick={this.addFn.bind(this)}>add item</button></div>
        <ul>
          {
            this.state.todos.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
