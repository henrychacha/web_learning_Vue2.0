import React from "react"

export default class Child1 extends React.Component {
    constructor() {
        console.log("c-construtor")
        super();
        this.state = {
            childCount: 1
        }
    }

    // 首次的props 传入是在 construtore中完成的
    // 传入的prosp 发生改变的时候执行
    // 可以调用setState
    componentWillReceiveProps(nextProps) {
        console.log("c-componentWillReceiveProps", nextProps);
        this.setState({
            childCount:nextProps.parentCount+ this.state.childCount
        })
    }
    // 组件即将渲染，在ssr 中会用到
    componentWillMount() {
        console.log("c-componentWillMount");
    }

    // 清除定时器，接触绑定函数，ajax 的中止
    componentWillUnmount(){
        console.log("c-componentWillUnmount")
    }
    //nextProps:更新后props  nextState:更新后 state

    // 自定义更新规则，提高渲染效率
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        // if(nextProps.parentCount&&nextProps.parentCount>0){
        //     return true
        // }else{
        //     return false;
        // }
        // if(nextState.childCount==this.state.childCount){
        //     return false;
        // }

        return true;
    }
    componentWillUpdate() {
        console.log("c-componentWillUpdate")
    }
    componentDidUpdate() {
        console.log("c-componentDidUpdate")
    }

    // 组件完成挂载，ajax , 开启定时器， 操作真实 DOM 
    componentDidMount() {
        console.log("c-componentDidMount");
    }
    render() {
        console.log("c-render")
        return (
            <div>
                <h2>Child1</h2>
            </div>
        )
    }
}