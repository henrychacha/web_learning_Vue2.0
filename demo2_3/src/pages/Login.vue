<template>
    <div>
        <h2>login</h2>
        <button @click="toIndex">product-123</button>
        <router-link to="/product/123">product-123</router-link>
    </div>
</template>
<script>
export default {
    created(){
        // console.log("created")
    },
    mounted() {
        // console.log("mounted")
    },
    beforeRouteLeave(to,from,next){
        // console.log("beforeRouteLeave")
        // next("/abc");    

        // if(to.fullPath=="/abc"){
        //     next();  
        // }else{
        //     next("/abc");
        // }


        let answer = confirm("确认离开吗？");

        if(answer){
            next();
        }else{
            next(false);
        }
    },
    beforeDestroy() {
        console.log("beforeDestory")
    },
    methods:{
        toIndex(){
            this.$router.push({path:"/product/123"});
        }
    }
}
</script>