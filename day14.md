## 什么是React
    
+ React 是一个用于构建用户界面的 JAVASCRIPT 库
+  React 主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）
+ React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源 

 
###二、React优缺点
    
优点：

- 		React 是虚拟DOM，速度很快
- 		跨浏览器兼容
- 		组件化开发
- 		单项数据流
- 		JSX语法
    
缺点：
		
+		不是完整的MVC，不适合开发大型项目
 

### 使用 react


1.引入 文件，引入顺序不可以错

	<!-- 核心库 -->
    <script src="./react.development.js"></script>
    <!-- DOM 操作相关，和虚拟dom 相关 -->
    <script src="./react-dom.development.min.js"></script>


 2.创建容器 

    <div id="app"></div>



3.创建节点并渲染

    <script>
        // 创建了一个 虚拟DOM
        // params1: 标签名
        // params2: 属性
        // params3: 内部html 结构
        let el = React.createElement("h1",{className:"box",id:"xyz"},"hello react");
        console.log(el);
    

        // 3.将虚拟DOM渲染到页面中

        //  params1: 虚拟DOM 节点
        //  params2:挂载元素
        ReactDOM.render(el,document.getElementById("app"));
    </script>


### JSX语法
    React 使用 JSX 来替代常规的 JavaScript
    JSX 是一个看起来很像 XML 的 JavaScript 语法扩展

JSX是 js 的语法糖，允许 js 和html 混写

####为什么使用 jsx

- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化
- 它是类型安全的，在编译过程中就能发现错误
- 使用 JSX 编写模板更加简单快速


### 使用jsx

	 1.引入文件 
	    <!-- 核心库 -->
	    <script src="./react.development.js"></script>
	    <!-- DOM 操作相关，和虚拟dom 相关 -->
	    <script src="./react-dom.development.min.js"></script>
	    <!--  转义jsx 语法 -->
	    <script src="./babel.min.js"></script>
	</head>
	<body>
	    <!-- 2.创建容器 -->
	
	    <div id="app"></div>
	
	
	    <script type="text/babel">
	    //  type text/babel 声明内部使用的是jsx 语法
	
	
	        let el = <h1 id="box"><span>内部的span</span></h1>;
	        console.log(el);
	
	        // 3.将虚拟DOM渲染到页面中
	        ReactDOM.render(el,document.getElementById("app"));
	    </script>
	</body>


#### 1.数据的使用

大括号中除了对向外所有的数据类型，boolen 和 number 作为字符串渲染，
undefined,null,作为 控制，不被渲染

数组的话会被自动展开：


对象需要读取对象属性

	let str = "内部的span";

        // 建议 （） 包裹 html
        // {} 内部就是 js 环境


        // 数组自动展开
        let arr = ["tom","jack"];

        //  数组成员可以是标签
        let arr1 = [<i>斜体</i>,<b>粗体</b>]


        // 对象不可以直接渲染，但是获取属性来渲染
        let stu = {
            name:"xujiang",
            age:22
        }
        let el = (<h1 id="box">
            <span>{str}</span>
            <span>{arr}</span>
            <span>{arr1}</span>
            <span>{stu.name}</span>
            <span>{null}</span>
            <span>{true}</span>
            <span>{undefined}</span>
            <span>{100}</span>
        </h1>);

*函数*

		function add(){
            return 1+1;
        }
		//可以返回标签
        function abc(){
            return (
                <i>abc</i>
            )
        }
        
        // 执行函数
        let el = (<h1 id="box">
            <span>{add()}</span>
            <span>{abc()}</span>
        </h1>);
        console.log(el);


#### 可以正常使用运算符


	    // 使用运算符
        let flag = true;

        // 执行函数
        let el = (<h1 id="box">
            <span>{1+1}</span>
            <span>{flag&&<i>show</i>}</span>

            <span>{flag?<i>show</i>:null}</span>
        </h1>);



### 流程控制，不能在{}写流程控制，可以写在函数中通过执行函数来实现

#### 条件渲染


+ 逻辑运算
+ 三目运算
+ 函数写法

	    let score = 90;

        /* function  showScore(){
            if(score>=90){
                return <i>优秀</i>
            }else if(score>70){
                return <i>良好</i>
            }else if(score>60){
                return <i>合格</i>
            }else{
                return <i>不合格</i>
            }
        } */

        function showScore() {
            let el = null;
            if (score >= 90) {
                el = <i>优秀</i>
            } else if (score > 70) {
                el = <i>良好</i>
            } else if (score > 60) {
                el = <i>合格</i>
            } else {
                el = <i>不合格</i>
            }
            return el;
        }

        // 使用运算符
        let flag = true;

        // 执行函数

        // {} 不允许写流程控制
        let el = (<h1 id="box">
            <span>{1 + 1}</span>
            <span>{flag && <i>show</i>}</span>
            <span>{flag ? <i>show</i> : null}</span>
            <span>{showScore()}</span>
        </h1>);
        console.log(el);



### 列表渲染：

	    let stus = [{
            name:"chaobo",
            age:19
        },{
            name:"xinhua",
            age:20
        }]
        
        // 使用 数组的map 方法来进行列表渲染，
        // 返回值就是列表项的结构
        // 记得加上唯一 key

        // let arr = [<li>chaobo-19</li>,<li>xinhua-20</li>]

        let el = (<h1 id="box">
            <ul>
                {stus.map((item,index)=>{
                    return (
                        <li key={index}>
                            <i>{item.name}</i>
                            -
                            <b>{item.age}</b>
                        </li>
                    )
                })}
            </ul>
        </h1>);
        console.log(el);


#### 属性写法

动态style  值需要写成对象的形式

对象属性 是属性名 ，值就是属性值,属性名是驼峰写法

带"12px" 这种样式 可以写成 12


        let ft = 12

        // 样式对象
        let objSty = {
            color:"red"
        }
        let el = (<h1 id="box">
            <img src={imgUrl} alt="" />
            <p style={objSty}>另一种写法</p>
            <div>
                {
                    webs.map((item,i)=>{
                        return(
                            <p key={i}><a  
                                style = {{fontSize:ft}}
                                href={item.url}>
                                {item.title}</a>
                            </p>
                        )
                    })
                }
            </div>
        </h1>);


#jsx
#### jsx 的相关注意点

+ 遇到 <> 作为html 来解析，html部分建议写在(), 遇到 {},内部作为js 环境解析
+ JSX 可以嵌套
+ Jsx 代码的元素必须拥有唯一根元素
+ 列表项添加 唯一 key 属性
+ 所有标签需要闭合

## create-react-app

全局安装

	sudo cnpm install -g create-react-app

创建项目：

	create-react-app 项目名
	

开启项目

	cd 项目名
	npm start


#### 项目目录

- node_modules    核心模块
- src             项目源码
  - index.js    主入口文件 /index.css  全局css样式
  - App.js  根组件模板 
  - App.css 根组件样式
  - App.test.js  根组件测试
  - serviceWorker.js  离线访问服务
  - index.js  项目入口
  - index.css 全局样式
- public
   - index.html   页面主入口
   - manifest.json  页面配置文件
- .gitignore  忽略文件配置
- package.json  npm配置
- README.md  项目说明文件 


#### 创建组件

在src 下面的 新建 components

新建组件文件,组件文件命名是大驼峰写法

1.函数式组件
	
	// 创建静态组件（函数式组件）

	// 引入核心
	import React from "react"
	
	// 创建组件 行数名称就是组件名
	// 函数返回值就是 组件 的模板
	function ComponentA(){
	    return(
	        <div>函数式组件 ComponetA</div>
	    )
	}
	
	// 暴露组件
	export default ComponentA

使用组件：

		// 引入组件
		import ComponentA from "./components/ComponentA"
		
		function App() {
		  return (
		    <div className="App">
		      hello React
		      {/* 作为自定义标签使用组件 */}
		      <ComponentA></ComponentA>
		    </div>
		  );
		}

##### 样式相关

定义样式文件

在js 中引入

	// 引入组件样式文件
	import "./ComponentA.css"

### 类组件

	import React from "react"

	// 类名就是组件名
	class ComponentB extends React.Component{
	
	    // 组件模板是render 方法的返回值
	    render(){
	        return(
	            <div>类组件 ComponentB</div>
	        )
	    }
	}
	
	
	export default ComponentB



###yarn

安装

	npm i -g yarn

设置淘宝镜像


	yarn config set registry https://registry.npm.taobao.org/


使用yarn下载脚手架

	yarn add global create-react-app

创建项目


	yarn create react-app 项目名




##报错
	
列表项需要拥有唯一key
	
 		Each child in a list should have a unique "key" prop.

	


	

