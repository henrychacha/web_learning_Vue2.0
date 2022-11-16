<template>
    <div class="wrapper">
        
        
        <ul style="width:300px;">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/role">role</router-link></li>
        </ul>
        <div>
            <h2>layout</h2>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    .wrapper{
        display: flex;
    }
</style>