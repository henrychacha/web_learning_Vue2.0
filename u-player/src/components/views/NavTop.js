import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/nav.css'
export default class NavTop extends Component {
    render() {
        return (
            <div className="nav">
                <NavLink to="/recommend">
                    <span className="txt">推荐</span>
                </NavLink>
                <NavLink to="/hot">
                    <span className="txt">热歌榜</span>
                </NavLink>
                <NavLink to="/search">
                    <span className="txt">搜索</span>
                </NavLink>
            </div>
        )
    }
}
