import Vue from "vue"
import Router from "vue-router"
import Login from "@/components/Login"
import Layout from "@/components/Layout"
import Product from "@/components/Product"
Vue.use(Router);

let router = new Router({
    // 默认是hash 模式
    mode:"hash",
    // mode:"history",
    routes:[{
        // 路由匹配地址
        path:"/",
        name:"index",
        // 渲染组件，router-view 组件的渲染内容
        component:Layout
    },{
        path:"/login",
        component:Login
    },{
        // 冒号后面的pid 就是动态路由参数的名称
        path:"/product/:pid",
        component:Product
    },{
        path:"*",
        redirect:"/"
    }]
})

export default router