import React from 'react';
import './App.css';

import { Link, NavLink, Switch, Route, Redirect } from "react-router-dom"
import Recommend from "./components/pages/Recommend"
import Search from "./components/pages/Search"
import Hot from "./components/pages/Hot"
import SongList from "./components/pages/SongList"
import Song from "./components/pages/Song"
import Play from "./components/pages/Play"
// import querystring from "querystring"

// let str = "?a=1&b=2";

// console.log(querystring.parse(str.slice(1)))

function App() {
  return (
    <div className="App">
      <div>
        {/* NavLink 导航组件：
          设置活跃样式
        
        */}
        <p><NavLink to="/recommend" activeClassName="red" exact>推荐</NavLink>
          <NavLink to="/hot" activeClassName="red">热歌</NavLink>
          <NavLink to="/search" activeClassName="red">搜索</NavLink></p>
        <p><Link to="/songlist/123">/songlist/123</Link>
          <Link to="/songlist/234">/songlist/234</Link></p>
        <p>
          <Link to="/song?songId=666">/song?songId=666</Link>
          <Link to="/song?songId=888">/song?songId=888</Link>
        </p>
        <p>
          <Link to={{pathname:"/play",state:{
             playId:111
          }}}>playId:111</Link>
           <Link to={{pathname:"/play",state:{
             playId:222
          }}}>playId:222</Link>
        </p>
      </div>
      <Switch>
        <Route path="/recommend" component={Recommend}></Route>
        <Route path="/hot" component={Hot}></Route>
        <Route path="/search" component={Search}></Route>
        {/* : 代表这是动态路由 */}
        <Route path="/songlist/:listId" component={SongList}></Route>
        <Route path="/song" component={Song}></Route>
        <Route path="/play" component={Play}></Route>
        <Redirect path="*" to="/recommend"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
