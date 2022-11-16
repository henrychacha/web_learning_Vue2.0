##回顾
相同点：依赖数据发生变化，函数都会执行
	
+ watch
	+ 在data
	+ 1对多
	+ 写法



+ computed
	+ 不在data
	+ 返回值
	+ 多对1
	+ 缓存 


+ filter

	全局
	局部
+ transition


##组件

组件是可复用的 Vue 实例，且带有一个名字，可以把这个组件作为自定义元素来使用。

通常一个应用会以一棵嵌套的组件树的形式来组织。

###注册组件：

	
#### 全局组件


 @params1:组件名称

 @params2:组件配置对象


template：组件模板


            组件名称: 1. 可以是驼峰，使用需要写成 - 连接
                      2.名字必须式多单词
	
	        Vue.component("v-item",{
	            template:`
	                <div>全局注册的组件</div>
	                <div>全局注册的组件2</div>
	            `
	        })



#### 局部组件
	
		new Vue({
	            el:"#app",
	            data:{
	               
	            }, 
	            components:{
	                baseTitle:{
	                    template:`
	                        <h2>基本标题</h2>
	                    `
	                }
	            }   
	        });

####使用组件

	<base-title></base-title>
    <v-item></v-item>


####组件的使用问题

+ 1.组件模板必须拥有唯一根元素
+ 2.data 必须是函数带返回值的形式
+ 3.名称的问题
+ 4.props只能单向通信，并且不能修改


##Prop
通过 prop向 子组件传递数据 
Prop 是你可以在组件上注册的一些自定义 attribute。

1.使用子组件的时候传入 自定义属性作为 prop

	<v-item pic="http://www.ujiuye.com/uploadfile/2020/0329/20200329033305219.jpg" 
                :list="[{url:'http://www.baidu.com',title:'baidu'},{url:'http://www.ujiuye.com/',title:'yjiuye'}]"></v-item>

2.定义组件的时候，通过props 属性规定接受的 prop

    Vue.component("v-item",{
        // 指定 id 为box 的template 内的 html 结构作为该组件的模板
        template:"#box" ,
        // 2.使用props 属性 接受 指定的 prop 
        // 数组形式 ，每一个 字符串都是一个prop 的名称，使用起来就行data 一样
        props:["pic","list"],

    })

3.使用props ，向使用data 一样来使用
	
	<template id="box">
        <div class="item">
            <div><img :src="pic" alt=""></div>
            <ul>
                <li v-for="item in list"><a :href="item.url">{{item.title}}</a></li>
            </ul>
        </div>
    </template>


template 标签不会直接被渲染，内部结构可以作为模板
	

props 相关：

	1.单向传递，不能直接修改


    2.验证：

	type 可以是下列原生构造函数中的一个：

		String
		Number
		Boolean
		Array
		Object
		Date
		Function
		Symbol

验证类型：
	

**组件可以的嵌套**

##报错

用驼峰方法使用组件

	[Vue warn]: Unknown custom element: <vbutton> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
	
	(found in <Root>)



组件名是已存在的标签名称

	[Vue warn]: Do not use built-in or reserved HTML elements as component id: button


组件模板template 必须有且拥有唯一根元素


	vue.js:634 [Vue warn]: Error compiling template:

	Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.


组件的data 项必须是函数带返回值的形式

	The "data" option should be a function that returns a per-instance value in component definitions.


不要直接在子组件内修改props:
	
	vue.js:634 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value.

prop验证类型错误：

	Invalid prop: type check failed for prop



##vue-cli

环境安装

+ 安装webpack		

	npm install webpack -g

+ 安装vue-cli脚手架	

	npm install vue-cli -g

创建项目

	vue init webpack 项目名

   项目名首字母不能是大写


   配置项：见 1.jpg

	cd 项目名

启动项目：

	npm run dev



###项目目录


	build  			文件夹：webpack的一些相关配置

	config  			文件夹：项目开发环境和生产环境的一些相关配置
		dev.env.js		文件：开发环境变量
		index.js		文件：项目一些配置变量
		prod.env.js		文件：生产环境变量
		test.env.js		文件：测试环境变量
	
	node_modules  		文件夹 ：这里存放的是webpack、第三方插件库、项目的依赖文件
	
	src  			文件夹：我们将要写的代码放在这里面，打包上线时会进行编译、压缩等
		assets		文件夹：资源目录
		components	文件夹：组件目录
		App.vue		文件：根组件
		main.js		文件：页面入口JS文件
		static 		文件夹：这里存放的是一些静态文件比如图片、css文件、不需要进行压				缩的js文件，打包时这个文件夹将原封不动的放到dist文件夹下面


	.babelrc 		文件：ES6语法编译配置，主要是将ES6转成ES5需要适配哪些浏览器

	.editorconfig 		文件：定义代码格式，对代码的风格进行一个统一。
	
	.gitignore 		文件：git上传需要忽略的文件格式
	
	.postcssrc.js 		文件：postcss配置文件
	
	index.html  		文件：要进行访问的首页面
	
	package-lock.json 	文件：锁定依赖模块和子模块的版本号
	
	package.json 		文件：项目基本信息,包依赖信息等
	
	README.md  		文件：项目说明文件.



##在脚手架中使用组件

1.在components 文件夹中定义 组件文件

	+ template 定义组件模板
	+ script 引入其它文件 暴露组件配置对象
	+ style 定义组件样式

2.在使用组件的地方 （一般是其它组件的script 引入vue 文件），注册为 局部组件

	import MyComponent from "./components/MyComponent"
	console.log(MyComponent)
	
	export  default{
	  name: 'App',
	  components: {
	    // MyCom:MyComponent
	    MyComponent
	  }
	}


3.使用组件

	

	
