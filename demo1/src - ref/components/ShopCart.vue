<template>
  <div>
    <p>子组件的count: {{count}}</p>
  </div>
</template>
<script>
import CartList from "./CartList";
import CartFooter from "./CartFooter";

export default {
  data(){
    return{
      text:"子组件文本",
      count:1
    }
  },
  components: {
    CartList,
    CartFooter
  },
  methods: {
     fn(){
       this.count++;
     }
  }
};
</script>
<style lang="">
@import url("./../assets/css/demo.css");
</style>