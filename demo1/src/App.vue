<template>
  <div id="app">
      <button @click="fn">切换</button>

      <!-- 动态的 is 属性 表明 这个组件是一个动态组件 值是一个组件名称的字符串 -->
      <div :is="comName"></div>

      <table>
        <VTr></VTr>
      </table>
  </div>
</template>

<script>

import Teacher from "./components/Teacher"
import Stu from "./components/Stu"
import VTr from "./components/VTr"
export default {
  name: 'App',
  data(){
    return {
      comName:'Stu'
    }
  },
  components: {
    Teacher,
    Stu,
    VTr
  },
  methods:{
    fn(){
      if(this.comName=="Stu"){
        this.comName="Teacher"
      }else{
        this.comName="Stu"
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
