<template>
  <div>
      <p>{{msg}}</p>
    <button @click="fn">触发 abc</button>
  </div>
</template>
<script>
import CartList from "./CartList";
import CartFooter from "./CartFooter";
import Bus from "./../bus";
export default {
  inject: ["msg"],
  components: {
    CartList,
    CartFooter
  },
  methods: {
    fn() {
      //   Bus.$emit("abc");

      this.$bus.$emit("abc");
    }
  }
};
</script>
<style lang="">
@import url("./../assets/css/demo.css");
</style>