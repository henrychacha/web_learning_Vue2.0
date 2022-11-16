<template>
  <div>
    <table width="500" border="1">
      <tr>
        <td></td>
        <td>商品</td>
        <td>价格</td>
        <td>数量</td>
        <td>小计</td>
      </tr>
      <tr v-for="(item,index) in cart" :key="item.pid">
        <td> <input type="checkbox" :checked="item.isChecked" @change="checked(index,$event)"> </td>
        <td>{{item.pname}}</td>
        <td>{{item.price}}</td>

        <td>
          <button @click="mul(index)">-</button>
          <span>{{item.count}}</span>
          <button @click="add(index)">+</button>
        </td>

        <td>{{item.count*item.price}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["cart"])
  },
  methods: {
    ...mapMutations({ addGoodsCount: "addGoodsCount",mulGoodsCount:"mulGoodsCount",checkGoods:"checkGoods" }),
    add(i) {
      this.addGoodsCount(i);
    },
    mul(i){
      this.mulGoodsCount(i);
    },
    checked(i,e){
        // console.log(i,e.target.checked)
        this.checkGoods({
            i,
            checked:e.target.checked
        })
    }
  }
};
</script>