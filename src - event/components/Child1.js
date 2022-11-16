import React from "react"

export default class Child1 extends React.Component {
    // 组件类在实例化时，通过编译会自定创建补全 constructor 行数
    // constructor(props){
    //     // console.log(props)
    //     super(props)
    // }

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
}