<template>
  <div id="app">
    <VItem v-for="(item,index) in itemsList" :key="index" :box="item" />
  </div>
</template>

<script>
import VItem from "./components/VItem";

export default {
  name: "App",
  data() {
    return {
      itemsList: [
        {
          pic:
            "http://www.ujiuye.com/uploadfile/2020/0329/20200329033305219.jpg",
          items: [
            { url: "http://www.baidu.com", title: "baidu" },
            { url: "http://www.ujiuye.com/", title: "yjiuye" }
          ]
        },
        {
          pic:
            "http://www.ujiuye.com/uploadfile/2019/0809/20190809052044680.jpg",
          items: [
            { url: "https://www.sina.com.cn/", title: "sina" },
            { url: "https://www.163.com/", title: "wangyi" }
          ]
        }
      ]
    };
  },
  components: {
    // MyCom:MyComponent
    VItem
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 60px;
}
</style>
