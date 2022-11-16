##vue介绍
发音view：
###Vue优点
+ 渐进式的设计理念
+ 轻量级的框架-压缩版92kb
+ 双向数据绑定(MVVM架构)
+ 指令系统  v-xxx 搞定一切 
+ 单页面应用  组件化  scoped
+ 虚拟DOM 借鉴react的概念

*MVC

*MVVM：
	+ M model：数据请求和获取
	+ V view:视图层 展示数据和响应用户的交互行为
	+ VM ViewModel vue负责构建视图模型 沟通 M 和V


##文档地址
[https://cn.vuejs.org/](https://cn.vuejs.org/)


	<!-- 1加载引入vue 核心文件 -->
	<script src="./js/vue.js"></script>


    <!-- 2.创建一个容器 -->
    <div id="app">
        <!-- 双大括号语法，内部可视为是js 环境 -->
        {{msg}}-num
    </div>
    <script>
        // 3.实例化vue 根组件
        console.log(Vue);

        // Vue函数接受一个配置对象作为参数
        let vm = new Vue({
            el:"#app",//element：指定挂载（mount）元素
            // data： 数据对象
            data:{
                msg:"hello vue",
                num:1
            },
			// vue 实例使用的函数
            methods:{
                welcome(){
                    return "welcome vue"
                }
            }
        })
    </script>






报错：

	[Vue warn]: Error compiling template:
	
	avoid using JavaScript keyword as property name: "if"
	  Raw expression: {{if(num>0){num
	            }}}
	
	3  |          <p>{{num&gt;0?num:0}}</p>
	4  |          <p>{{welcome()}}</p>
	5  |          <p>{{if(num&gt;0){num
	   |             ^^^^^^^^^^^^^^^^^^
	6  |              }}}</p>
	   |  ^^^^^^^^^^^^^^^
	7  |      </div>
	
	(found in <Root>)

不能在模板语法使用 流程控制 


##指令：

指令 (Directives) 是带有 v- 前缀的特殊 attribute。指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

+ v-text&&v-html:

		<p>{{msg}}-{{num}}</p>
	    <!-- 指令后面的值是一个js 表达式 
	        v-text:插入文本
	    -->
	    <p v-text="msg"></p>
	    <!-- 
	        v-html:插入html片段
	        注意：不要再表单内使用v-html
	     -->
	    <div v-html="html"></div>


+ v-if:不要再v-if 和v-else 中间插入其它内容

	    <div id="app">
        <p v-if="userName"> 欢迎 {{userName}}</p>  
         <!--不要再v-if 和v-else 中间插入其它内容  -->
        <!-- <div>插入文本</div> -->
        <p v-else>请登录</p> 

        <!-- <p>{{3>1?3:1}}</p> -->
        <!-- <p>{{true?3:1}}</p> -->
        <p>{{userName?'欢迎'+userName:"请登录"}}</p>



        <!-- v-else-if  和v-if 类似 -->
        <p v-if="score>=90">优</p>
        <p v-else-if="score>=80">良</p>
        <p v-else-if="score>=60">合格</p>
        <p v-else>不合格</p>
    </div>
    <script>
        // 3.实例化vue 根组件
        console.log(Vue);

        // Vue函数接受一个配置对象作为参数
        let vm = new Vue({
            el:"#app",//element：指定挂载（mount）元素
            // data： 数据对象
            data:{
               userName:"家炉",
               score:91
            },

        })
    </script>


+ v-show:

	 <!-- v-if 通过 DOM 创建和销毁来控制元素是否显示 -->
        <p v-if="flag"> v-if</p>  
        <!-- v-show 通过元素的 css display 来控制元素是否显示 -->
        <p v-show="flag"> v-show</p>  


	v-show和v-if的区别:

    1、v-if是动态地向DOM树内添加或者删除DOM元素；
       v-show是通过设置DOM元素的display样式属性控制元素的显示或隐藏；
    2、v-if是真实的条件渲染；
       v-show只是简单的基于css切换；
    3、v-if有更高的切换消耗，v-if 是惰性,常用在不需要频繁切换显示状态的地方；
       v-show有更高的初始渲染消耗，常用在需要频繁切换显示状态的地方。


+ v-for:

	    <ul>
            <!-- 

                v-for="(项目名称,索引) in 被遍历的数据 "
                项目名称 是自定义的
             -->
            <li v-for="(item,index) in todos" :key="index">{{index}}-{{item}}</li>
        </ul>

        <ul>
            <!--  v-for="(value,key) in 被遍历的数据 " -->
            <li v-for="(value,key) in stu">{{key}}:{{value}}</li>
        </ul>


+ v-for结合 v-if:

	        <div v-for="i in 9">
                <!-- 列表渲染和 条件渲染可以同时作用于一个元素，v-for 的优先级高于v-if -->
                <span v-for="j in 9" v-if="j<=i">{{j}}*{{i}}={{i*j}}</span>
            </div>



+ v-bind:动态绑定数据


		<div id="app">
	        <a href="http://www.ujiuye.com">ujiuye</a>
	        <ul>
	            <!-- 需要给 属性绑定动态数据的时候，需要使用 v-bind: -->
	            <li v-for="item in webs"><a v-bind:href="item.url">{{item.webName}}</a></li>
	        </ul>
	        <img v-bind:src="img" alt="">
	        <!-- v-bind: 可以简写成 : -->
	        <img :src="img" alt="">
	    </div>
	    <script>
	        // 3.实例化vue 根组件
	
	        // Vue函数接受一个配置对象作为参数
	        let vm = new Vue({
	            el:"#app",//element：指定挂载（mount）元素
	            // data： 数据对象
	            data:{
	                webs:[{
	                    url:"https://www.baidu.com",
	                    webName:"baidu"
	                },{
	                    url:"https://www.sina.com.cn",
	                    webName:"sina"
	                }],
	                img:"https://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1595837566&t=99b6646d9fb3758fd8ad3c1199dc0e7e"
	            },
	        });
	    </script>


+ class:

		<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	    <title>Document</title>
	    <style>
	        .cls1{
	            background-color: skyblue;
	        }
	        .bg1{
	            background-color: pink;
	        }
	        .color1{
	            color:lightgreen;
	        }
	    </style>
	    <!-- 1加载引入vue 核心文件 -->
	    <script src="./js/vue.js"></script>
		</head>
	
		<body>
	    <!-- 2.创建一个容器 -->
	    <div id="app">
	        <!-- <ul>
	            <li v-for="item in webs"><a v-bind:href="item.url" class="cls1">{{item.webName}}</a></li>
	        </ul> -->
	
	        <!-- <ul>
	            <li v-for="item in webs"><a v-bind:href="item.url" v-bind:class="'bg1 '+cls2">{{item.webName}}</a></li>
	        </ul> -->
	
	        <ul>
	            <!-- 索引为偶数的项 会拥有 cls1 数据携带的类名 bg1 -->
	            <li v-for="(item,index) in webs"><a v-bind:href="item.url" v-bind:class="index%2==0?cls1:''">{{item.webName}}</a></li>
	        </ul> 
	
	        <ul>
	            <!-- 可以写成对象形式： key=>类名  值->boolean 值，决定该类名是否生效-->
	            <li v-for="(item,index) in webs"><a v-bind:href="item.url" v-bind:class="{bg1:index%2==0,color1:flag}">{{item.webName}}</a></li>
	        </ul> 
	
	        <ul>
	            <!-- -->
	            <li v-for="(item,index) in webs"><a v-bind:href="item.url" v-bind:class="obj">{{item.webName}}</a></li>
	        </ul> 
	
	
	        <ul>
	            <!-- 前面是判断条件 ，后面是需要生效的数据cls1 的类名 bg1 或者直接写类名 color1 -->
	            <li v-for="(item,index) in webs"><a v-bind:href="item.url" v-bind:class="[index%2==0?cls1:'',flag?'color1':'']">{{item.webName}}</a></li>
	        </ul> 
	    </div>
	    <script>
	        // 3.实例化vue 根组件
	
	        // Vue函数接受一个配置对象作为参数
	        let vm = new Vue({
	            el: "#app",//element：指定挂载（mount）元素
	            // data： 数据对象
	            data: {
	                webs: [{
	                    url: "https://www.baidu.com",
	                    webName: "baidu"
	                }, {
	                    url: "https://www.sina.com.cn",
	                    webName: "sina"
	                }],
	                // cls1 ,cls2 类名字符串
	                cls1:"bg1",
	                cls2:"color1",
	                flag:true,
	                obj:{bg1:true,color1:false}
	            },
	        });
	    </script>
	</body>

+ style:

	    <div id="app">
	        <p style="font-size: 30px;color:red">行间样式</p>
	        <p :style="{color:'red'}">动态style</p>
	        <!-- key: 样式名称 建议写成 驼峰写法， 值 样式值 -->
	        <p :style="{color:r,fontSize:ft}">动态style</p>
	        <!-- 可以将样式对象写到data 中 -->
	        <p :style="styleObj">动态style</p>
	
	        <!-- 数组每一个成员都是一个样式对象 -->
	        <p :style="[styleObj,styleObj1]">动态style</p>
	
	    </div>
	    <script>
	        // 3.实例化vue 根组件
	
	        // Vue函数接受一个配置对象作为参数
	        let vm = new Vue({
	            el: "#app",//element：指定挂载（mount）元素
	            // data： 数据对象
	            data: {
	                r:"red",
	                ft:"30px",
	                styleObj:{
	                    color:"lightgreen"
	                },
	                styleObj1:{
	                    backgroundColor:"pink"
	                }
	            },
	        });
	    </script>


+ v-on:

	<div id="app">
        <p style="font-size: 30px;color:red">行间样式</p>
        <!-- 语法：
            v-on:事件类型名="事件处理函数",
            可以加 ()
            -->
        <p :style="{color:'red',fontSize:ft+'px'}" v-on:click="fn">动态style</p>
        <p :style="{color:'red',fontSize:ft+'px'}" v-on:click="fn()">动态style</p>
        <p :style="{color:'red',fontSize:ft+'px'}" v-on:click="ft+=5">动态style</p>

            <!-- @ :v-on: 的语法糖简写模式 -->
        <p :style="{color:'red',fontSize:ft+'px'}" @click="ft+=5">动态style</p>
    </div>
    <script>
        // 3.实例化vue 根组件

        // Vue函数接受一个配置对象作为参数
        let vm = new Vue({
            el: "#app",//element：指定挂载（mount）元素
            // data： 数据对象
            data: {
                ft:30,
            },
            // 事件处理函数定义在methods 中
            methods:{
                fn(){
                    console.log("1");
                    // this.ft = this.ft + 5;
                    this.ft += 5;
                }
            }
        });
    </script>


常见错误：

		[Vue warn]: Property or method "cls1" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.
		
		(found in <Root>)
	

		属性和方法没有被定义：


