import Vue from 'vue'
import Router from 'vue-router'

import Index from "@/components/pages/Index"
import Manage from "@/components/pages/Manage"
// import Role from "@/components/pages/Role"
import Product from "@/components/pages/Product"
import Layout from "@/components/pages/Layout"
import Login from "@/components/pages/Login"

Vue.use(Router)

let router = new Router({
  routes: [
    // 认为是一级路由
    {
      path: '/',
      component: Layout,
      beforeEnter(to,from,next){
        console.log("根目录 独享")
        next();
      },
      children:[{
        path:"index",
        component:Index
      },{
        path:"manage",
        component:Manage
      },{
        path:"role",
        component:()=>import('@/components/pages/Role'),
        beforeEnter(to,from,next){
          console.log(to,'-------',from)
          console.log("role 独享")
          next();
        }
      },{
        path:"product/:pid",
        component:Product,
        beforeEnter(to,from,next){
          console.log(to,'-------',from)
          console.log("product 独享")
          next();
        }
      },{
        path:"",
        redirect:"index"
      }]
    },{
      path:"/login",
      component:Login
    }
  ]
})

// 全局守卫，定义在全局路由器对象上，所有导航 都会触发这个守卫
router.afterEach((to,from,next)=>{

  console.log('afterEach')

})
router.beforeResolve((to,from,next)=>{
  console.log('beforeResolve')
  next()
})

router.beforeEach((to,from,next)=>{
  // next();
  console.log('全局守卫beforeEach')
  let user = sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")):"";
  //用户已登录
  if(user){
    //用户访问的不是login 登录页
    if(to.path!="/login"){
      next();
    }else{
      next("/");
    }
  }else{
    // 没登录 访问登录页
    if(to.path=="/login"){
      next();
    }else{
      next("/login");
    }
  }
})


export default router
