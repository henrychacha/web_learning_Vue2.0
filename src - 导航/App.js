import React from 'react';
import './App.css';

import { NavLink,Switch,Route,Redirect } from "react-router-dom"
import Recommend from "./components/pages/Recommend"
import Search from "./components/pages/Search"
import Hot from "./components/pages/Hot"
function App() {
  return (
    <div className="App">
      <div>
        {/* NavLink 导航组件：
          设置活跃样式
        
        */}
         <NavLink to="/recommend" activeClassName="red" exact>推荐</NavLink>
         <NavLink to="/hot" activeClassName="red">热歌</NavLink>
         <NavLink to="/search" activeClassName="red">搜索</NavLink>
      </div>
      <Switch>
        <Route path="/recommend" component={Recommend}></Route>
        <Route path="/hot" component={Hot}></Route>
        <Route path="/search" component={Search}></Route>
        <Redirect path="*" to="/recommend"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
