import React from 'react';
import logo from './logo.svg';
import './App.css';


import {Switch,Route,Redirect} from "react-router-dom"

function Home(){
  return(
    <div>home</div>
  )
}

function About(){
  return(
    <div>about</div>
  )
}

function Login(props){
  return(
  <div>login-{props.count}</div>
  )
}

var loggedIn = false;

function App() {
  return (
    <div className="App">
      {/* 容器，路由设置设置容器 */}
        <Switch>
          {/* route 组件用来设置路由
              path: 路由地址
              component: 渲染组件

              route 组件默认的匹配机制是模糊匹配
              "/about"  被认为和 "/" 匹配

              可以通过设置 exact 来 进行精准匹配

              匹配顺序是自上而下，上面匹配到了，下面就不会继续匹配
          
          */}

          {/* 1.使用exact 解决根地址问题 */}
          {/* <Route path="/"  exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route> */}

          
          {/* 2.利用匹配机制，自上而下先匹配其它路径 */}
          {/* <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Home}></Route> */}


          {/* 3.利用重定向来 解决 */}
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          {/* <Route path="/login" component={Login}></Route> */}


          {/* 渲染向路由组件传入props , 必须使用 render 写法
              route ： 路由参数对象
          */}
          <Route path="/login" render={(route)=>{
            console.log(route)
            return (<Login count={1}></Login>)
          }}></Route>
          {/* 重定向组件：
                path || from : 定义 重定向匹配地址
                to : 重定向的目的地址
          */}
          <Redirect from="*" to="/home"></Redirect>

          {/* <Route exact path="/">
            {loggedIn ? <Redirect to="/home" /> : <Login />}
          </Route> */}
        </Switch>
    </div>
  );
}

export default App;
