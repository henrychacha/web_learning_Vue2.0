<template>
    <div>
        <h2 class="red">{{msg}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:"我的组件"
        }
    }
}
</script>
<style >
    .red{
        color: red;
    }
</style>