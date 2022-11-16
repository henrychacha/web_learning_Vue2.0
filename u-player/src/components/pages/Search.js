import React, { Component } from 'react'
import '../../assets/css/search.css'
import apis from "./../../assets/js/apis"
export default class Search extends Component {
    state = {
        //  热门歌曲
        hots: [],
        // 搜素结果
        songs: [],
        // input 输入内容
        val: ''
    }
    componentDidMount() {
        this.$http({
            url: apis.searchHot
        }).then(res => {
            this.setState({
                hots: res.data.result.hots
            })
        })
    }
    // 
    setIpt(str) {
        this.setState({
            val: str
        })
    }
    // onChange 事件的事件处理函数
    changeIpt(e) {
        let data = {
            val: e.target.value
        };
        if (e.target.value === '') {
            data.songs = []
        }
        this.setState(data)
    }
    // 搜素
    searchSong(e) {
        if (e.keyCode === 13) {
            this.$http({
                url: apis.search,
                params: { keywords: this.state.val }
            }).then(res => {
                if (res.data.result.songCount > 0) {
                    this.setState({
                        songs: res.data.result.songs
                    })
                }
            })
        }
    }
    // 跳转到播放页
    toPlay(id) {
        this.props.history.push('/play/' + id)
    }
    render() {
        return (
            <div className="search">
                <div className="ipt">
                    <i className="icon"></i>
                    <input type="text" placeholder="请输入关键词"
                        value={this.state.val}
                        onChange={(e) => this.changeIpt(e)}
                        onKeyUp={(e) => this.searchSong(e)}
                        maxLength="10"
                    />
                    <div className="clear">
                        <i></i>
                    </div>
                </div>
                {/* 热搜词 */}
                <div className="searchhot" style={{ display: this.state.val === "" ? 'block' : 'none' }}>
                    {
                        this.state.hots.map((item, index) => {
                            return (
                                <span key={index} onClick={() => this.setIpt(item.first)}>{item.first}</span>
                            )
                        })
                    }
                </div>
                {/* 歌曲列表 */}
                <div className="songlist" style={{ display: this.state.songs.length > 0 && this.state.val !== '' ? 'block' : 'none' }}>
                    {
                        this.state.songs.map((d, i) => {
                            return (
                                <div className="item" key={d.id} onClick={() => this.toPlay(d.id)}>
                                    <div className="left">{(i + 1) > 9 ? i + 1 : '0' + (i + 1)}</div>
                                    <div className="middle">
                                        <div className="song">
                                            {d.name}
                                            {d.alias.length ? '(' + d.alias[0] + ')' : ''}
                                        </div>
                                        <div className="singer">
                                            <i className="icon"></i>
                                            {
                                                d.artists.map((item, index) => {
                                                    return (
                                                        <span key={index}>{item.name}</span>
                                                    )
                                                })
                                            }
                                            - {d.name}
                                        </div>
                                    </div>
                                    <div className="right">
                                        <span></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
