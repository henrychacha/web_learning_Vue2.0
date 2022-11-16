import React from 'react';
import './App.css';

import CartList from "./components/CartList"
import CartTotle from "./components/CartTotle"
class App extends React.Component {

  // 构造函数
  constructor() {
    super();
    // 1.定义组件的state 状态，必须在执行super 函数后才能定义
    this.state = {
        totle: 7198,
        cartList: [{
          id:1,
          pname: "xiaomi",
          price: 1999,
          count: 2
        }, {
          id:2,
          pname: "oppo",
          price: 3200,
          count: 1
        }]
    }
    this.add = this.add.bind(this);
  }

  // ind 参数，就是 执行bind 方法的的第二个参数 i,当前项的索引
  add(ind){
    
    let newCartList = [...this.state.cartList]
    newCartList[ind].count++;
    this.setState({
      cartList:newCartList
    },()=>{
      this.getSum();
    })
    
  }
  // 
  mul(ind){
    
    let newCartList = [...this.state.cartList]
    newCartList[ind].count--;
    this.setState({
      cartList:newCartList
    },()=>{
      this.getSum();
    })
    
  }
  del(i){
    let newCartList = [...this.state.cartList]
    newCartList.splice(i, 1);
    this.setState({
        cartList: newCartList
    }, () => {
        this.getSum()
    })
  }
  getSum(){
    let sum = 0;
    this.state.cartList.map(item=>sum+=item.price*item.count);  
    this.setState({
      totle:sum
    })
  }
  // 在构造函数原型对象上
  render() {
    // this ->  当前组件实例对象
    let { totle, cartList } = this.state
    return (
      <div className="cart-box">
        {/*  将数据作为 cartList 向传给 列表组件 */}
        <CartList  cartList ={cartList}  
                    add = {this.add.bind(this)}  
                    mul={this.mul.bind(this)} 
                    del={this.del.bind(this)}></CartList>
        <CartTotle totle={totle} ></CartTotle>
      </div>
    )
  }
}



export default App;
