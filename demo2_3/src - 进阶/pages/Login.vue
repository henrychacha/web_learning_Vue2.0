<template>
    <div>
        <h2>login</h2>
        <button @click="toIndex">去主页</button>
    </div>
</template>
<script>
export default {
    mounted() {
        // this.$router  全局路由器实例对象，每一个组件都可以访问到
        // console.log(this.$router)
        this.timer = setInterval(()=>{
            // 编程式导航
            // 向 history 推入一项新的访问记录，可以返回
            // this.$router.push("/");

            // 向 history 推入一项新的访问记录，替换当前的访问记录，不可以返回
            // this.$router.replace("/");
            // this.$router.replace({path:"/"});
        },3000);
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods:{
        toIndex(){
            // this.$router.replace("/");
            // 回退或者前进若干个记录
            this.$router.go(-1);
        }
    }
}
</script>