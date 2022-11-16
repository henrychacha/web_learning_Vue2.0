<template>
  <div id="app">
    <!-- <AlertBox msg="等待加载中">
      <b slot="info">信息加载中</b>
      <p slot="btn"><button>确认</button></p>
    </AlertBox> -->

    <AlertBox msg="等待加载中">
       <i>匿名内容</i>
       <template v-slot:info>
         <b>信息加载中</b>
       </template>
       <template v-slot:btn>
         <p><button>取消</button><button>确认</button></p>
       </template>
    </AlertBox>

    <!-- 不可以直接在插槽中使用子组件的数据 -->
    <!-- <AlertBox msg="等待加载中">
       <i>{{text}}</i>
    </AlertBox> -->


    <BookList>
      <!-- v-slot 指令的值 名字是自定义 ，代表子组件插入到插槽中的数据 -->
       <template v-slot="a">
         <p>{{a.item.id}}- <span style="color:red;">《{{a.item.book}}》</span> - {{a.item.author}}</p>
       </template>
    </BookList>


    <BookList>
       <template v-slot="props">
         <p> <span style="font-style:italic;">{{props.item.id}}</span>- <span style="color:pink;">{{props.item.book}}</span> - {{props.item.author}}</p>
       </template>
    </BookList>
  </div>
</template>

<script>

import AlertBox from "./components/AlertBox"
import BookList from "./components/BookList"
export default {
  name: 'App',
  components: {
    AlertBox,
    BookList
  },
  methods:{

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
