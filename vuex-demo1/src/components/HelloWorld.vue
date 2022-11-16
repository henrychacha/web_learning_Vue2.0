<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in cart" :key="item.id">{{item.pname}}-{{item.price}}- 
        
        <button >-</button> {{item.count}} <button @click="add(index)">+</button></li>

        <!-- <li v-for="(item,index) in cart" :key="item.id">{{item.pname}}-{{item.price}}- 
        
        <button >-</button> {{item.count}} <button @click="addfn(index)">+</button></li> -->
    </ul> 
    <p>{{totle}}</p>
    <!-- <p>{{getPro}}</p> -->
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from "vuex"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totle"]),
  },
  methods:{
    // add(i){
    //   // 提交 add 这个mutation,payload 就是索引
    //   this.$store.commit("add",i)
    // },
    ...mapMutations(["add"]),
    // addfn(i){
    //   this.add(i);
    // }
  }
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
