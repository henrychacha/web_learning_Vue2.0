import {EventEmitter} from  "events"

// EventEmitter.prototype  包含 自定义事件相关的各种方法
console.log(EventEmitter.prototype)

let store = {
    // 给store 对象添加 自定义事件 系统的相关
    ...EventEmitter.prototype,
    // 数据
    todoList:["吃饭"],

    //  获取数据的方法
    getTodoList(){
        return this.todoList;
    },
    // 修改数据的方法
    add(todo){
        this.todoList.push(todo)
    },
    // 绑定自定义事件,参数 会被作为自定义事件 change 的事件处理函数
    bindChange(cb){
        // 给 store 绑定自定义事件 change，cb 作为 自定义事件  change 的事件处理函数 
        this.on("change",cb)
    },
}

export default store