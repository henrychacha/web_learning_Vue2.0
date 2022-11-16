<template>
    <div>
        product-{{x}}-{{$route.params.pid}}
        
    </div>
</template>
<script>

export default {
    
    data(){
        return{
            x:this.$route.params.pid,
        }
    },
    
    watch: {
        "$route":function(){
            // console.log('1111');
        }
    },
    mounted() {
        // console.log(this.$route.params)
        console.log("请求数据")
    },
    updated(){
        // console.log('更新了')
        // console.log(this.$route.params.pid)
        this.x = this.$route.params.pid
    },
    // 同一个动态组件被复用不会触发
    beforeRouteEnter (to, from, next) {
        console.log("beforeRouteEnter");
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this` 
        // 因为当守卫执行前，组件实例还没被创建(也就是会在会在mounted前调用),vm -》当前组件实例，
        // 传入的回调函数会在导航的最后异步执行
        next(vm=>console.log(vm.x))
    },
    // 一般的路由切换后，离开的路由对应的组件会被销毁，即将进入的组件会被创建
    // 动态组件被复用的情况,不会执行再次的创建和销毁，而是直接复用
    // 监听从一个动态路由到另一个动态路由的切换，就需要用这个钩子
    beforeRouteUpdate(to, from, next){
        //  console.log(this.$route.params)
        //  console.log(to)
        //  console.log(from,to.params.pid)
        //  this.x = to.params.pid

        console.log("beforeRouteUpdate")
        next()
    },
    // 一般用做离开页面询问
    beforeRouteLeave(to, from, next){
        let  answer= confirm("客官不再看看吗？");
        if(answer){
            next();
        }else{
            next(false);
        }
        
    },
    methods:{

    }
}
</script>