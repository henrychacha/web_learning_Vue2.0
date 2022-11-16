<template>
    <div>
        <!-- addCount：自定义事件名称   add处理自定义事件的函数的名称 -->
        <CartList :obj="obj"    @addCount = "add"  @inpCount="inp"/>
        <CartFooter  :totle="totle" />
    </div>
</template>
<script>
import CartList from "./CartList"
import CartFooter from "./CartFooter"
export default {
    components:{
        CartList,
        CartFooter
    },
    methods:{
        // 自定义事件传入的数据
        // 对应$emit 方法的第二个参数
        add(i){
            // console.log("add 触发",i)
            this.obj[i].count++;
        },
        inp(payload){
            // console.log(i,val);
            this.obj[payload.i].count = Number(payload.val)
        }
    },
    computed: {
        totle:function(){
            var sum = 0;
            this.obj.map(item => {
                sum += item.count * item.price;
            })
            return  sum;
        },
    },
    data(){
        return {
            // 使用require
            obj: [{
                    "goodsId": "001",
                    "goodsName": "布偶",
                    "price": 12000,
                    "count": 1,
                    "goodsPic": require("./../assets/img/m1.jpg"),
                    isChecked:true

                }, {
                    "goodsId": "002",
                    "goodsName": "金吉拉",
                    "price": 1900,
                    "count": 2,
                    "goodsPic": require("./../assets/img/m2.jpg"),
                    isChecked:false

                }, {
                    "goodsId": "003",
                    "goodsName": "折耳猫",
                    "price": 3200,
                    "count": 1,
                    "goodsPic": require("./../assets/img/m3.jpg"),
                    isChecked:false

                },],

            // 图片放在  static
            //  obj: [{
            //         "goodsId": "001",
            //         "goodsName": "布偶",
            //         "price": 12000,
            //         "count": 1,
            //         "goodsPic": "static/img/m1.jpg",
            //         isChecked:true

            //     }, {
            //         "goodsId": "002",
            //         "goodsName": "金吉拉",
            //         "price": 1900,
            //         "count": 2,
            //         "goodsPic": "static/img/m2.jpg",
            //         isChecked:false

            //     }, {
            //         "goodsId": "003",
            //         "goodsName": "折耳猫",
            //         "price": 3200,
            //         "count": 1,
            //         "goodsPic": "static/img/m3.jpg",
            //         isChecked:false

            //     },]
        }
    }
}
</script>
<style lang="">
   @import url("./../assets/css/demo.css");
</style>