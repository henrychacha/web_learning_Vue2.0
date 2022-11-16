<template>
  <div id="app">
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
    <router-view></router-view>
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

}
.container{
  padding-left:30px;
}
</style>
