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
    ...mapState(['obj'])
  },
  methods:{
    ...mapMutations(["addProp"]),
    fn(){
      this.addProp();
    }
  }
}
</script>

<style>

</style>
