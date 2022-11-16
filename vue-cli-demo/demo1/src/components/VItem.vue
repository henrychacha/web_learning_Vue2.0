<template>
    <div class="item">
        <h2>外层组件</h2>
        <VImgBox :pic="box.pic"></VImgBox>
        <VNewsList 
            :items= "box.items"></VNewsList>
    </div>
</template>
<script>
import VImgBox from "./VImgBox"
import VNewsList from "./VNewsList"
export default {
    props:{
        box:Object
    },
    components:{
        VImgBox,
        VNewsList
    }
}
</script>
<style lang="">
        .item {
            width: 360px;
            border: 1px solid black;
            background-color: #eee;
            padding: 20px;
        }
</style>