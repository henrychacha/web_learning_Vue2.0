<template>
  <div>
    <div class="tit">
        <button @click="clickFn">触发自定义def 事件</button>

      <ul class="t_head">
        <li></li>
        <li>猫咪品种</li>
        <li>单价</li>
        <li>数量</li>
        <li>总价</li>
        <li></li>
      </ul>
    </div>
    <!-- 定义一个容器 -->
    <div class="t_con">
      <ul v-for="(item,index) in obj" :key="index">
        <li class="check">
          <input type="checkbox" />
        </li>
        <li class="goods">
          <img :src="item.goodsPic" alt="buou" />
          <span>{{item.goodsName}}</span>
        </li>
        <li class="price">{{item.price}}元</li>
        <li class="num">
          <!-- 减 ，index 是传入的参数索引-->
          <a href="javascript:;">-</a>
          <!-- 输入 -->
          <input type="text" class="number"  :value="item.count"  @input="inpFn($event,index)"/>
          <!-- 加 -->
          <!-- 通过点击事件触发 组件上的自定义事件 addCount
            $emit: 每一个组件中都存在，触发自己身上的自定义事件
            @params1: 需要触发的自定义事件名称
            @params2: 需要传递的数据
           -->
          <a href="javascript:;" @click='$emit("addCount",index)'>+</a>
        </li>
        <li class="sum">￥{{item.count*item.price}}元</li>
        <li class="del">
          <a href="javascript:;">
            <button>del</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        clickFn(){
            this.$emit("def")
        },
        inpFn(e,i){
            // console.log(e.target.value)
            this.$emit("inpCount",{i,val:e.target.value})
        }
    },
  props: {
    obj: Array
  }
};
</script>