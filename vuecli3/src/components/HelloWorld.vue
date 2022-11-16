<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{stu}}---{{rev}}</p>
    <button @click="add">{{count}}</button>
    <p @click="toParentFn">{{y}}</p>
    <p @click="toParentFn1">{{y}}</p>
    <Detail />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch,Emit } from "vue-property-decorator";
import Detail from "./Detail.vue";

@Component({
  // 注册局部组件
  components: {
    Detail
  }
})
export default class HelloWorld extends Vue {
  // 直接写在类中作为私有属性 data
  private stu = "xiaoming";
  private str = "abc";
  private count = 1;

  private menu = {
    name: "dacan"
  };

  // 以 get 开头都是计算属性
  get rev() {
    return this.stu
      .split("")
      .reverse()
      .join("");
  }

  // 声明周期周期
  created() {
    console.log("created");
  }

  mounted() {
    this.str = this.str + "!";
    this.menu.name = "晚餐";
  }

  // 普通函数
  add() {
    this.count++;
  }

  // 浅监听 str
  @Watch("str")
  changefn1(newval: string, oldval: string) {
    console.log(`新值是${newval},老值是${oldval}`);
  }

  // 深度监听 menu
  @Watch("menu", { immediate: true, deep: true })
  changefn2(newval: any) {
    console.log(`新值是${JSON.stringify(newval)}`);
  }

  @Prop([Number, String]) readonly y?: number | string;

  @Prop({
    type: String,
    default() {
      return "我是默认值啊";
    },
    required: true, // 必须传入
    validator: function(val) {
      // 校验函数
      return val.length < 20;
    }
  })
  private msg: string | undefined;

  @Emit()
  private toParentFn(){
    console.log("执行")
      return this.msg+'111' // return 的就是传递给父的数据
  }

  @Emit("myFn")
  private toParentFn1(){
    console.log("执行")
      return this.msg+'111' // return 的就是传递给父的数据
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
