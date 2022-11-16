import {Dispatcher} from "flux"
import store from "./store"
import {ADD_ACTION} from "./actions-type"
// 实例化一个dispatcher
let appDispatcher = new Dispatcher();

// dispathcer  注册回调函数 来响应 发出的action
// register 参数就是回调函数，该函数会在 dispatcher 发出action 的时候执行
// 回调函数的action 参数： 发出action dispatch 方法的的参数
appDispatcher.register((action)=>{
    // console.log("发出了action")
    // console.log(action)

    switch(action.type){
        case ADD_ACTION:
            store.add(action.payload);
            store.emit("change");
            break;
        default:
            break;
    }
})


export default appDispatcher