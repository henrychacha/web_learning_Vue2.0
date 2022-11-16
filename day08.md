###vue-router

routes

基本使用

嵌套路由

重定向

动态路由

导航


命名路由

命名视图

模式


导航守卫

##stylus


Stylus是一个CSS预处理器。富于表现力、动态的、健壮的 CSS。它具有以下特性：

- 冒号/分号/逗号/括号 可有可无
- 变量、插值（Interpolation）、混合（Mixin）
- 数学计算、强制类型转换
- 动态引入、条件表达式、迭代
- 嵌套选择器、父级引用
- Variable function calls
- 词法作用域
- 内置函数（超过 60 个）、语法内函数（In-language functions）
- 压缩/图像内联可选
- Stylus 可执行程序
- 健壮的错误报告
- 单行和多行注释
- CSS 字面量
- 字符转义
- TextMate 捆绑

###安装

1. npm i stylus stylus-loader -D
2. style 添加 lang="stylus"

	<style lang="stylus">
	.hello
	 color skyblue
	
	  
	</style>


less 使用步骤类似

 	npm i less less-loader@5.0.0 -D

打开build/webpack.base.conf.js，在module.exports 对象中添加依赖
复制代码
   
	module.exports = {

    	module: {

        	rules: [

            {

                test: /\.less$/,

                loader: "style-loader!css-loader!less-loader"    

            }

        ]


	<style lang="less">

###变量

	// 变量声明 建议以$开头
	$ft = 30px
	$ft1 = 50px
	$bg = skyblue

###函数

	box($w $h)
	  width $w
	  height $h
	  background-color  pink


###插值
//如果需要在样式名的位置 使用 变量或者是 参数，需要使用 {}包裹
	
	vender($prop $arg)
	  -webkit-{$prop} $arg
	  -moz-{$prop} $arg
	  {$prop} $arg

###条件判断

	// margin-only 默认值是 false
	box2(x,y,margin-only=false)
	  if margin-only
	      margin x y
	  else
	      padding x y



###嵌套

	// & 指代的是当前选择器
	.hello
	  color $bg
	  font-size $ft+$ft1
	  &:hover
	    color pink
	  .inner
	    box(50px,50px)
	    box2(10px,5px,true)
	    vender(border-radius,10px)


###迭代

	// for item in 1 2 3 4
	//   .wrap{item} 
	//      width item*10px
	
	for item in (5..10)
		.wrap{item} 
			width item*10px


##Vuex

文档地址：[https://vuex.vuejs.org/zh/](https://vuex.vuejs.org/zh/)

一、什么是Vuex
    
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
	集中式状态管理，可预期的对状态进行改变
	状态就是数据

二、vuex 解决的是什么问题？
       
一个 vue 项目是由若干个组件组合而成的，复杂的组件关系中，数据如何来管理，以前用 eventbus 来解决，现在官方推出了 vuex ，我们用 vuex 来解决它


###Vuex 使用 步骤

项目目录下：
	
1.安装

	npm i vuex

2.在 src 创建store 文件夹 index.js

	import Vue from "vue"
	import Vuex from "vuex"
	
	Vue.use(Vuex);
	
	// store 全局的唯一数据源（仓库）
	let store = new Vuex.Store({
	    state:{
	        count:1
	    }
	})
	
	export default store;


3.在main.js 中

	import store from "./store"
	new Vue({
	  el: '#app',
	  store,
	  components: { App },
	  template: '<App/>'
	})
	
4.组件内使用状态，定义为一个组件的计算属性的返回值

	  computed: {
	    count(){
	      return this.$store.state.count;
	    }
	  }


###state

Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。

单状态树和模块化并不冲突——在后面的章节里我们会讨论如何将状态和状态变更事件分布到各个子模块中。

####定义在state 中
	
	    state:{
	        count:1,
	        msg:"hello vuex",
	        cart:[{
	            pid:"001",
	            pname:"面包",
	            price:20,
	            count:5
	        },{
	            pid:"002",
	            pname:"蛋糕",
	            price:30,
	            count:3
	        }]
	    },

####组件中使用

作为计算属性使用：

	  computed: {
	    count(){
	      return this.$store.state.count;
	    },
		// 计算属性名称自定义
	    msg1(){
	      return this.$store.state.msg;
	    },
	    msg:function(){
	      return this.$store.state.msg;
	    },
	  },


####使用 mapState 辅助函数

在组件内引入：
	
	import {mapState,mapGetters} from "vuex"

组件内：

	  computed:{
	    // mapState 辅助函数，会返回一个对象，
	    // 如果传入数组字符串为参数，返回对象中就 会有同名的方法，这个方法会返回 vuex state 同名状态
	    // 比如 "msg" 意味着 添加了一个计算属性，它会返回 vuex state 中msg
	    //  store 中 state 的msg 和当前组件的 计算属性 msg 产生映射关系
	    ...mapState(["msg","count"]),
		
		// 对象写法
	    // ...mapState({
	    //   // state: ->this.$store.state
	    //   msg1:(state)=>{
	    //     return state.msg
	    //   },
	    //   count:state=>state.count,
	    // })
	  },



###getters

getter 可以理解为 state 的计算属性

####定义：

	// 相当于是state 的计算属性
    getters:{
        // 参数state 就是上面的state
        totle(state,getters){
            let sum = 0;
            state.cart.map(item=>sum+=item.price*item.count)
            return sum;
        },
    }

####使用 ： 和state 类似，在计算属性中使用
可以使用 mapGetters 辅助函数
	
	computed:{
		...mapGetters(["totle"]),
	}

改名
    
	// ...mapGetters({
    //   totle1:"totle"
    // }),


###mutation:

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：


####定义：不要在 mutation 函数外修改 state
	
	mutations:{
        // state-> state 对象
        //  payload  负载 本次 mutation 运载的数据 （提交的参数）
        addCount(state,payload){
            state.count = state.count + payload;
        },
        // addCount(state,payload){
        //     state.count = state.count + payload.n;
        // }
    }


####组件内触发：

	this.$store.commit("addCount",5);


mapMutations:

	<template>
	  <div class="hello">
	    <ul>
	      <li v-for="(item,index) in cart" :key="item.id">{{item.pname}}-{{item.price}}- 
	        
	        <button >-</button> {{item.count}} <button @click="add(index)">+</button></li>
	
	        <!-- <li v-for="(item,index) in cart" :key="item.id">{{item.pname}}-{{item.price}}- 
	        
	        <button >-</button> {{item.count}} <button @click="addfn(index)">+</button></li> -->
	    </ul> 
	    <p>{{totle}}</p>
	    <!-- <p>{{getPro}}</p> -->
	  </div>
	</template>
	
	<script>
	import {mapState,mapGetters,mapMutations} from "vuex"
	export default {
	  name: 'HelloWorld',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  }, 
	  computed: {
	    ...mapState(["cart"]),
	    ...mapGetters(["totle"]),
	  },
	  methods:{
	    // add(i){
	    //   // 提交 add 这个mutation,payload 就是索引
	    //   this.$store.commit("add",i)
	    // },
	    ...mapMutations(["add"]),
	    // addfn(i){
	    //   this.add(i);
	    // }
	  }
	}
	</script>
