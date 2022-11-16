import Vue from 'vue'
import Router from "vue-router"
import Login from '../components/pages/Login.vue'
import Layout from '../components/pages/Layout.vue'
import Index from '../components/pages/Index.vue'
import Menu from '../components/pages/Menu.vue'
import Role from '../components/pages/Role.vue'
import User from '../components/pages/User.vue'
import Category from '../components/pages/Category.vue'
import Specs from '../components/pages/Specs.vue'
import Goods from '../components/pages/Goods.vue'
import Member from '../components/pages/Member.vue'
import Banner from '../components/pages/Banner.vue'
import Seckill from '../components/pages/Seckill.vue'
Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/login',component: Login},
        { 
            path: '/',
            component:Layout,
            children:[
                { path:'index',component:Index },
                { path:'menu',component:Menu },
                { path:'role',component:Role },
                { path:'user',component:User},
                { path:'category',component:Category },
                { path:'specs',component:Specs },
                { path:'goods',component:Goods },
                { path:'member',component:Member},
                { path:'banner',component:Banner},
                { path:'seckill',component:Seckill },
                { path:'',redirect:'index' }
            ]
        }
    ]
})

export default router
