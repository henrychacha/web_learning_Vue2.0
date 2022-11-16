###回顾


###

	npm i react-router-dom

###使用


	index.js中使用hashRouter或者BrowserRouter


#### 内置组件（react-router中的）

	Switch NavLink Link Route BrowserRouter HashRouter Redirect 

####  传值


##Flux

文档[https://facebook.github.io/flux/](https://facebook.github.io/flux/)

Flux是Facebook用户建立客户端Web应用的前端架构， 它通过利用一个单向的数据流补充了	

React的组合视图组件，这是一种模式而非正式框架，你能够无需许多新代码情况下立即开始使用Flux

flux是现在市面上所有的状态管理系统的始祖。是fb和react一起推出的。它可以在vue中使用



Flux将一个应用分成四个部分：

- View： 视图层
- Action（动作）：视图层发出的消息（比如mouseClick）
- Dispatcher（派发器）：用来接收Actions、执行回调函数
- Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面

flux只是负责添加和产生dispatcher，而action和store与flux没有关系


####安装


	npm i flux --save




#### 1.创建一个 store.js

构建一个store 对象， store 包含 管理的数据和 修改数据的方法

	
	let store = {
	    // 数据
	    todoList:["吃饭"],
	
	    //  获取数据的方法
	    getTodoList(){
	        return this.todoList;
	    },
	    // 修改数据的方法
	    add(todo){
	        this.todoList.push(todo)
	    },
	    
	}
	
	export default store


####2. 在 组件中 将 store 的数据作为初始数据进行使用

	import store from "./store/store"	
	class App extends React.Component{
	  constructor(){
	    super();
	
		    // 从store 获取初始 状态
		    this.state = {
		      todos:store.getTodoList()
		    }
	  }
	  render(){
	    return (
	      <div className="App">
	        <div><button}>add item</button></div>
	        <ul>
	          {
	            this.state.todos.map((item,index)=>{
	              return <li key={index}>{item}</li>
	            })
	          }
	        </ul>
	      </div>
	    );
	  }
	}


#### 3.发出一个actions ,action 被发出后更新 视图

#####需求：
需要能够在其它文件中做出操作更新视图： App 需要todoList 更新后，获取最新的todoList 来渲染

#####解决办法：
通过自定义事件，给store 添加一个自定义事件，将 _change 这个更新视图的方法作为 作为自定义事件的事件处理函数，这样的化只要在组件外触发自定义事件，就会更新组件视图




新建actions.js:

	import store from "./store"

	let actions = {
	    // 视图 中发出的action 
	    sendAction(){
	        store.add("睡觉");          
	        store.emit("change")
	    }
	}
	
	export default actions


修改store:

将 EventEmitter.prototype 和当前的store 合并，store 就可以调用 自定义事件的相关方法



	
	import {EventEmitter} from  "events"
	
	// EventEmitter.prototype  包含 自定义事件相关的各种方法
	console.log(EventEmitter.prototype)
	
	let store = {
	    // 给store 对象添加 自定义事件 系统的相关
	    ...EventEmitter.prototype,
	    // 数据
	    todoList:["吃饭"],
	
	    //  获取数据的方法
	    getTodoList(){
	        return this.todoList;
	    },
	    // 修改数据的方法
	    add(todo){
	        this.todoList.push(todo)
	    },
	    // 绑定自定义事件
	    bindChange(cb){
	        // 给 store 绑定自定义事件 change，cb 作为 自定义事件  change 的事件处理函数 
	        this.on("change",cb)
	    }
	}

export default store
	

修改组件：

添加一个绑定 自定义事件的方法，将组件内修改 state 的方法在组件挂载后 绑定自定义事件

	import React from 'react';
	import './App.css';
	import store from "./store/store"
	import actions from "./store/actions"
	
	class App extends React.Component{
	  constructor(){
	    super();
	
	    // 从store 获取初始 状态
	    this.state = {
	      todos:store.getTodoList()
	    }
	  }
	  // 组件挂在之后
	  componentDidMount(){
	    // 调用 store 的bindChange方法 ， 传入的实参 是 更新 视图 的_change 函数
	    store.bindChange(this._change.bind(this))
	  }
	
	  //  更新 组件的state
	  _change(){
	    this.setState({
	        todos:store.getTodoList()
	    })
	  }
	  addFn(){
	    // 用户的操作发出一个action
	    actions.sendAction();
	  }
	  render(){
	    return (
	      <div className="App">
	        <div><button onClick={this.addFn.bind(this)}>add item</button></div>
	        <ul>
	          {
	            this.state.todos.map((item,index)=>{
	              return <li key={index}>{item}</li>
	            })
	          }
	        </ul>
	      </div>
	    );
	  }
	}
	
	export default App;



#### 4.响应view 中用户的操作，由 应用的dispatcher 来发出action

创建一个应用唯一 dispatcher:AppDispatcher.js

	import {Dispatcher} from "flux"
	import store from "./store"
	
	// 实例化一个dispatcher
	let appDispatcher = new Dispatcher();
	
	// dispathcer  注册回调函数 来响应 发出的action
	// register 参数就是回调函数，该函数会在 dispatcher 发出action 的时候执行
	// 回调函数的action 参数： 发出action dispatch 方法的的参数
	appDispatcher.register((action)=>{
	    // console.log("发出了action")
	    // console.log(action)
	
	    switch(action.type){
	        case "ADD_ACTION":
	            store.add(action.payload);
	            store.emit("change");
	            break;
	        default:
	            break;
	    }
	})
	
	
	export default appDispatcher

修改 actions.js:
	
	
	import appDispatcher from "./AppDispatcher"
	
	let actions = {
	    // 视图 中发出的action 
	    sendAction(){
	        // 修改store 中的数据
	
	
	        //  用户在视图中 发出的action 是一个对象，
	        //对象
	        let addAction = {
	            //type:ACTION  类型
	            type:"ADD_ACTION",
	            payload:"睡觉"
	        }
	
	        //  dispatcher  发出action, register 方法注册的回调函数就会执行
	        appDispatcher.dispatch(addAction);
	    }
	}
	
	export default actions


###Redux: js库，提供可预测的状态管理。


###三大原则
Redux 可以用这三个基本原则来描述：

+ 单一数据源
整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

+ State 是只读的
唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。

+ 使用纯函数来执行修改（reducer 必须是纯函数）
为了描述 action 如何改变 state tree ，你需要编写 reducers。

####安装

	npm i redux --save

####使用

	import React from 'react';

	import './App.css';
	import {createStore} from "redux"
	
	//1. 初始state
	let initState = {count:1}
	
	//2. 将 初始state 作为 reduce 的默认参数,action 就是 store 发出的action
	// store 发出action reducer 函数就会执行,返回值就是最新的state
	let reducer = function(state=initState,action){
	  console.log(state,action)
	
	  switch(action.type){
	    case "INCREMENT":
	      state.count+=action.payload;
	      // 必须返回一个新的state
	      return {...state};
	    case "MUL":
	        state.count-=action.payload;
	        // 必须返回一个新的state
	        return {...state};
	    default:
	      return state;
	
	  }
	
	  // 默认返回 当前 state,getState 方法返回就是 当前 reducer 函数的返回值
	  // return state;
	}
	
	// 3.创建store,reducer 函数初始执行  
	// 接受参数， 参数一个reducer 函数
	let store =  createStore(reducer);
	
	
	// 获取当前 store 中的state
	// console.log(store.getState());
	
	class App extends React.Component {
	  constructor(){
	    super();
	    this.state = {
	      // 4.获取默认state 的count
	      count:store.getState().count
	    }
	  }
	  componentDidMount(){
	    // 5.使用 store subscribe 设置监听函数, 函数的 state 做出改变的时候执行
	    store.subscribe(()=>{
	      // console.log("state 改变了")
	      this.setState({
	        count:store.getState().count
	      })
	    })
	  }
	  render(){
	    return (
	      <div className="App">
	        <button onClick={()=>{
	          // 发出action
	          store.dispatch({
	            type:"INCREMENT",
	            payload:10
	          });
	
	          // console.log(store.getState())
	        }} >{this.state.count}</button>
	        <button onClick={()=>{
	          store.dispatch({
	            type:"MUL",
	            payload:2
	          });
	        }}>-</button>
	      </div>
	    );
	  }
	}
	
	export default App;



	
	



