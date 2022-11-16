import Vue from "vue"
import Router from "vue-router"
import Login from "@/pages/Login"
import Layout from "@/pages/Layout"
import Product from "@/pages/Product"
import Home from "@/pages/Home"
import Role from "@/pages/Role"
import NotFound from "@/pages/NotFound"
Vue.use(Router);

let router = new Router({
    // 默认是hash 模式
    mode:"hash",
    routes:[{
        // 路由匹配地址
        path:"/login",
        name:"login",
        // 渲染组件，router-view 组件的渲染内容
        component:Login
    },{
        path:"/",
        component:Layout,
        children:[{
                path:"",
                // 渲染组件，router-view 组件的渲染内容
                component:Home
        },{
                path:"role",
                // 渲染组件，router-view 组件的渲染内容
                component:Role,
        }]
    },{
        path:"*",
        component:NotFound
    }]
})


// let router = new Router({
//     // 默认是hash 模式
//     mode:"hash",
//     routes:[{
//         // 路由匹配地址
//         path:"/login",
//         name:"login",
//         // 渲染组件，router-view 组件的渲染内容
//         component:Login
//     },{
//         path:"/home",
//         component:Layout,
//         children:[{
//                 path:"",
//                 // 渲染组件，router-view 组件的渲染内容
//                 component:Home
//         },{
//             // 嵌套路由的path 一般不加 /，防止作为一级路由
//                 path:"role",
//                 // 渲染组件，router-view 组件的渲染内容
//                 component:Role
//         }]
//     },{
//             path:"/",
//             redirect:"/home"
//     },{
//         path:"*",
//         component:NotFound
//     }]
// })

export default router