<template>
  <div class="wrap">
    <ul class="navs">
      <li>
        <router-link to="/index" active-class="red">首页</router-link>
      </li>
      <li>
        <router-link to="/manage" active-class="red">管理</router-link>
      </li>
      <li>
        <router-link to="/role" active-class="red">角色</router-link>
      </li>
      <li>
        <router-link to="/product/123" active-class="red">pid-123</router-link>
      </li>
      <li>
        <router-link to="/product/456" active-class="red">pid-456</router-link>
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
.wrap{
  display: flex;
}
.navs {
  border: 1px solid #888;
  width: 150px;
  height: 500px;
  line-height: 30px;
  list-style: none;
}

.navs li a {
  text-decoration: none;
}
.red {
  color: red;
}
</style>