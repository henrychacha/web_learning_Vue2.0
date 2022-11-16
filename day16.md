###回顾

1.事件绑定

+ 直接绑定箭头函数（this）
+ 类上定义 bind(this)
+ 在构造函数中 bind this


2.事件传参



3.e

 直接绑定 箭头函数的 参数就是event
 bind  隐性传入 ，作为最后一个参数传入


##组件传值


###父组件向子组件传值：和vue 类似也是通过 自定义属性传入


####传入静态字符串

	 <Child1 msg="App传入到Child1的值"></Child1>


####传入其它数据类型或者变量

传入 num是number 类型， count 是 父组件的 state 

	<Child1 msg="App传入到Child1的值" num={1} count={this.state.count}></Child1>


### 子组件接受 props


####类组件中 接收 props

	子组件中通过 this.props.自定义属性名来使用

	export default class Child1 extends React.Component {
	    // 组件类在实例化时，通过编译会自定创建补全 constructor 行数
	    // constructor(props){
	    //     // console.log(props)
	    //     super(props)
	    // }
	    render() {
	        console.log(this);
	        // this.props 就是由传入的自定义属性构成的对象
	        let {msg,num,count} = this.props;
	        return(
	            <div>
	                <h2>Child1</h2>
	                <p>{this.props.msg}</p>
	                <p>{msg}</p>
	                <p>{num+1}</p>
	                <p>{count+1}</p>
	            </div>
	        )
	    }
	}



####函数式组件中


	// 函数组件中， props 同样是作为参数传入 通过 props.自定义属性的形式使用
	export default function Child2(props){
	    console.log(props)
	    return(
	        <div>
	            <h2>child2</h2>
	            <p>{props.msg}</p>
	        </div>
	    )
	}


###子组件向父组件传值： 将父组件的函数作为子组件的props 传入，子组件调用父组件的方法


父组件中：

	class App extends React.Component{
	  constructor(){
	    super();
	    this.state = {
	      count:100
	    }
	    this.addCountP2 = this.addCount.bind(this);
	  }
	
	  addCount(){
	    console.log("addCount");
	    let {count} = this.state;
	    this.setState({
	      count:count+1
	    })
	  }
	
	  render(){
	    var obj = {
	      msg:"App传入到Child1的值",
	      num:1
	    }
	    return (
	      <div className="App">
			//  其一
	        <Child1 msg="App传入到Child1的值" 
	                num={1} 
	                count={this.state.count}
	                // 传入的addCountP 是addCount 绑定当前组件实例（父组件） 最为this 的拷贝函数
	                addCountP = {this.addCount.bind(this)}></Child1>
			//其二
	        {/* 使用对象形式传入多个值 */}
	        <Child1 {...obj} 
	                count={this.state.count}
	                addCountP = {this.addCountP2}
	                ></Child1>
	        <Child2 msg ="App传入到Child1的值"></Child2>
	      </div>
	    );
	  }
	}
	
	export default App;


*传给子组件的方法一定要记得绑定this*


#### 子组件使用

	export default class Child1 extends React.Component {
	    // 组件类在实例化时，通过编译会自定创建补全 constructor 行数
	    // constructor(props){
	    //     // console.log(props)
	    //     super(props)
	    // }
	
	    fn(){
	        this.props.addCountP();
	    }
	    render() {
	        console.log(this);
	        // this.props 就是由传入的自定义属性构成的对象
	        let {msg,num,count} = this.props;
	
	        //  this.props.addCountP 就是父组件传入 addCount 函数
	        console.log(this.props.addCountP)
	        return(
	            <div>
	                <h2>Child1</h2>
	                <p>{this.props.msg}</p>
	                <p>{msg}</p>
	                <p>{num+1}</p>
	                <p>{count+1}</p>
	                {/* this.props.addCountP 就是父组件传入 addCount 函数,
	                    当前按钮的 事件处理函数是 父组件的 addCount
	                */}
					//其一
	                <button onClick={this.props.addCountP}>addCount-1</button>
	                //其一
	                <button onClick={()=>{
	                    //  事件处理函数中调用 addCountP ->addCount
	                    this.props.addCountP();
	                }}>addCount-2</button>
					//其三
	                <button onClick={this.fn.bind(this)}>addCount-3</button>
	                
	            </div>
	        )
	    }
	}


### 带参数的传值

父组件中：
声明实参


	  addCount(n){
	    console.log("addCount");
	    let {count} = this.state;
	    this.setState({
	      count:count+n
	    })
	  }


组件中：

	 fn(){
        this.props.addCountP(10);
    }
    render() {
        console.log(this);
        // this.props 就是由传入的自定义属性构成的对象
        let {msg,num,count} = this.props;

        //  this.props.addCountP 就是父组件传入 addCount 函数
        console.log(this.props.addCountP)
        return(
            <div>
                <h2>Child1</h2>
                <p>{this.props.msg}</p>
                <p>{msg}</p>
                <p>{num+1}</p>
                <p>{count+1}</p>
                {/* this.props.addCountP 就是父组件传入 addCount 函数,
                    当前按钮的 事件处理函数是 父组件的 addCount
                */}
                <button onClick={this.props.addCountP}>addCount-1</button>
                
                {/* 传值方法 一 */}
                <button onClick={()=>{
                    //  事件处理函数中调用 addCountP ->addCount
                    this.props.addCountP(5);
                }}>addCount-2</button>
                {/* 传值方法二 */}
                <button onClick={this.fn.bind(this)}>addCount-3</button>
                
            </div>
        )
    }


#### 传入 event

父组件：
	
  // 父组件的msg 修改行数， e 是子组件 input 标签 onChange 的event
  changeMsg(e){
    console.log(e)
    this.setState({
      msg:e.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <p>{this.state.msg}</p>
        <Child1 msg={this.state.msg} changeMsg={this.changeMsg.bind(this)}></Child1>
        <Child2 msg ="App传入到Child1的值"></Child2>
      </div>
    );
  }


子组件：

	export default class Child1 extends React.Component {

	    changeMsg(e){
	        this.props.changeMsg(e);
	    }
	    render() {
	        return(
	            <div>
	                <h2>Child1</h2>
	                {/* event 对象隐性传入 */}
	                <input type="text"  value={this.props.msg} onChange={this.props.changeMsg}/>
	
	                <input type="text"  value={this.props.msg} onChange={this.changeMsg.bind(this)}/>
	
	                <input type="text"  value={this.props.msg} onChange={(e)=>{
	                    this.props.changeMsg(e);
	                }}/>
	            </div>
	        )
	    }
	}



### 原则

+ 1.修改父组件数据的方法在父组件中
+ 2.将方法传递给子组件，记得绑定this
+ 3.在子组件的事件处理函数中调用父组件传入的方法



#### state 和props 混用的问题

	

父组件：

	  constructor(){
		super();
		this.state = {
		  parentCount:10
		}
		}
		
		componentDidMount(){
		this.setState({
		  parentCount:20
		})
      }


子组件：
	
	constructor(){
        super();
        this.state={
            childCount:1
        }
    }
    // 生命周期
    componentDidMount(){
        // this.setState({
        //     childCount:this.state.childCount+this.props.parentCount
        // })

        // 参数是会返回对象的 函数
        // state 是当前组件的state ,props 父组件传入的prosp
        // 返回值是被更新的state

        // 参数函数的形式 这个方法使更新state 具有延迟性
        this.setState((state,props)=>{
            return {
                childCount:state.childCount+props.parentCount
            }
        })
    }


### 生命周期


#### 初始期,
除了 render 其它只执行一次，render 开始解析子组件，组件的初始期完成，才执行父组件 componentDidMount

+ constructor(初始化实例)
+ componentWillMount （服务器端渲染使用）
+ render（不要render这里 调用setState）
+ componentDidMount (ajax，定时器，操作正式DOM)


#### 更新期

state 和props 发生变化都会跟新

componentWillReciveProps 可以调用setState

	
componentWillUpdate\render\componenDidUpdate 调用setState 会产生死循环



props 变化

+ componentWillReciveProps： props数据 发生变化才执行
+ shouldComponentUpdate
+ componentWillUpdate
+ render
+ componenDidUpdate

state 变化

+ shouldComponentUpdate
+ componentWillUpdate
+ render
+ componenDidUpdate


#### 销毁


	// 清除定时器，接触绑定函数，ajax 的中止
    componentWillUnmount(){
        console.log("c-componentWillUnmount")
    }


### 操作DOM

React开发中，我们应该尽量避免使用DOM操作。但是某些情况下需要在典型数据流外强制修改子	元素，这个时候就要使用refs属性来操作DOM节点。一般refs的使用场景有：

- 处理焦点、文本选择或媒体控制
- 触发强制动画
- 集成第三方 DOM 库

#### 写法


+ 字符串写法
+ 回调写法：React 组件在加载时将 DOM 元素或者React组件实例传入 ref 的回调函数，在卸载时则会传入 null。ref 回调会在componentDidMount 或 componentDidUpdate 这些生命周期回调之前执行
+ createRef API 的方法



### 报错：

shouldComponentUpdate 必须拥有返回的布尔值

	Warning: App.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.
	