<template>
  <div id="app">

    <!-- 1.用在 元素上 ，添加 ref 属性， 值就是 标记值-->
    <div ref="el1"  >welcome</div>
    

    <!-- 2.在列表渲染的元素上的 ref，获取的是 一个数组 -->
    <ul>
      <li v-for="(item,index) of arr" :key="index" ref="list">{{ item }}</li>
    </ul>

    <!-- 添加 子组件上 ref- ,可以帮助我们在 父组件中 获取子组件的实例对象 的信息，或者调用它的方法 -->
    <ShopCart ref="child" />
    <button @click="$refs.child.fn()">修改子组件的count</button>
  </div>
</template>

<script>

import ShopCart from "./components/ShopCart"

export default {
  name: 'App',
  beforeMount() {
    console.log(this.$refs.el1)
  },
  mounted() {
    console.log(this.$refs)
    // 通过 $refs 获取添加了 ref 的元素
    console.log(this.$refs.el1);

    //
    console.log(this.$refs.child);
  },
  components: {
    ShopCart
  },
  data(){
    return {
      arr:["瓦尔登湖","时间简史","哈利波特"]
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
