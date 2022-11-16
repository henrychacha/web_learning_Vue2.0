import Vue from "vue"
import Vuex from "vuex"
import Cart from "./module/Cart"
import Obj from "./module/Obj"


Vue.use(Vuex);

export default new Vuex.Store({
    strict:true,
    state:{
        
    },
    getters:{
        
    },
    mutations:{
        addProp(){
            console.log("addProp 全局")
        }
    },
    actions:{
       
    },
    modules:{
        //拥有了两个模块

        //  Obj 模块的名称
        //  模块 的配置
        Obj:{
            //命名空间，使模块具有封装性，只能通过模块调用 mutation
            namespaced: true,
            state:{
                obj:{
                    a:1,
                },
            },
            mutations:{
                addProp (state, payload) {
                    // state.obj.b = 2;
        
                    // state.obj ={
                    //     ...state.obj,
                    //     b:2
                    // }
        
                    Vue.set(state.obj,"b",2)
                }
            }
        },
        Cart
    }
})