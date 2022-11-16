import React from 'react';
import './App.css';

import AppRouter from "./router/AppRouter"
import { Link,NavLink } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* 
      普通导航组件
      to； 导航地址
        默认是push 模式， 推入历史栈可以回退
        可以设置为 replace ,在历史栈中替换当前的访问记录
      */}
      <p>
        <Link to="/home" >home</Link>
        <Link to={{
          pathname: "/about"
        }} replace >about</Link>
      </p>

      <p>
        {/* NavLink 导航组件：
          设置活跃样式
        
        */}
         <NavLink to="/home" activeClassName="red" exact>home</NavLink>
         <NavLink to="/about" activeClassName="red">about</NavLink>
      </p>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
