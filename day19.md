### 项目


#### 后台相关：

NeteaseCloudMusicApi.zip

解压后 npm i 安装 依赖，执行 node app.js 运行，接口文件在 根目录下docs 文件夹的 READ.md 文件


##### 在public 文件夹下创建了 static 文件夹 ，设置  css img   js 目录，分别存放各种静态资源

index.html 引入 样式重置和 rem 布局的js 文件：


	<!-- <link rel="stylesheet" href="%PUBLIC_URL%/static/css/reset.css"> -->
    <link rel="stylesheet" href="/static/css/reset.css">
    <script src="static/js/rem.js"></script>


##### src 创建assets 文件夹，存放样式文件和 通用js 

api.js ：接口地址管理文件



#### 路由系统

安装 

	npm i --save react-router-dom


index.js

	import {HashRouter} from "react-router-dom"

	ReactDOM.render(
	  <HashRouter>
	    <App />
	  </HashRouter>,
	  document.getElementById('root')
	);



#### 将生成路由系统的 功能封装为一个组件

	import React from "react"

	import { Switch, Route, Redirect } from "react-router-dom"
	
	// 路由组件，接受 props routes ，routes 一个路由配置数组
	class MyRouter extends React.Component {
	    render() {
	        return (
	            <Switch>
	                {
	                    this.props.routes.map((item, index) => {
	                        if (item.path === "*") {
	                            return (
	                                <Redirect key={index} path={item.path} to={item.redirect}></Redirect>
	                            )
	                        } else {
	                            return (
	                                <Route key={index} path={item.path} component={item.component}></Route>
	                            )
	                        }
	
	                    })
	                }
	            </Switch>
	        )
	    }
	}
	
	export default MyRouter


###### 后续生成 以及路由配置文件

IndexRouter.js


	import Play from "./../components/pages/Play"
	import Index from "./../components/pages/Index"
	import SongList from "./../components/pages/SongList"
	
	let routes = [{
	    path: "/play/:id",
	    component: Play
	}, {
	    path: "/songlist/:listid",
	    component: SongList
	}, {
	    path: "/",
	    component: Index
	}];
	
	export default routes


App.js 使用

	import React from 'react';
	import "./assets/css/index.css"
	import MyRouter from "./router/MyRouter"
	import IndexRouter from "./router/IndexRouter"
	function App() {
	  return (
	    <div className="App">
	      <MyRouter routes={IndexRouter}></MyRouter>
	    </div>
	  );
	}
	
	export default App;



#### react  跨域设置


需要使用 一个中间件 http-proxy-middleware

	npm i http-proxy-middleware

在项目 src 目录下 创建 setupProxy.js :(文件名和路径一定要这里一致)

	let proxy = require("http-proxy-middleware");

	module.exports = function(app){
	    app.use(proxy.createProxyMiddleware(
	        //  请求 以 /api 开头的会被代理
	        "/api",
	        {
	            //代理的目标地址
	            target:"http://localhost:4000",
	            // 是否跨域
	            changeOrigin:true,
	            // 在真实请求中移除 /api
	            pathRewrite:{
	                "^/api":"/"
	            }
	        }
	    ))
	}





#### 数据请求

recommend 页面的数据请求

	    // all ：多个 http 并发，需要他们都返回结果后使用
        // all 方法 参数是 都 axios 的promise 对象
        // all 后面的 then 参数 是一个 axios 的 spread 函数执行结果
        // spread  方法的参数是一个 回调函数，所有的请求完成之后调用的回调函数
        // 回调函数的参数就是 各个请求的 res 对象
        this.$http.all([this.getBanner(),this.getPersonalized(),this.getNewSong()])
                  .then(this.$http.spread(
                      (bannerRes,personalizedRes,newSongRes)=>{
                        // console.log(bannerRes,personalizedRes,newSongRes)

                        this.setState({
                            banners:bannerRes.data.bannners,
                            songSheets:personalizedRes.data.result,
                            newSongs:newSongRes.data.result
                        })
        }))



#### 安装轮播插件

	npm install react-awesome-swiper


配置项：

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



组件中使用：


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

	

		


vue 双向绑定[https://segmentfault.com/a/1190000006599500](https://segmentfault.com/a/1190000006599500)