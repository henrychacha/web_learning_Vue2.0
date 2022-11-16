import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

// store 全局的唯一数据源（仓库）
let store = new Vuex.Store({
    strict: true,
    // state 仓库存储数据的地方
    state:{
        cart:[{
            pid:"001",
            pname:"面包",
            price:20,
            count:5
        },{
            pid:"002",
            pname:"蛋糕",
            price:30,
            count:3
        }]
    },
    // 相当于是state 的计算属性
    getters:{
        // 参数state 就是上面的state
        totle(state,getters){
            let sum = 0;
            state.cart.map(item=>sum+=item.price*item.count)
            return sum;
        },
    },
    mutations:{
        // 不要在 mutation 函数外修改 state
        // state-> state 对象
        //  payload  负载 本次 mutation 运载的数据 （提交的参数）
        // 本次传入的payload 作为索引
        add(state,payload){
            console.log(payload);
            state.cart[payload].count++;
        }
    }
})

export default store;