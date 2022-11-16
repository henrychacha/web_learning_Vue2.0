<template>
  <div id="app">

    <div class="box"></div>
    <button @click="fn">slideUp</button>
  </div>
</template>

<script>

import ShopCart from "./components/ShopCart"
import $ from "jquery"
export default {
  name: 'App',
  components: {
    ShopCart
  },
  methods:{
    fn(){
      // $(".box").slideUp();
      this.$(".box").slideUp()
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
.box{
  width: 200px;
  height: 200px;
  background: red;
}
</style>
