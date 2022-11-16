import React, { Component } from 'react'
import MyRouter from "./../../router/MyRouter"
import HomeRouter from "./../../router/HomeRouter"
import NavTop from '../views/NavTop'
export default class Index extends Component {
    render() {
        return (
            <div className="app">
                <div className="fixed">
                    <div className="top">
                        <span className="logo">优音乐</span>
                        <span className="downapp">下载APP</span>
                    </div>
                    <NavTop />
                </div>
                <div className="page">
                    <MyRouter routes={HomeRouter}></MyRouter>
                </div>
                
            </div>
        )
    }
}
