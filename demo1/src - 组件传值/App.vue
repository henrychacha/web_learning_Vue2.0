<template>
  <div id="app">
    <ShopCart />
  </div>
</template>

<script>

import ShopCart from "./components/ShopCart"
export default {
  name: 'App',
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
