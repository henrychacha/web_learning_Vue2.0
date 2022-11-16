<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {mapState} from "vuex"


export default {
  name: 'App',
  // computed: mapState(["msg","count"]),
  computed:{

  },
  components: {
    HelloWorld
  },
  methods:{
    fn(){
      this.$store.commit("addCount",5);

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
