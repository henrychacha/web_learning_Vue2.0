Vue：

1.引入
2.创建容器
3.实例化

模板语法：{{}}

指令：

+ v-text:
+ v-html:
+ v-if,v-else-if ,v-else:
+ v-show:
+ v-for:
+ v-bind:
+ class:
+ style:
+ v-on:


#表单输入

##v-model


+ 输入框： text,text-area ,输入框的值value和 data 数据绑定

	    <!-- 单向：数据渲染到视图-->
        <input type="text" :value="msg">
        <!-- input 事件：输入事件,视图中修改数据 -->
        <!-- <input type="text" @input="fn($event)">    -->
        <!-- $event: 固定写法，vue 中的事件对象 -->
        <!-- 单向： 视图中修改数据-->
        <input type="text" @input="msg = $event.target.value">

        <!-- 双向绑定原理-->
        <input type="text" :value="msg" @input="msg = $event.target.value">


        <!-- 语法糖 v-model -->
        <input type="text" v-model="msg">


        <textarea name="" id="" cols="30" rows="10" v-model="msg"></textarea>


+ 单选:单选框绑定 v-model 数据，会和单选框的value 有关联

	    <div id="app">
	        <input type="radio"  v-model="star" name="boy" value="易烊千玺" >：易烊千玺
	        <input type="radio"  v-model="star" name="boy" value="王俊凯" >：王俊凯
	        <input type="radio"  v-model="star" name="boy" value="王源">：王源
	
	        <p>star- {{star}}</p>
	    </div>
	    <script>
	        let vm = new Vue({
	            el:"#app",
	            data:{
	                // 单选框绑定 v-model 数据，会和单选框的value 有关联
	                star:"易烊千玺"
	            },
	            methods:{
	
	            }
	        })
	    </script>

+ 多选

	+ 选中项的值

		    <div id="app">
		        <input type="checkbox"  v-model="star" name="boy" value="易烊千玺" >：易烊千玺
		        <input type="checkbox"  v-model="star" name="boy" value="王俊凯" >：王俊凯
		        <input type="checkbox"  v-model="star" name="boy" value="王源">：王源
		
		        <p>star- {{star}}</p>
		    </div>
		    <script>
		        let vm = new Vue({
		            el:"#app",
		            data:{
		                // 多选框绑定 v-model 数据，会和多选框的value 有关联，数据会被储存在 数组中
		                star:[]
		            },
		            methods:{
		
		            }
		        })
		    </script>

	+ 选中状态：v-model 可以通过绑定boolean值来 获取和修改 选中状态
	
			    <div id="app">
			        全选：
			        <input type="checkbox"  v-model="checked"  @click="fn">
			        <p>checked- {{checked}}</p>
			    </div>
			    <script>
			        let vm = new Vue({
			            el:"#app",
			            data:{
			                // 可以通过绑定boolean值来 获取和修改 选中状态
			                checked:true
			            },
			            methods:{
			                fn(){
			                    console.log(this.checked)
			                }
			            }
			        })
			    </script>

+ 下拉框单选：

	    <div id="app">
	        <!-- v-model 是绑定在 select上的 -->
	        <select v-model="city">
	            <option value="潮汕">潮汕</option>
	            <option value="湛江">湛江</option>
	            <option value="广州">广州</option>
	        </select>
	        <p>{{city}}</p>
	    </div>
	    <script>
	        let vm = new Vue({
	            el:"#app",
	            data:{
	                // 下拉选框绑定 v-model 数据，会和单选框的value 有关联
	                city:"广州"
	            },
	            methods:{
	                
	            }
	        })
	    </script>

+ 下拉框多选：
	
	    <div id="app">
	        <!-- v-model 是绑定在 select上的,添加了multiple 属性，也可以实现多选效果 -->
	        <select v-model="city" multiple>
	            <option value="潮汕">潮汕</option>
	            <option value="湛江">湛江</option>
	            <option value="广州">广州</option>
	            <option value="深圳">深圳</option>
	        </select>
	        <p>{{city}}</p>
	    </div>
	    <script>
	        let vm = new Vue({
	            el:"#app",
	            data:{
	                // 下拉选框绑定 v-model 数据，会和单选框的value 有关联
	                city:[]
	            },
	            methods:{
	                
	            }
	        })
	    </script>

##修饰符:Vue中，事件修饰符处理了许多DOM事件的细节

通用

+ prevent:阻止默认事件
+ stop：组件事件冒泡
+ capture: 事件在捕获阶段触发
+ self:
+ once:

键盘：

	+ 别名
	+ keyCode

鼠标 click：

	+ left middle  right

表单：

	+ lazy
	+ number
	+ trim


##生命周期

###初始期

+ beforeCreate
类型：Function

详细：

在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用,不可以再这里操作data 和methods。


+ created
类型：Function

详细：

在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el property 目前尚不可用。操作data 和methods。

+ beforeMount
类型：Function

详细：
beforeMount
在挂载开始之前被调用：相关的 render 函数首次被调用。

该钩子在服务器端渲染期间不被调用。

+ mounted
类型：Function

详细：

实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。操作DOM 可以在这里实现，请求 数据

*上述四个在一个周期中只执行一次*

###更新期：data 发生变化都会执行

+ beforeUpdate
类型：Function

详细：

数据更新时调用，发生在虚拟 DOM 打补丁（更新发生变化的数据对应的DOM）之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。




+ updated
类型：Function

详细：

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

###销毁期

+ beforeDestroy
类型：Function

详细：

实例销毁之前调用。在这一步，实例仍然完全可用。

该钩子在服务器端渲染期间不被调用。

参考：生命周期图示

destroyed
类型：Function

详细：

实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

该钩子在服务器端渲染期间不被调用。


