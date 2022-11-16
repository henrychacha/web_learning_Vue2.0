###回顾

组件传值：

1，父子，子向父
2.eventBus
3.ref
4.jq 
5.slot
6.is

#路由 v-router

一、优点
1.良好的交互体验
　　单页应用的内容的改变不需要重新加载整个页面，获取数据也是通过Ajax异步获取，没有页面之间的切换，就不会出现“白屏现象”,也不会出现假死并有“闪烁”现象，页面显示流畅，web应用更具响应性和更令人着迷。

2.良好的前后端工作分离模式
　　后端不再负责模板渲染、输出页面工作，后端API通用化，即同一套后端程序代码，不用修改就可以用于Web界面、手机、平板等多种客户端。

3.减轻服务器压力
　　单页应用相对服务器压力小，服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍。

 

二、缺点
1.首屏加载慢
如果不对路由进行处理，在加载首页的时候，就会将所有组件全部加载，并向服务器请求数据，这必将拖慢加载速度；
通过查看Network，发现整个网站加载试讲长达10几秒，加载时间最长的就是js、css文件和媒体文件及图片
　　解决方案：

Vue-router懒加载
　　　　Vue-router懒加载就是按需加载组件，只有当路由被访问时才会加载对应的组件，而不是在加载首页的时候就加载，项目越大，对首屏加载的速度提升得越明显。

使用CDN加速
　　　　在做项目时，我们会用到很多库，采用cdn加载可以加快加载速度。

异步加载组件
　　　　这里可以参考别人的介绍（https://segmentfault.com/a/1190000012138052）

服务端渲染
　　　　服务端渲染还能对seo优化起到作用，有利于搜索引擎抓取更多有用的信息（如果页面纯前端渲染，搜索引擎抓取到的就只是空页面）

2.不利于SEO
　　seo 本质是一个服务器向另一个服务器发起请求，解析请求内容。但一般来说搜索引擎是不会去执行请求到的js的。也就是说，搜索引擎的基础爬虫的原理就是抓取url，然后获取html源代码并解析。 如果一个单页应用，html在服务器端还没有渲染部分数据数据，在浏览器才渲染出数据，即搜索引擎请求到的html是模型页面而不是最终数据的渲染页面。 这样就很不利于内容被搜索引擎搜索到。

　　解决方案：

服务端渲染
　　　　服务器合成完整的 html 文件再输出到浏览器

页面预渲染
路由采用h5 history模式
3.不适合开发大型项目
　　大型项目中可能会涉及大量的DOM操作、复杂的动画效果，也就不适合使用Vue、react框架进行开发。



##使用步骤

文档地址[https://router.vuejs.org/zh/](https://router.vuejs.org/zh/)

1.下载
	
	npm i vue-router 

2.创建 router/index.js

	配置路由，生成路由器实例并暴露

3.main.js   

	应用生成的路由器实例对象

4.在组件中设置视图出口，App.vue


###基本路由：

	import Vue from "vue"
	import Router from "vue-router"
	import Login from "@/components/Login"
	import Layout from "@/components/Layout"
	Vue.use(Router);
	
	let router = new Router({
	    routes:[{
	        // 路由匹配地址
	        path:"/",
	        name:"index",
	        // 渲染组件，router-view 组件的渲染内容
	        component:Layout
	    },{
	        path:"/login",
	        component:Login
	    }]
	})
	
	export default router

###导航

####声明式导航  用内置组件 router-link 导航

	    <!-- 导航组件  to 导航地址 -->
	    <!-- <ul> 
	      <li><router-link to="/">主页</router-link></li>
	      <li><router-link to="/login">登录页</router-link></li>
	    </ul> -->
	
	    <ul>
	      <li v-for="(item,index) in navs" :key="index" >
	        <router-link :to="item.url">{{item.text}}</router-link>
	      </li>
	      <!-- to 作为动态属性 ，值可以是对象 -->
	      <!-- <li><router-link :to="{name:'index'}">主页</router-link></li> -->
	      <li><router-link :to="{path:'/'}">主页</router-link></li>
	    </ul>

####编程式导航
路由对象下有2个常用的属性，一个是route，一个是router：
+ $route 这里存储的是当前页面路由对象属性，比如 route.query、route.params
+ $router 当前应用的路由器实例，主要导航的方法:


+ router.push()
+ router.replace()
+ router.go() 
+ router.back()
+ router.forward()

		<template>
		    <div>
		        <h2>login</h2>
		        <button @click="toIndex">去主页</button>
		    </div>
		</template>
		<script>
		export default {
		    mounted() {
		        // this.$router  全局路由器实例对象，每一个组件都可以访问到
		        // console.log(this.$router)
		        this.timer = setInterval(()=>{
		            // 编程式导航
		            // 向 history 推入一项新的访问记录，可以返回
		            // this.$router.push("/");
		
		            // 向 history 推入一项新的访问记录，替换当前的访问记录，不可以返回
		            // this.$router.replace("/");
		            // this.$router.replace({path:"/"});
		        },3000);
		    },
		    beforeDestroy() {
		        clearInterval(this.timer)
		    },
		    methods:{
		        toIndex(){
		            // this.$router.replace("/");
		            // 回退或者前进若干个记录
		            this.$router.go(-1);
		        }
		    }
		}
		</script>

###重定向：
路由重定向

在路由配置中，如果没有输入设置好的路由规则时，会出现空白页面，为了避免出现这样的情况，可以通过路由重定向设置默认访问页面或者友好的404页面。

		let router = new Router({
		    routes:[{
		        // 路由匹配地址
		        path:"/",
		        name:"index",
		        // 渲染组件，router-view 组件的渲染内容
		        component:Layout
		    },{
		        path:"/login",
		        component:Login
		    },{
		        path:"*",
		        redirect:"/"
		    }]
		})


###模式

vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。

		let router = new Router({
		    // 默认是hash 模式
		    mode:"hash",
		    // mode:"history",
		    routes:[{
		        // 路由匹配地址
		        path:"/",
		        name:"index",
		        // 渲染组件，router-view 组件的渲染内容
		        component:Layout
		    },{
		        path:"/login",
		        component:Login
		    },{
		        path:"*",
		        redirect:"/"
		    }]
		})
		
		export default router


不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。

所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

###动态路由

设置：

	let router = new Router({
	    // 默认是hash 模式
	    mode:"hash",
	    // mode:"history",
	    routes:[{
	        // 路由匹配地址
	        path:"/",
	        name:"index",
	        // 渲染组件，router-view 组件的渲染内容
	        component:Layout
	    },{
	        path:"/login",
	        component:Login
	    },{
	        path:"/product/:pid",
	        component:Product
	    },{
	        path:"*",
	        redirect:"/"
	    }]
	})
	

获取动态路由参数：

	<template>
	    <div>
	        product-{{$route.params.pid}}
	    </div>
	</template>
	<script>
	export default {
	    mounted() {
	        // console.log(this.$route.params.pid)
	
	        // $.ajax("",)
	    },
	}
	</script>


###嵌套路由

配置文件 router/index.js

在一个路由配置对象中添加 children 属性

	let router = new Router({
	    // 默认是hash 模式
	    mode:"hash",
	    routes:[{
	        // 路由匹配地址
	        path:"/login",
	        name:"login",
	        // 渲染组件，router-view 组件的渲染内容
	        component:Login
	    },{
	        path:"/",
	        component:Layout,
	        children:[{
	                path:"",
	                // 渲染组件，router-view 组件的渲染内容
	                component:Home
	        },{
	                path:"role",
	                // 渲染组件，router-view 组件的渲染内容
	                component:Role,
	        }]
	    },{
	        path:"*",
	        component:NotFound
	    }]
	})


记得在上一级路由的渲染组件中 添加视图出口

Layout 组件中

		
	<template>
	    <div class="wrapper">
	        
	        
	        <ul style="width:300px;">
	            <li><router-link to="/">首页</router-link></li>
	            <li><router-link to="/role">role</router-link></li>
	        </ul>
	        <div>
	            <h2>layout</h2>
	            <router-view></router-view>
	        </div>
	    </div>
	</template>
	<script>
	export default {
	    
	}
	</script>
	<style lang="">
	    .wrapper{
	        display: flex;
	    }
	</style>

###命名路由
定义

	{
        path:"/product/:pid",
        name:"product",
        component:Product
    }


使用：

    <!-- 动态的路由传参，需要使用命名路由 -->
    <router-link :to="{
      name:'product',
      params:{
        pid:123
    }}">123</router-link>
    <router-link :to="{
      path:'/home',
      query:{
        a:123
    }}">query-home:123</router-link>
    <router-link to="/product/345">345</router-link>


####命名视图




####别名




###导航守卫

提供的导航守卫主要用来通过跳转或取消的方式守卫导航

+ 全局导航守卫

+ 路由独享守卫

+ 组件内的守卫

	+ beforeRouteLeave


完整导航流程

完整的导航解析流程

- 1. 导航被触发。
- 2. 在失活的组件里调用 beforeRouteLeave 守卫。
- 3. 调用全局的 beforeEach 守卫。
- 4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
- 5. 在路由配置里调用 beforeEnter。
- 6. 解析异步路由组件。
- 7. 在被激活的组件里调用 beforeRouteEnter。
- 8. 调用全局的 beforeResolve 守卫 (2.5+)。
- 9. 导航被确认。
- 10. 调用全局的 afterEach 钩子。
- 11. 触发 DOM 更新。
- 12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。






## Maximum call stack size exceeded
  
   死循环


	

