import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/pages/Home"
import Order from "@/components/pages/Order"
import Mine from "@/components/pages/Mine"
import Search from "@/components/pages/Search"
import Layout from "@/components/pages/Layout"
import Food from "@/components/pages/Food"
import Detail from "@/components/pages/FoodDetail"
Vue.use(Router)

export default new Router({
  routes: [
    // 认为是一级路由
    {
      path: '/index',
      component: Layout,
      children:[{
        path:"/index/home",
        component:Home
      },{
        path:"order",
        // path:"/index/order",
        component:Order
      },{
        path:"search",
        component:Search
      },{
        path:"mine",
        component:Mine
      },{
        path:"",
        redirect:"/index/home"
      }]
    },{
      path:"/food",
      component:Food
    },{
      // 命名路由
      // 动态路由
      path:"/detail/:pid",
      name:"detail",
      component:Detail
    },{
      path:"/",
      redirect:"/index"
    }
  ]
})
