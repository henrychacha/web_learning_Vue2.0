###回顾


1.组件：


	局部注册	全局注册

2.

   + 1.data
   + 2.名称
   + 3.props
   + 4.模板唯一根


3.



###关于本地图片动态 路径的问题：

	动态路径默认是项目的绝对路径地址

+ 使用require 作为 模块
+ 图片放在 static



##组件传值


父传子：

	prosp 属性


子传父：

	自定义事件

1.在父组件中使用 子组件时，给子组件添加自定义事件
addCount：自定义事件名称   add处理自定义事件的函数的名称

	<CartList :obj="obj"    @addCount = "add"  @inpCount="inp"/>


自定义事件的事件处理函数在父组件中：

+ 自定义事件传入的数据
+ 对应$emit 方法的第二个参数

	    add(i){
            // console.log("add 触发",i)
            this.obj[i].count++;
        },
		inp(payload){
            // console.log(i,val);
            this.obj[payload.i].count = Number(payload.val)
        }


2.子组件监听用户操作，触发自定义事件

直接触发

	 <a href="javascript:;" @click='$emit("addCount",index)'>+</a>

事件处理函数;

     <input type="text" class="number"  :value="item.count"  @input="inpFn($event,index)"/>


子组件的事件处理函数

	  inpFn(e,i){
            // console.log(e.target.value)
            this.$emit("inpCount",{i,val:e.target.value})
      }



# eventBus : 每一个vue 实例都包含 $emit $on

1.新建文件 bus.js

	import Vue from "vue"

	// 暴露空实例
	export default new Vue();


2.将该空实例添加到 Vue 的原型对象上

在 main.js 中添加

	import Bus from "./bus"

	Vue.prototype.$bus = Bus


3.使用

	1.在需要响应自定义事件的组件的 生命周期

		  mounted() {		
		    this.$bus.$on("abc",()=>{
		      console.log("abc 执行了")
		    })
		  },


    2.在其它组件中触发


		this.$bus.$emit("abc");


##ref

ref被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的$refs对象上。如果在普通的 	DOM 元素上使用，引用指向的就是DOM元素；如果用在子组件上，引用就指向组件实例


只要想要在Vue中直接操作DOM元素，就必须用ref属性进行注册
在Vue实例中默认有一个$refs，它是一个对象，持有已注册过 ref 的所有的子组件
ref有三种用法：
+ ref加在普通的元素上，用this.$refs.自定义名称，获取到的是DOM元素
	
	<!-- 1.用在 元素上 ，添加 ref 属性， 值就是 标记值-->
    <div ref="el1"  >welcome</div>
	
*this.$refs.ref值*

+ 利用 v-for 和 ref 获取一组数组或者DOM节点

	    <!-- 2.在列表渲染的元素上的 ref，获取的是 一个数组 -->
	    <ul>
	      <li v-for="(item,index) of arr" :key="index" ref="list">{{ item }}</li>
	    </ul>
	
+ ref加在子组件上，用this.$refs.自定义名称，获取到的是组件实例，可以获取或使用组件的所有数据和方法

	    <ShopCart ref="child" />
    	<button @click="$refs.child.fn()">修改子组件的count</button>

子组件：

		export default {
		  data(){
		    return{
		      text:"子组件文本",
		      count:1
		    }
		  },
		  components: {
		    CartList,
		    CartFooter
		  },
		  methods: {
		     fn(){
		       this.count++;
		     }
		  }
		};


##使用jquery


1.外部引入

index.html

	<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
 
或者
   
	<script src="static/js/jquery.min.js"></script>



2.局部引用

	import $ from "jquery"

	$(".box").slideUp();


3.全局引用

main.js

	import $ from "jquery"

	Vue.prototype.$ = $;

使用：

	this.$(".box").slideUp()



##插槽：

插槽（Slot）是Vue提出来的一个概念，正如名字一样，插槽用于决定将所携带的内容，插入到指定的某个位置，从而使模板分块，具有模块化的特质和更大的重用性。
将 <slot> 元素作为承载分发内容的出口。可以理解为模板中的占位符, 在实例化时用自定义标签元素替代。
###基本使用

1.在组件中定义插槽

	    <!-- 匿名插槽  name="default" -->
        <slot></slot>

2.使用组件时向插槽分发内容

	<AlertBox msg="等待加载中">
       <i>匿名内容</i>
    </AlertBox>


###具名插槽


定义：
	
name:相当于给插槽取名

	<div class="box">
        <h2>信息提示</h2>
        <!-- 匿名插槽  name="default" -->
        <slot></slot>
        <slot name="info"></slot>
        <slot name="btn"></slot>
    </div>
	

使用：

使用v-slot 指定内容插入哪一个插槽

	 <AlertBox msg="等待加载中">
       <i>匿名内容</i>
       <template v-slot:info>
         <b>信息加载中</b>
       </template>
       <template v-slot:btn>
         <p><button>取消</button><button>确认</button></p>
       </template>
    </AlertBox>


###作用域插槽：

插槽是有作用域的，不可以直接在夫组件内使用子组件的数据

子组件内：

	<template>
	    <div>
	        <div v-for="(item,index) in books" :key="index">
	            <!-- 向插槽内 注入数据 数据名称就是 item -->
	            <slot :item="item"></slot>
	        </div>
	        
	    </div>
	</template>
	<script>
	export default {
	    data(){
	        return {
	            books:[{
	                id:1,
	                book:"十里桃花",
	                author:"建林"
	            },{
	                id:2,
	                book:"盘龙",
	                author:"西红柿"
	            },{
	                id:3,
	                book:"盗墓笔记",
	                author:"南派三叔"
	            }]
	        }
	    }
	}
	</script>

父组件中接收：
v-slot 指令的值 名字是自定义 ，代表子组件插入到插槽中的数据

	<BookList>
       <template v-slot="a">
         <p>{{a.item.id}}- <span style="color:red;">{{a.item.book}}</span> - {{a.item.author}}</p>
       </template>
    </BookList>


    <BookList>
       <template v-slot="props">
         <p> <span style="font-style:italic;">{{props.item.id}}</span>- <span style="color:pink;">{{props.item.book}}</span> - {{props.item.author}}</p>
       </template>
    </BookList>


## is 属性

1.改变默认标签约束，vue-cli 中不受约束

           众所周知，有些HTML元素，诸如 <ul>、<ol>、<table>和<select>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <li>、<tr> 和 <option>，只能出现在其它某些特定的元素内部，正是因为html模板的限制，于是就诞生了is。


2.2.动态组件

如果要在Vue中展示不同组件的内容，在没有学到路由的时候，我们可以通过is特性来实现组件的动态切换
定义两个以上组件，学生和教师组件
        
父组件：

	<template>
	  <div id="app">
	      <button @click="fn">切换</button>
	
	      <!-- 动态的 is 属性 表明 这个组件是一个动态组件 值是一个组件名称的字符串 -->
	      <div :is="comName"></div>
	
	      <table>
	        <VTr></VTr>
	      </table>
	  </div>
	</template>
	
	<script>
	
	import Teacher from "./components/Teacher"
	import Stu from "./components/Stu"
	import VTr from "./components/VTr"
	export default {
	  name: 'App',
	  data(){
	    return {
	      comName:'Stu'
	    }
	  },
	  components: {
	    Teacher,
	    Stu,
	    VTr
	  },
	  methods:{
	    fn(){
	      if(this.comName=="Stu"){
	        this.comName="Teacher"
	      }else{
	        this.comName="Stu"
	      }
	    }
	  }
	}
	</script>

子组件：

	<template>
	    <div>
	        <h2>老师信息</h2>
	    </div>
	</template>
	<script>
		export default {
		    
		}
	</script>


	<template>
	    <div>
	        <h2>学员信息</h2>
	    </div>
	</template>
	<script>
	export default {
	    
	}
	</script>