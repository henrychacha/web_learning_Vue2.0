import React, { Component } from 'react'
//AwesomeSwiper 轮播
import AwesomeSwiper from 'react-awesome-swiper';
import '../../assets/css/recommend.css'
import  apis from "./../../assets/js/apis"


// console.log(apis)
let banner = apis.banner;

let personalized = apis.personalized;

let newSong = apis.newSong;
console.log( banner,personalized,newSong)


//轮播配置对象  配置对象
const config = {
    // 开启循环
    loop: true,
    // 自动播放相关的 配置
    autoplay: {
        //轮播间隔时间
        delay: 3000, 
        //是否在最后一张停止
        stopOnLastSlide: false,
        // 自动播放过程中禁止操作
        disableOnInteraction: true,
    },
    // 预加载图片
    preloadImages: false,
    // 懒加载
    lazy: true,
    // 自动切换花费时间
    speed: 1000,
    // 导航按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        bulletElement: 'li',
        hideOnClick: true,
        //  分页器是否可以点击导航
        clickable: true,
    }
};
export default class Recommend extends Component {
    state = {
        banners: [],
        songSheets: [],
        newSongs: []
    }
    // 获取 轮播
    getBanner() {
        return this.$http({ url: banner });
    }
    // 获取 推荐列表
    getPersonalized() {
        return this.$http({ url: personalized });
    }
    // 获取新歌
    getNewSong() {
        return this.$http({ url: newSong })
    }
    // 在这里开始生命周期请求
    componentDidMount() {

        // all ：多个 http 并发，需要他们都返回结果后使用
        // all 方法 参数是 都 axios 的promise 对象
        // all 后面的 then 参数 是一个 axios 的 spread 函数执行结果
        // spread  方法的参数是一个 回调函数，所有的请求完成之后调用的回调函数
        // 回调函数的参数就是 各个请求的 res 对象
        this.$http.all([this.getBanner  (),this.getPersonalized(),this.getNewSong()])
                  .then(this.$http.spread(
                      (bannerRes,personalizedRes,newSongRes)=>{
                        console.log(newSongRes)

                        this.setState({
                            banners:bannerRes.data.banners,
                            songSheets:personalizedRes.data.result,
                            newSongs:newSongRes.data.result
                        })
        }))
    }
    toList(id){
        this.props.history.push('/songlist/'+id)
    }
    toPlay(id){
        this.props.history.push('/play/'+id)
    }
    render() {
        return (
            <div className="recommend">
                {/* 推荐页 */}
                {/* 
                
                    轮播：所有类名必须使用当前类名
                    config : 配置对象

                */}
                <AwesomeSwiper config={config} className="swiper">
                    {/* 轮播项 */}
                    <div className="swiper-wrapper">
                        {
                            this.state.banners.map((item, index) => {
                                return (
                                    <div key={index} className="swiper-slide">
                                        <img src={item.imageUrl} alt="" />
                                    </div>
                                    // div key ={index} className="swiper-slide">
                                        // <img src ={item.imageUrl} alt="" />
                                        // </div>
                                )
                            })
                        }

                    </div>
                    {/* 前进后退 */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    {/* 分页器 */}
                    <div className="swiper-pagination"></div>
                </AwesomeSwiper>
                <div className="wrapper">
                    <h2>推荐歌单</h2>
                    <div className="sheetlist">
                        {
                            this.state.songSheets.map(d => {
                                return (
                                    <div className="item" key={d.id} onClick={ ()=>this.toList(d.id) }>
                                        <div className="img">
                                            <img src={d.picUrl} alt={d.name} />
                                            <span></span>
                                        </div>
                                        <p className="title">{d.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="wrapper">
                    <h2>最新音乐</h2>
                    <div className="songlist">
                        {/* 最新音乐列表 */}
                        {
                            this.state.newSongs.map(d => {
                                return (
                                    <div className="item" key={d.id} onClick={()=>this.toPlay(d.id)}>
                                        <div className="info">
                                            <div className="song">
                                                {d.name}
                                                {/* 歌曲名称泪飙 */}
                                                {
                                                    d.song.alias.map((item, index) => {
                                                        return (
                                                            <span key={index}>{item}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="singer">
                                                <i className="icon"></i>
                                                {/* 歌手列表 */}
                                                {
                                                    d.song.artists.map((item, index) => {
                                                        let sep = d.song.artists.length > 1 && index !== (d.song.artists.length - 1) ? <i> / </i> : null;
                                                        return (
                                                            <span key={index}>{item.name}
                                                                {sep}
                                                            </span>
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
            </div>
        )
    }
}
