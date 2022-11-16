import React from 'react';
import './App.css';
import store from "./store/store"
import actions from "./store/actions"

class App extends React.Component {
  constructor() {
    super();

    // 从store 获取初始 状态
    this.state = {
      todos: store.getTodo(),
      dones:store.getDone(),
      text: "",

    }
  }
  // 组件挂在之后
  componentDidMount() {
    // 调用 store 的bindChange方法 ， 传入的实参 是 更新 视图 的_change 函数
    store.bindChange(this._change.bind(this))
    // store.on("change",this._change.bind(this))
  }

  //  更新 组件的state
  _change() {
    this.setState({
      todos: store.getTodo(),
      dones:store.getDone(),
    })
  }
  addFn() {
    // 用户的操作发出一个action
    actions.sendAction("睡觉");
  }
  render() {
    return (
      <div className="App">
        <div><input type="text"
          value={this.state.text}
          onChange={(e) => {
            this.setState({
              text: e.target.value
            })
          }}

          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              actions.sendAction(this.state.text);
              this.setState({
                text: ""
              })
            }
          }}
        /></div>
        {/* 未完成列表 */}
        <p>未完成列表   -{this.state.todos.length}</p>
        <ul>
          {
            this.state.todos.map((item, index) => {
              return <li key={item.id}>
                <input type="checkbox" 
                  checked={item.checked}
                  onChange={()=>{
                    actions.toggleAction(item.id)
                  }}
                />
                {item.todo}
                <button onClick={()=>{
                  actions.delAction(item.id)
                }}>del</button>
              </li>
            })
          }
        </ul>
        <p>完成列表   -{this.state.dones.length}</p>
        <ul>
          {
            this.state.dones.map((item, index) => {
              return <li key={item.id}>
                <input type="checkbox" 
                  checked={item.checked}
                />
                {item.todo}
                <button onClick={()=>{
                  actions.delAction(item.id)
                }}>del</button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
