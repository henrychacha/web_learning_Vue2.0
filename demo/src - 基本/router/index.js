import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/components/Login"
Vue.use(Router)

export default new Router({
  routes: [
    // 认为是一级路由
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:"/login",
      component:Login
    }
  ]
})
