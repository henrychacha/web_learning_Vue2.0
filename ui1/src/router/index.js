import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/pages/Layout'
import Login from '@/components/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout
    },{
      path:"/login",
      component:Login 
    }
  ]
})
