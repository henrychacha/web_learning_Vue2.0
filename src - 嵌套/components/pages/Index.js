import React from "react"
import {Switch,NavLink,Route,Redirect} from "react-router-dom"
import Recommend from "./Recommend"
import Search from "./Search"
import Hot from "./Hot"
export default class Index extends React.Component{
    render(){
        return (
           <div>
               <div>
                   <NavLink to="/recommend">推荐</NavLink>
                   <NavLink to="/hot">热歌</NavLink>
                   <NavLink to="/search">搜索</NavLink>
               </div>
               <Switch>
                    <Route path="/recommend" component={Recommend}></Route>
                    <Route path="/hot" component={Hot}></Route>
                    <Route path="/search" component={Search}></Route>
                    <Redirect path="*" to="/recommend"></Redirect>
               </Switch>
           </div>
        )
    }
}