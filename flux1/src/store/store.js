import {EventEmitter} from  "events"

// EventEmitter.prototype  包含 自定义事件相关的各种方法
console.log(EventEmitter.prototype)
let id = 1;

let store = {
    // 给store 对象添加 自定义事件 系统的相关
    ...EventEmitter.prototype,
    // 数据
    todoList:[{todo:"吃饭",id:1,checked:false}],

    //  获取数据的方法
    getTodoList(){
        return this.todoList;
    },
    // 未完成
    getTodo(){
        return this.todoList.filter(item=>!item.checked);
    },
    getDone(){
        return this.todoList.filter(item=>item.checked);
    },
    // 修改数据的方法
    add(todo){
        id++;
        this.todoList.push({todo,id,checked:false})
    },
    //  删除的方法
    del(id){
        let index = this.todoList.findIndex(item=>item.id===id);
        this.todoList.splice(index,1)
    },
    toggle(id){
        let index = this.todoList.findIndex(item=>item.id===id);
        this.todoList[index].checked = !this.todoList[index].checked;
    },
    // 绑定自定义事件,参数 会被作为自定义事件 change 的事件处理函数
    bindChange(cb){
        // 给 store 绑定自定义事件 change，cb 作为 自定义事件  change 的事件处理函数 
        this.on("change",cb)
    }
}

export default store