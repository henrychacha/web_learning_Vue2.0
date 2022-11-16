<template>
  <div id="app">
    <p v-for="(val,key) in obj" :key="key">{{key}}:{{val}}</p>
    <button @click="fn">添加b</button>
    <Cart />
  </div>
</template>

<script>
import Cart from './components/Cart'
import {mapState,mapMutations} from "vuex"
export default {
  name: 'App',
  components: {
    Cart
  },
  computed: {
    obj(){
      // Obj 指代的是模块 obj obj 指代的是 Obj state 中obj
      return this.$store.state.Obj.obj;
    }
  },
  methods:{
    //  全局中 addProp 这个mutation 也会触发，不具有 封装性
    // ...mapMutations(["addProp"]),
    // 展开 mutations  Obj模块名/ addProp mutation名
    ...mapMutations({addProp:"Obj/addProp"}),
    fn(){
      this.addProp();
    }
  }
}
</script>

<style>

</style>
