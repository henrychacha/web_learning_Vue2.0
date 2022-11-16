import React from 'react';
import './App.css';

import Child1 from "./components/Child1"

class App extends React.Component{
  constructor(){
    console.log("p-construtor")
    super();
    this.state = {
      parentCount:10,
      isShow:true
    }
  }

  // 组件即将渲染，在ssr 中会用到
    componentWillMount(){
      console.log("p-componentWillMount");
  }

  // 组件完成挂载，ajax , 开启定时器， 操作真实 DOM 
  componentDidMount(){
      console.log("p-componentDidMount");
  }

 
  // props 和state 的变化 会执行该钩子
  // 判断组件是否应该更新，必须拥有返回值，
  // 返回值为 true ,继续更新，返回值为false 中止更新
  shouldComponentUpdate(){
    return true;
  }
  // 组件将要更新， 数据更新后，视图开始重新渲染前做的事
  componentWillUpdate(nextProps,nextState){
    // 不要在这里调用 setState 更新数据
    // console.log(nextProps,nextState);
    // alert("数据即将更新")
  }
  //  prevProps,prevState 更新前的props 和state
  componentDidUpdate(prevProps,prevState){
    console.log("p-componentDidUpdat");
    console.log(prevProps,prevState);

    // 不可以在这里调用state 修改state
    // this.setState({
    //   parentCount:20
    // })
  } 
  // 渲染组件并挂载在render 中完成
  render(){
    // 不要render这里 调用setState
    console.log("p-render")
    return (
      <div className="App">
        <h2>{this.state.parentCount} -- <button onClick={()=>{
          this.setState({
            parentCount:this.state.parentCount+1
          })
        }}>+</button></h2>

        <button onClick={()=>{
          this.setState({
            isShow:false
          })
        }}>toggle</button>
        {this.state.isShow&&<Child1 parentCount ={this.state.parentCount}></Child1>}
      </div>
    );
  }
}

export default App;
