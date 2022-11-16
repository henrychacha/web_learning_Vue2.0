import React from 'react';

export default class CartList extends React.Component {
    addFn(i){
        this.props.add(i);
    }
    constructor(){
        super();
        this.state={
            c:1
        }
    }
    render() {
        return (
            <ul>
    <li>{this.state.c}</li>
                <li>
                    <span>商品名称</span>
                    <span>商品价格</span>
                    <span>商品数量</span>
                    <span>金额小计</span>
                    <span>删除</span>
                </li>
                {
                    this.props.cartList.map((item, i) => {
                        return (
                            <li key={item.id}>
                                <span>{item.pname}</span>
                                <span>{item.price}</span>
                                <span>
                                    <button onClick={() => {
                                        this.props.mul(i);
                                    }}>-</button>
                                    <span>{item.count}</span>
                                    {/* <button onClick={()=>{
                                        this.props.add(i);
                                    }}>+</button> */}
                                    <button onClick={this.addFn.bind(this,i)}>+</button>
                                </span>
                                <span>{item.price * item.count}</span>
                                <span>
                                    <button onClick={() => {
                                        this.props.del(i)
                                    }}>del</button>
                                </span>
                            </li>
                        )   
                    })
                }
            </ul>
        )
    }
}