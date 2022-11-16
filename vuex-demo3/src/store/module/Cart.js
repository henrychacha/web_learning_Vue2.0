// 购物车模块 
export default {
    state:{
        cart:[{
            pid:"001",
            pname:"面包",
            price:20,
            count:5,
            isChecked:false,
        },{
            pid:"002",
            pname:"蛋糕",
            price:30,
            count:3,
            isChecked:true,
        }]
    },
    getters:{
        totle(state,getters){
            let sum = 0;
            state.cart.map(item=>sum+=item.price*item.count)
            return sum;
        },
    },
    mutations:{
        addGoodsCount(state,payload){
            state.cart[payload].count++;
        },
        mulGoodsCount(state,payload){
            state.cart[payload].count--;
        },
        checkGoods(state,payload){
            state.cart[payload.i].isChecked = payload.checked;
        },
    },
    actions:{
        // context ->当前的store 实例
        // mulGoodsCountAction(context,payload){
        //     // 提交mutation
        //     // context.commit("mulGoodsCount",payload);
        //     setTimeout(()=>{
        //         console.log(context)
        //         context.commit("mulGoodsCount",payload);
        //     },2000)
        // }

        mulGoodsCountAction({commit},payload){
            setTimeout(()=>{
                commit("mulGoodsCount",payload);
            },2000)
        }
    }
}