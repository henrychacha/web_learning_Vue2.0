<template>
  <div id="app">
    <ShopCart />

    
  </div>
</template>

<script>

import ShopCart from "./components/ShopCart"

import Bus from "./bus"
console.log(Bus)
export default {
  provide:{
    msg:"hello"
  },
  name: 'App',
  mounted() {
    // Bus.$on("abc",()=>{
    //   console.log("abc 执行了")
    // })

    this.$bus.$on("abc",()=>{
      console.log("abc 执行了")
    })
  },
  methods:{
    fn(){
      // Bus.$emit("abc")

      this.$bus.$emit("abc")
    }
  },
  components: {
    ShopCart
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
