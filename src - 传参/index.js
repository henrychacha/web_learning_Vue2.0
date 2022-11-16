import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,HashRouter} from "react-router-dom"
// 应用受到前端路由系统控制

// BrowserRouter 启用 history 模式
// HashRouter  启用hash 模式
ReactDOM.render(
  <HashRouter> 
    <App />
  </HashRouter> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
