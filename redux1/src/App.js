import React from 'react';

import './App.css';
import {createStore} from "redux"

//1. 初始state
let initState = {count:1}

//2. 将 初始state 作为 reduce 的默认参数,action 就是 store 发出的action
// store 发出action reducer 函数就会执行,返回值就是最新的state
let reducer = function(state=initState,action){
  console.log(state,action)

  switch(action.type){
    case "INCREMENT":
      state.count+=action.payload;
      // 必须返回一个新的state
      return {...state};
    case "MUL":
        state.count-=action.payload;
        // 必须返回一个新的state
        return {...state};
    default:
      return state;

  }

  // 默认返回 当前 state,getState 方法返回就是 当前 reducer 函数的返回值
  // return state;
}

// 3.创建store,reducer 函数初始执行  
// 接受参数， 参数一个reducer 函数
let store =  createStore(reducer);


// 获取当前 store 中的state
// console.log(store.getState());

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      // 4.获取默认state 的count
      count:store.getState().count
    }
  }
  componentDidMount(){
    // 5.使用 store subscribe 设置监听函数, 函数的 state 做出改变的时候执行
    store.subscribe(()=>{
      // console.log("state 改变了")
      this.setState({
        count:store.getState().count
      })
    })
  }
  render(){
    return (
      <div className="App">
        <button onClick={()=>{
          // 发出action
          store.dispatch({
            type:"INCREMENT",
            payload:10
          });

          // console.log(store.getState())
        }} >{this.state.count}</button>
        <button onClick={()=>{
          store.dispatch({
            type:"MUL",
            payload:2
          });
        }}>-</button>
      </div>
    );
  }
}

export default App;
