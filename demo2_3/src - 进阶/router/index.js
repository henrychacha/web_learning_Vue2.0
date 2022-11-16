import Vue from "vue"
import Router from "vue-router"
import Login from "@/pages/Login"
import Product from "@/pages/Product"
import Header from "@/pages/Header"
import Main from "@/pages/Main"
import NotFound from "@/pages/NotFound"
Vue.use(Router);

let router = new Router({
    // 默认是hash 模式
    mode:"hash",
    routes:[{
        // 路由匹配地址
        path:"/login",
        alias:"/login1",
        // 使用name 属性给name 命名
        name:"login",
        // 渲染组件，router-view 组件的渲染内容
        component:Login
    },{
        path:"/",
        components:{
            a:Header,
            b:Main
        },
    },{
        path:"/product/:pid",
        name:"product",
        component:Product
    },{
        path:"*",
        component:NotFound
    }]
})

export default router