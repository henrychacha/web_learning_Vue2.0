import React, { Component } from 'react'
import '../../assets/css/songlist.css'
import  apis from "./../../assets/js/apis"
export default class Hot extends Component {
    state = {
        // 更新时间
        updateTime: '',
        //专辑封面
        coverImg: '',
        // 歌单名称
        name: '',
        // 歌曲列表
        songs: [],
        // 标签
        tags:[]
    }
    componentDidMount() {
        // 歌单页面和热搜页面的结构是一样
        // 如果  拥有动态路由参数，说明 是歌单页面，没有动态路由参数说明是 热搜页面
        let url = this.props.match.params.gid ? apis.songList + '?id=' + this.props.match.params.gid : apis.topList + "?idx=1";
        //
        this.$http({ url }).then(res => {
            let date = new Date(res.data.playlist.updateTime);
            let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
            let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
            let time = `${month}月${day}日`
            this.setState({
                updateTime: time,
                coverImg: res.data.playlist.coverImgUrl,
                name: res.data.playlist.name,
                songs: res.data.playlist.tracks
            })

        })
    }
    // 跳转到播放页面
    toPlay(id) {
        this.props.history.push('/play/' + id)
    }
    render() {
        // 根据组件使用途径不同 ，生成不同的页面结构
        let picitem;
        let backbtn;

        //  歌单
        if (this.props.match.params.gid) {
            picitem = (
                <div className="pic">
                    <img src={this.state.coverImg} alt="" />
                    <div className="desc">{this.state.name}</div>
                </div>
            );
            // 回退按钮
            backbtn = (
                <div className="back" onClick={() => this.props.history.goBack()}></div>
            )
        } else {
            //热搜页面
            picitem = (
                <div className="pic">
                    <div className="cloud"></div>
                    <p className="date">更新日期：{this.state.updateTime}</p>
                </div>
            );
        }

        return (
            <div className="hot">
                
                {backbtn}
                <div className="banner">
                    {/* 蒙版层   filter ；滤镜*/}
                    <div className="mask" style={{ background: 'url(' + this.state.coverImg + ')' }}></div>
                    {picitem}
                </div>
                <div className="songlist">
                    {
                        this.state.songs.map((d, i) => {
                            // 歌曲列表
                            return (
                                <div className="item" key={d.id} onClick={() => this.toPlay(d.id)}>
                                    <div className="left">{(i + 1) > 9 ? i + 1 : '0' + (i + 1)}</div>
                                    <div className="middle">
                                        <div className="song">
                                            {d.name}
                                            {d.alia.length ? '(' + d.alia[0] + ')' : ''}
                                        </div>
                                        <div className="singer">
                                            <i className="icon"></i>
                                            {
                                                d.ar.map((item, index) => {
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
