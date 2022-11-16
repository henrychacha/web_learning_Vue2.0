import React from "react"

export default class SongList extends React.Component{
    render(){
        //  默认路由组件会将 当前页面路由对象作为 props 传入
        console.log(this.props)
        return (
            <div>SongList-{this.props.match.params.listId}</div>
        )
    }
}