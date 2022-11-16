import appDispatcher from "./AppDispatcher"
import {ADD_ACTION} from "./actions-type"


// 创建一个 action 的函数
function creator(text){
    return{
        //type:ACTION  类型
        type:ADD_ACTION,
        payload:text
    }
}

function creatorDel(id){
    return{
        type:"DEL_ACTION",
        payload:id
    }
}

let actions = {
    // 视图 中发出的action 
    sendAction(text){
        // 修改store 中的数据


        //  用户在视图中 发出的action 是一个对象，
        //对象
        // let addAction = {
        //     //type:ACTION  类型
        //     type:ADD_ACTION,
        //     payload:"睡觉"
        // }

        //  dispatcher  发出action
        appDispatcher.dispatch(creator(text));
    },
    delAction(id){
        appDispatcher.dispatch(creatorDel(id));
    },
    toggleAction(id){
        appDispatcher.dispatch({
            type:"TOGGLE_ACTION",
            payload:id
        })
    }
}

export default actions