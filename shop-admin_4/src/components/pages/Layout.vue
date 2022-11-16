<template>
  <el-container class="layout_container">
    <el-aside width="151px">
      <v-side-bar></v-side-bar>
    </el-aside>
    <el-container>
      <el-header class="layout_header">
        <span>admin</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-setting el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        Main
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import SideBar from "./../common/SideBar";

export default {
  components: {
    vSideBar: SideBar
  },
  methods:{
      handleCommand(){
        //   alert("登出")
        this.$router.replace("/login")
      }
  },
  mounted(){
    console.log("layout mounted")
    // localhost:8080/api/getbanner
    // /xyz
    // this.axios.get("/api/getbanner").then(res=>console.log(res))
  }
};
</script>
<style lang="">
.layout_container {
  height: 100%;
}
.layout_header{
    text-align: right;
    padding-right: 20px;
    background: #ccc;
    line-height: 60px;
}
</style>