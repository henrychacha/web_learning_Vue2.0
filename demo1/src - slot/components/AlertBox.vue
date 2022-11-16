<template>
    <div class="box">
        <h2>信息提示</h2>
        <!-- 匿名插槽  name="default" -->
        <slot></slot>
        <slot name="info"></slot>
        <slot name="btn"></slot>
    </div>
</template>
<script>
export default {
    props:{
        msg:String
    },
    data(){
        return {
            text:"文本"
        }
    }
}
</script>
<style lang="" scope>
    .box{
        border: 2px solid #ccc;
        border-radius: 5px;
        width: 200px;
        height: 200px;
    }
</style>