import React, { Component } from 'react'
import '../../assets/css/play.css'
import $ from 'jquery'
import  apis from "./../../assets/js/apis"


// let str = "1234";

// console.log(str.padStart(5,"xy"));// xy123

export default class Play extends Component {
    state = {
        // 歌曲地址
        songurl: '',
        // 歌曲封面
        songimg: '',
        // 歌曲名称
        songname: '',
        // 歌手
        singer: '',
        // 歌词
        lyrics: '',
        // 播放时间
        playtime: '00:00'
    }
    // 获取歌曲信息
    getSongInfo() {
        return this.$http({ url: apis.songDetail + '?ids=' + this.props.match.params.sid });
    }
    // 获取歌词信息
    getSongLyric() {
        return this.$http({ url: apis.songLyric + '?id=' + this.props.match.params.sid });
    }
    componentDidMount() {
        this.$http.all([this.getSongInfo(), this.getSongLyric()]).then(
            this.$http.spread((infoRes, lyricRes) => {
                // console.log(lyricRes.data.lrc.lyric)
                let lyrics = this.getLyric(lyricRes.data.lrc.lyric);
                this.setState({
                    // 播放歌曲的地址 手动添加一个前缀
                    songurl: 'https://music.163.com/song/media/outer/url?id=' + this.props.match.params.sid + '.mp3',
                    songimg: infoRes.data.songs[0].al.picUrl,
                    songname: infoRes.data.songs[0].name,
                    singer: infoRes.data.songs[0].ar[0].name,
                    lyrics
                });
            })
        )
    }
    // 转化歌词的方法
    getLyric(str) {
        // 歌词对象 ，容器
        let obj = {};
        //正则表达式
        let reg = /\[(.*)](.*)/g;

        //  replace 第二个参数是一个回调函数， reg 没匹配一次都会执行的回调函数
        str.replace(reg, (a, b, c) => {
            //  参数 a 是匹配字符串
            //  参数 b 第一个分组 就是 第一个() 匹配的内容
            //  参数 c 第一个分组 就是 第二个() 匹配的内容
            // console.log(a)
            // console.log(b)
            // console.log(c)
            // 去除事件中 的 毫秒部分
            b = b.slice(0, 5);
            // 空对象key 变成当前歌词时间， value 对应时间的歌词
            obj[b] = c;
        });
        // console.log(obj)
        return obj;
    }
    transTime(time) {
        //  获取分钟 ：进行补 0 操作
        let minute = (Math.floor(time / 60) + "").padStart(2, "0");
        //  获取 秒数
        let second = (Math.floor(time % 60) + "").padStart(2, "0");
        return `${minute}:${second}`;
    }
    // 播放音乐的方法
    playMusic() {
        // 获取音频标签
        let audio = this.refs.myaudio;
        // 判断当前 播放是否是暂停状态
        if (audio.paused) {
            // 音频标签 播放
            audio.play();
            // 播放 图标 隐藏
            this.refs.icon.style.display = 'none';
            // 封面图片 获取 活跃样式 
            this.refs.songimg.className = 'songimg songmove';

            // 播放画笔 过渡 效果
            this.refs.playtop.style.transform = 'rotate(0deg)'

            // 音频播放时间更新的监听函数
            audio.ontimeupdate = () => {
                // console.log(audio.currentTime)

                //  格式化 当前播放时间， 后续方便使用
                let nowtime = this.transTime(audio.currentTime);
                if (nowtime in this.state.lyrics) {
                    this.setState({
                        // 播放设置为 当前 歌曲播放时间
                        playtime: nowtime
                    }, () => {
                        this.moveLyric();
                    })
                }
            }
        } else {
            audio.pause();
            this.refs.icon.style.display = 'block';
            this.refs.songimg.className = 'songimg songstop'
            this.refs.playtop.style.transform = 'rotate(-15deg)'
        }
    }
    // 歌词移动的函数
    moveLyric() {
        //  获取 播放到当前歌词的 元素
        let active = document.getElementsByClassName("active")[0];
        // 获取当前正在播放歌词的下标
        let index = $(".lyric_box").children().index(active);
        // 每一行的高度
        let offset = 0.6;

        // 当活跃样式 歌词这一行存在
        if (active) {
            //
            if (active.offsetTop > offset) {
                //  根据当前是第几行的歌词 索引index，歌词容器 向上移动的距离
                $('.lyric_box').css('transform', `translateY(-${index * offset}rem)`)
            }
        }
    }
    
    render() {
        console.log(Object.entries(this.state.lyrics))
        return (
            <div className="play">
                {/* 音频标签 */}
                <audio src={this.state.songurl} ref="myaudio"></audio>
                {/* 返回 */}
                <div className="back" onClick={() => this.props.history.goBack()}></div>
                {/* 歌曲封面和 播放控制 */}
                <div className="disc">
                    {/* 滑动手臂 */}
                    <img className="playtop" ref="playtop" src="/static/img/needle-ip6.png" alt="" />
                    {/* 封面图片 */}
                    <div className="discbox"  onClick={() => this.playMusic()}>
                        {/* 图片 */}
                        <img className="songimg" ref="songimg" src={this.state.songimg} alt="" />
                        {/* 显示播放状态的图片 */}
                        <i className="icon" ref="icon" ></i>
                    </div>
                </div>
                {/* 歌词区域 */}
                <div className="songlyric">
                    {/*歌曲信息  */}
                    <div className="title">{this.state.songname}- {this.state.singer}</div>
                    {/* 滚动歌词区域 */}
                    <div className="lyric">
                        <div className="lyric_box">
                            {/* Object.entries 将对象转化为二维数组的方法 */}
                            {
                                Object.entries(this.state.lyrics).map((item, index) => {
                                    // item[0]：当前的播放时间 ，如果 当前的播放时间 和 歌词显示时间匹配，是当前歌词获取活跃样式
                                    if (this.state.playtime === item[0]) {
                                        return (
                                            // item[1] 当前时间的歌词
                                            <p key={index} className="active">{item[1]}</p>
                                        )
                                    } else {
                                        return (
                                            <p key={index}>{item[1]}</p>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}