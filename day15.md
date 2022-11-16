## 回顾

+ react?

+ diff

	+ Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。
	+ 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。
	+ 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。


+ Jsx:


	+ 数据
	+ 运算
	+ 流程控制的问题
	+ 属性
		+ className 
		+ 样式

	+ 条件
	+ 列表

jsX 原则




### react state

state状态

	React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲	染  UI，让用户界面和数据保持一致
      	React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）


#### 在construtor 中定义state

	  // 构造函数
	  
  constructor(){
    super();
    // 1.定义组件的state 状态，必须在执行super 函数后才能定义
    this.state ={
      title:"hello React"
    }
  }

#### 通过 this.state 来使用state

	render(){
		// 组价内通过 this.state.title 访问
		
		let {title} = this.state;
		return(
		<div>{this.state.title}- <span>{title}</span></div>
		)
	}


#### 更新state

修改state 唯一生效是 this.setState


    // params1: 对象->需要更新的状态对象


    // 更新 state 原理 将 setState 的参数对象 和 原state 对象合并
    this.setState({
      time:new Date().toLocaleTimeString()
    })


setState 是一个异步更新,具有延迟性，会将多个setState 操作进行合并更新

	  // params2: 数据更新后执行的回调函数
	  this.setState({
	    title:this.state.title+ "!"
	  },()=>{
	    this.setState({
	      title:this.state.title.split("").reverse().join("")
	    });
	  });


state 变化会导致 render函数执行 操作DOM ，更新视图



### 事件

绑定事件 ：事件名称是驼峰写法
事件处理函数写在 {} 中


        {/* <button onClick={function(){
          //  普通函数内 this 指向 undefined
          console.log(this)
          // this.setState({
          //   count:this.state.count+1
          // })
        }}>+</button> */}

1.直接绑定箭头函数

       <button onClick={()=>{
          //  箭头函数的this 指向外层this, 外层this为当前组件实例对象
          // console.log(this)
          this.setState({
            count:this.state.count+1
          })
        }}>+</button>
      </div>


2.在类的原型直接的定义事件函数

	mul(){
		console.log("mul");
	
		this.setState({
		count:this.state.count-1
		})
	}
	
	// 在构造函数原型对象上
	render(){
		// this ->  当前组件实例对象
		let {count} = this.state
	
		console.log(this.mul)
		return(
		<div>
			{/* 千万不要带 () */}
			{/* <button onClick={this.mul()}>-</button> */}
	
			{/* <button onClick={()=>{
			this.mul();
			}}>-</button> */}
	
			{/* 事件函数 是 this.mul 的拷贝，
				当事件函数执行的时候，内部的this 就是当前传入的this
	
				当前的this 指向 当前组件实例
			*/}
			<button onClick={this.mul.bind(this)}>-</button>
	
			<span>{count}</span>
		</div>
		)
	}


3.在构造函数进行拷贝

		  // 构造函数
		  constructor(){
		    super();
		    // 1.定义组件的state 状态，必须在执行super 函数后才能定义
		    this.state ={
		      count:1
		    }
		    //给组件实例添加一个 mul1 方法 是 原型对象上 mul 拷贝
		    // mul1 内部的this 指向 当前组件实例
		    // this.mul1 = this.mul.bind(this);
		
		
		    // 实例的 mul 属性 是原型mul 拷贝
		    // 拷贝 mul 中this 指向 当前组件实例
		    this.mul= this.mul.bind(this);
		  }
		  // 直接在类的原型上定义方法
		  // 类上面的方法是普通函数，this 不会自动绑定 组件实例
		  mul(){
		    console.log("mul");
		
		    this.setState({
		      count:this.state.count-1
		    })
		  }
		
		  // 在构造函数原型对象上
		  render(){
		    // this ->  当前组件实例对象
		    let {count} = this.state
		
		    console.log(this.mul)
		    return(
		      <div>
		        {/* 
					<button onClick={this.mul1}>-</button>
		        */}
		        <button onClick={this.mul}>-</button>
		
		        <span>{count}</span>
				
		      </div>
		    )
		  }



