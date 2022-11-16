<template>
    <ul>
        <li v-for="(item,index) in items" :key="index"><a :href="item.url">{{item.title}}</a></li>
    </ul>
</template>
<script>
export default {
    props:{
        items:Array
    }
}
</script>