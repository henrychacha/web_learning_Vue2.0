import Vue from "vue"
import Router from "vue-router"
// import Login from "@/pages/Login"
import Product from "@/pages/Product"
import Layout from "@/pages/Layout"
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
        component:()=>import("@/pages/Login"),
        // component:Login,
        beforeEnter(to,from,next){
            console.log("login beforeEnter")
            next();
        }
    },{
        path:"/product/:pid",
        name:"product",
        component:Product
    },{
        path:"/abc",
        component:NotFound
    },{
        path:"/",
        component:Layout,
    },]
})

// router.beforeEach((to,from,next)=>{
//     console.log("router.beforeEach");
//     if(to.fullPath=="/login"){
//         // next(false);

//         next("/product/123");
//     }else{
//         next();
//     }
// })

// 这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
router.beforeResolve((to,from,next)=>{
    console.log("beforeResolve");
    next()
})

router.afterEach((to,from)=>{
    console.log("afterEach");
})

export default router