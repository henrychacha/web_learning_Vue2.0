import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/pages/Home"
import Order from "@/components/pages/Order"
import Mine from "@/components/pages/Mine"
import Search from "@/components/pages/Search"
Vue.use(Router)

export default new Router({
  routes: [
    // 认为是一级路由
    {
      path: '/home',
      component: Home
    },{
      path:"/order",
      component:Order
    },{
      path:"/mine",
      component:Mine
    },{
      path:"/search",
      component:Search
    },{
      path:"/",
      redirect:"/home"
    }
  ]
})
