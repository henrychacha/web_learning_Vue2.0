import React from "react"

export default class Child1 extends React.Component {
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
    render() {
       
        return(
            <div>
                <h2>Child1</h2>
                <p>{this.state.childCount}</p>
                
            </div>
        )
    }
}