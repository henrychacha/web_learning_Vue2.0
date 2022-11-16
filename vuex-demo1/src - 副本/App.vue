<template>
  <div id="app">
    <button @click="fn">{{count}}</button>
    {{$store.state.count}}
    <!-- msg1-{{msg1}} -->
    msg-{{msg}}
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {mapState} from "vuex"

/*
  {
    msg:function(){
      return this.$store.state.msg;
    }
  }

*/
console.log(mapState(["msg","count"]))
// export default {
//   name: 'App',
//   computed: {
//     // count(){
//     //   return this.$store.state.count;
//     // },
//     // msg1(){
//     //   return this.$store.state.msg;
//     // },
//     msg:function(){
//       return this.$store.state.msg;
//     },
//     // ...mapState(["msg"])

//   },
//   components: {
//     HelloWorld
//   }
// }

export default {
  name: 'App',
  // computed: mapState(["msg","count"]),
  computed:{
    // mapState 辅助函数，会返回一个对象，
    // 如果传入数组字符串为参数，返回对象中就 会有同名的方法，这个方法会返回 vuex state 同名状态
    // 比如 "msg" 意味着 添加了一个计算属性，它会返回 vuex state 中msg
    ...mapState(["msg","count"]),
    // ...mapState({
    //   // state: ->this.$store.state
    //   msg1:(state)=>{
    //     return state.msg
    //   },
    //   count:state=>state.count,
    // })
  },
  components: {
    HelloWorld
  },
  methods:{
    fn(){
      this.$store.commit("addCount",5);

      // this.$store.commit({
      //   type:"addCount",
      //   n:5
      // })
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
