<template>
  <div>
    <ul class="navs">
      <li>
        <router-link to="/index/home" active-class="red">首页</router-link>
      </li>
      <li>
        <router-link to="/index/search" active-class="red">发现</router-link>
      </li>
      <li>
        <router-link to="/index/order" active-class="red">订单</router-link>
      </li>
      <li>
        <router-link to="/index/mine" active-class="red">我的</router-link>
      </li>
    </ul>
    <!-- 路由配置的 index 的子路由 children 里面的路由 会渲染在这里 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
* {
  margin: 0;
  padding: 0;
}
.navs {
  border-top: 1px solid #888;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  list-style: none;
  justify-content: space-around;
}
.navs li {
  /* flex-grow: 1; */
}
.navs li a {
  text-decoration: none;
}
.red {
  color: red;
}
</style>