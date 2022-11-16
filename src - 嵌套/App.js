import React from 'react';
import './App.css';

import { Link, NavLink, Switch, Route, Redirect } from "react-router-dom"

import SongList from "./components/pages/SongList"
import Index from "./components/pages/Index"
import Play from "./components/pages/Play"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/songlist/:listId" component={SongList}></Route>
        <Route path="/play/:playId" component={Play}></Route>
        {/* 嵌套路由不要给一级路由添加 exact  */}
        <Route path="/"  component={Index}></Route>
      </Switch>
    </div>
  );
}

export default App;
