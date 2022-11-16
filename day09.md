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

![work](https://vuex.vuejs.org/vuex.png)

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
		//   count1:count
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
	

### mutation:

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：


####定义：不要在 mutation 函数外修改 state
	
	mutations:{
        // state-> state 对象
        //  payload  负载,载荷 本次 mutation 运载的数据 （提交的参数）
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


###Mutation 必须是同步函数，只能在mutaion 中做同步操作

	    mulGoodsCount(state,payload){
            setTimeout(()=>{
                state.cart[payload].count--;
            },1000)
        },

###Mutation 需遵守 Vue 的响应规则
既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

state：

	
	obj:{
            a:1,
        }

mutation:


	addProp (state, payload) {
            // state.obj.b = 2;

            // state.obj ={
            //     ...state.obj,
            //     b:2
            // }

            Vue.set(state.obj,"b",2)
        }


### actions

Action 类似于 mutation，不同在于：

+ Action 提交的是 mutation，而不是直接变更状态。

+ Action 可以包含任意异步操作。	


注册：

	actions:{
        // context ->当前的store 实例
        // mulGoodsCountAction(context,payload){
        //     // 提交mutation
        //     // context.commit("mulGoodsCount",payload);
        //     setTimeout(()=>{
        //         console.log(context)
        //         context.commit("mulGoodsCount",payload);
        //     },2000)
        // }

        mulGoodsCountAction({commit},payload){
            setTimeout(()=>{
                commit("mulGoodsCount",payload);
            },2000)
        }
    }


使用：

	methods: {
	    ...mapMutations({ addGoodsCount: "addGoodsCount",mulGoodsCount:"mulGoodsCount",checkGoods:"checkGoods" }),
	    ...mapActions(["mulGoodsCountAction"]),
	    add(i) {
	      this.addGoodsCount(i);
	    },
	    mul(i){
	        //this.mulGoodsCount(i);
	        // this.$store.dispatch("mulGoodsCountAction",i);
	
	        this.mulGoodsCountAction(i);
	    },
	    checked(i,e){
	        // console.log(i,e.target.checked)
	        this.checkGoods({
	            i,
	            checked:e.target.checked
	        })
    }

### module:
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块


定义：

	import Vue from "vue"
	import Vuex from "vuex"
	import Cart from "./module/Cart"
	import Obj from "./module/Obj"
	
	
	Vue.use(Vuex);
	
	export default new Vuex.Store({
    	strict:true,
	    state:{
	        
	    },
	    getters:{
	        
	    },
	    mutations:{
	        addProp(){
	            console.log("addProp 全局")
	        }
	    },
	    actions:{
	       
	    },
	    modules:{
	        //拥有了两个模块
	
	        //  Obj 模块的名称
	        //  模块 的配置
	        Obj:{
	            //命名空间，使模块具有封装性，只能通过模块调用 mutation
	            namespaced: true,
	            state:{
	                obj:{
	                    a:1,
	                },
	            },
	            mutations:{
	                addProp (state, payload) {
	                    // state.obj.b = 2;
	        
	                    // state.obj ={
	                    //     ...state.obj,
	                    //     b:2
	                    // }
	        
	                    Vue.set(state.obj,"b",2)
	                }
	            }
	        },
	        Cart
	    }
	})


Cart.js

	// 购物车模块 
	export default {
	    state:{
	        cart:[{
	            pid:"001",
	            pname:"面包",
	            price:20,
	            count:5,
	            isChecked:false,
	        },{
	            pid:"002",
	            pname:"蛋糕",
	            price:30,
	            count:3,
	            isChecked:true,
	        }]
	    },
	    getters:{
	        totle(state,getters){
	            let sum = 0;
	            state.cart.map(item=>sum+=item.price*item.count)
	            return sum;
	        },
	    },
	    mutations:{
	        addGoodsCount(state,payload){
	            state.cart[payload].count++;
	        },
	        mulGoodsCount(state,payload){
	            state.cart[payload].count--;
	        },
	        checkGoods(state,payload){
	            state.cart[payload.i].isChecked = payload.checked;
	        },
	    },
	    actions:{
	        // context ->当前的store 实例
	        // mulGoodsCountAction(context,payload){
	        //     // 提交mutation
	        //     // context.commit("mulGoodsCount",payload);
	        //     setTimeout(()=>{
	        //         console.log(context)
	        //         context.commit("mulGoodsCount",payload);
	        //     },2000)
	        // }
	
	        mulGoodsCountAction({commit},payload){
	            setTimeout(()=>{
	                commit("mulGoodsCount",payload);
	            },2000)
	        }
	    }
	}


组件内使用模块内的state 

	  computed: {
	    cart(){
	      //  使用的是 Cart 模块中 state 中 cart
	      return this.$store.state.Cart.cart;
	    }
	  },


####命名空间

默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应。

如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。

	
	modules:{
	        //拥有了两个模块
	
	        //  Obj 模块的名称
	        //  模块 的配置
	        Obj:{
	            //命名空间，使模块具有封装性，只能通过模块调用 mutation
	            namespaced: true,
	            state:{
	                obj:{
	                    a:1,
	                },
	            },
	            mutations:{
	                addProp (state, payload) {
	                    // state.obj.b = 2;
	        
	                    // state.obj ={
	                    //     ...state.obj,
	                    //     b:2
	                    // }
	        
	                    Vue.set(state.obj,"b",2)
	                }
	            }
	        },
	        Cart
	    }


使用模块的 mutation

	  methods:{
	    //  全局中 addProp 这个mutation 也会触发，不具有 封装性
	    // ...mapMutations(["addProp"]),
	    // 展开 mutations  Obj模块名/ addProp mutation名
	    ...mapMutations({addProp:"Obj/addProp"}),
	    fn(){
	      this.addProp();
	    }
	  }









##UI 库



###element ui

文档：[https://element.eleme.cn/#/zh-CN/component/installation](https://element.eleme.cn/#/zh-CN/component/installation)

####使用

1.安装
	
		npm i element-ui -S

2.在 main.js 添加

	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-chalk/index.css';
	Vue.use(ElementUI);

3.

###Mint UI


### iview


### vant 移动端

文档 [https://youzan.github.io/vant/#/zh-CN/home](https://youzan.github.io/vant/#/zh-CN/home)




