<template>
  <div class="hello">
    <ul>
      <li v-for="item in cart" :key="item.id">{{item.pname}}-{{item.price}}- 
        
        <button >-</button> {{item.count}} <button @click="$store.commit('addCount',1)">+</button></li>
    </ul> 
    <p>{{totle}}</p>
    <!-- <p>{{getPro}}</p> -->
  </div>
</template>

<script>
// import Vuex from "vuex"
// let mapState = Vuex.mapState;

import {mapState,mapGetters} from "vuex"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
  computed: {
    ...mapState(["cart"]),
    // totle(){
    //   return this.$store.getters.totle;
    // },
    ...mapGetters(["totle"]),

    // 改名
    // ...mapGetters({
    //   totle1:"totle"
    // }),
    // getPro(){
    //   return this.$store.getters.getProByPid("001");
    // }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
