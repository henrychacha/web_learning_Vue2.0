<template>
    <div>
        <img :src="pic" alt="" @click="fn">
    </div>
</template>
<script>
export default {
    props:{
        pic:String
    },
    methods:{
        fn(){
            alert("图片被点击")
        }
    }
}
</script>
