<template>
  <div id="app">
    <!-- 导航组件  to 导航地址 -->
    <!-- <ul> 
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/login">登录页</router-link></li>
    </ul> -->

    <ul>
      <li v-for="(item,index) in navs" :key="index" >
        <router-link :to="item.url">{{item.text}}</router-link>
      </li>
      <!-- to 作为动态属性 ，值可以是对象 -->
      <!-- <li><router-link :to="{name:'index'}">主页</router-link></li> -->
      <li><router-link :to="{path:'/'}">主页</router-link></li>
    </ul>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      navs:[{
        url:"/",
        text:"主页"
      },{
        url:"/login",
        text:"登录"
      }]
    }
  }
}
</script>

<style>
#app {
  display: flex;
}
.container{
  padding-left:30px;
}
</style>
