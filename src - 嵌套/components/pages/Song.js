import React from "react"
import querystring from "querystring"
export default class Song extends React.Component{
    componentWillReceiveProps(){
        console.log("切换1")
    }
    componentDidUpdate(){
        console.log("切换2")
    }
    render(){
        //  
        console.log(this.props)

        // 截取字符串，去掉第一个字符 "?", 后续的字符串通过 querystring.parse 转换为 对象
        let query = querystring.parse(this.props.location.search.slice(1))
        return (
            <div>song-{query.songId}</div>
        )
    }
}