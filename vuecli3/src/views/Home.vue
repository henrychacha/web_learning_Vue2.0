<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 父组件向子组件传值 -->
    <HelloWorld msg="welcome 0421" :y="1" @to-parent-fn="fn"/>
    <HelloWorld msg="welcome 0421" :y="1" @my-fn="fn1"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    fn(n){
      console.log(n)
    },
    fn1(n){
      console.log(n)
    }
  }
}
</script>
