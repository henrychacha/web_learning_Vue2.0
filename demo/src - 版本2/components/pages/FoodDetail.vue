<template>
    <div>
        detail-{{$route.params.pid}}
    </div>
</template>
<script>
export default {
    mounted() {
        // 获取动态路由参数
        console.log(this.$route.params.pid)
    },
}
</script>