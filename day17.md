###回顾


####组件通信


####父传子

自定义属性

####子传父

子组件调用父组件的方法，需要传入的值作为函数的参数


##react路由

文档地址 [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)


####使用路由

安装

	npm install react-router-dom --save



####基本使用


1.在 index.js 中，引入路由系统容器，将根组件包裹

	import {BrowserRouter} from "react-router-dom"
	// 应用受到前端路由系统控制
	
	// BrowserRouter 启用 history 模式
	// HashRouter  启用hash 模式
	ReactDOM.render(
	  <BrowserRouter> 
	    <App />
	  </BrowserRouter> ,
	  document.getElementById('root')
	);


2.路由配置

设置Switch 容器，使用 Route 配置路由

	import {Switch,Route,Redirect} from "react-router-dom"

	<Switch>
          {/* route 组件用来设置路由
              path: 路由地址
              component: 渲染组件

              route 组件默认的匹配机制是模糊匹配
              "/about"  被认为和 "/" 匹配

              可以通过设置 exact 来 进行精准匹配

              匹配顺序是自上而下，上面匹配到了，下面就不会继续匹配
          
          */}

          {/* 1.使用exact 解决根地址问题 */}
          {/* <Route path="/"  exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route> */}

          
          {/* 2.利用匹配机制，自上而下先匹配其它路径 */}
          {/* <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Home}></Route> */}


          {/* 3.利用重定向来 解决 */}
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          {/* <Route path="/login" component={Login}></Route> */}


          {/* 渲染向路由组件传入props , 必须使用 render 写法
              route ： 路由参数对象
          */}
          <Route path="/login" render={(route)=>{
            console.log(route)
            return (<Login count={1}></Login>)
          }}></Route>
          <Redirect from="*" to="/home"></Redirect>

          {/* <Route exact path="/">
            {loggedIn ? <Redirect to="/home" /> : <Login />}
          </Route> */}
        </Switch>
	

####重定向


		{/* 重定向组件：
	        path || from : 定义 重定向匹配地址
	        to : 重定向的目的地址
	  	*/}
	  	<Redirect from="*" to="/home"></Redirect>



###动态路由

设置

	 {/* : 代表这是动态路由 */}
     <Route path="/songlist/:listId" component={SongList}></Route>



获取动态路由参数


	 <div>SongList-{this.props.match.params.listId}</div>



###其它路由传参 （页面传值）


1.使用 query 字符串: 使用比较麻烦


导航：

	<p>
      <Link to="/song?songId=666">/song?songId=666</Link>
      <Link to="/song?songId=888">/song?songId=888</Link>
    </p>


路由：
        
	<Route path="/song" component={Song}></Route>
	

获取数据：

	    // 截取字符串，去掉第一个字符 "?", 后续的字符串通过 querystring.parse 转换为 对象
        let query = querystring.parse(this.props.location.search.slice(1))
        return (
            <div>song-{query.songId}</div>
        )


2.使用state ： 数据不显示在地址栏，必须从其它页面切换才会 更新 state,(复用组件不会更新state)

导航：

	<Link to={{pathname:"/play",state:{
             playId:111
          }}}>playId:111</Link>


路由

	<Route path="/play" component={Play}></Route>


获取数据：

	    if(this.props.location.state){
            console.log(this.props.location.state.playId)
        }


####嵌套路由

1.在app 中设置一级路由
2.在一级路由中 设置二级路由， 二级路由设置方法和以及路由完全一致


*嵌套路由不要给一级路由添加 exact  *


###编程式导航

    this.props.history.push(`/play/${item.songId}`);
    // this.props.history.replace(`/play/${item.songId}`);


###antd

antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级后台产品
官网；https://ant-design.gitee.io/docs/react/introduce-cn
特性：
       - 提炼自企业级中后台产品的交互语言和视觉风格
       - 开箱即用的高质量 React 组件
       - 使用 TypeScript 构建，提供完整的类型定义文件
       - 全链路开发和设计工具体系


1.安装


	npm i antd --save


2.使用 引入全局样式

App.css 头部，~ 代表 node_modules 目录

	@import '~antd/dist/antd.css';

3.使用组件

	import { Button } from 'antd';
	function App() {
	  return (
	    <div className="App">
	      <Button>antd 组件</Button>
	    </div>
	  );
	}

####图标使用

单独下载一个包

	npm i @ant-design/icons --save

使用


	import {StepForwardOutlined} from "@ant-design/icons"
	function App() {
	  return (
	    <div className="App">
	      <Button>antd 组件</Button>
	      <StepForwardOutlined />
	    </div>
	  );
	}




