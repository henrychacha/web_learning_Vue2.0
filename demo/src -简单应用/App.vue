<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 对应路径的组件需要渲染的位置 -->
    <!-- <div style="border:1px solid #ccc">
      <router-view/>
    </div> -->

    <!-- 定义在 App.vue 内的会一直出现，和路由路劲没有关系 -->
    <ul class="navs">
      <li><router-link to="/home" active-class="red">首页</router-link></li>
      <li><router-link to="/search" active-class="red">发现</router-link></li>
      <li><router-link to="/order" active-class="red">订单</router-link></li>
      <li><router-link to="/mine" active-class="red">我的</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scope>
*{
  margin: 0;
  padding: 0;
}
#app {
  
}
.navs{
  border-top:1px solid #888;
  position: fixed;
  bottom:0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  list-style: none;
  justify-content: space-around;
}
.navs li{
  /* flex-grow: 1; */
}
.navs li a{
  text-decoration: none;
}
.red{
  color:red;
}
</style>
