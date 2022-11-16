<template>
  <div class="wapper">
    <el-container class="container">
      <el-aside width="200px">
          <v-side-bar></v-side-bar>
      </el-aside>
      <el-container>
        <el-header>
          Header
          <i class="el-icon-setting"></i>
        </el-header>
        <el-main>
          Main-
          <el-button type="success" icon="el-icon-search" :circle="true" class="pink" @click="clickFn"></el-button>
          <el-table :data="tableData" border style="width: 100%" v-loading="loading">
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>

            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column prop="age" label="年龄"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SideBar from "./../common/SideBar"

export default {
    components:{
        VSideBar:SideBar
    },
    methods: {
        clickFn(){
            this.$message("提示信息")
        }
    },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  data() {
    return {
      loading: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          age: 20
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          age: 20
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          age: 20
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          age: 21
        }
      ]
    };
  }
};
</script>
<style lang="" scoped>
.wapper,
.container {
  height: 100%;
}
.pink {
  background-color: pink;
  border-color: pink;
}
.el-header,
.el-footer {
  background-color: pink;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>