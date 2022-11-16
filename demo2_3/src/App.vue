<template>
  <div id="app">
    <ul style="width:300px;">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/login">登录</router-link>
      </li>
      <li>
        <router-link to="/product/123">/product/123</router-link>
      </li>
      <li>
        <router-link to="/product/233">/product/223</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navs: [
        {
          url: "/",
          text: "主页"
        },
        {
          url: "/login",
          text: "登录"
        }
      ]
    };
  }
};
</script>

<style>
#app {
}
.container {
  padding-left: 30px;
}
</style>
