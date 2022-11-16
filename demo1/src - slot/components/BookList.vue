<template>
    <div>
        <div v-for="(item,index) in books" :key="index">
            <!-- 向插槽内 注入数据 数据名称就是 item -->
            <slot :item="item"></slot>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            books:[{
                id:1,
                book:"十里桃花",
                author:"建林"
            },{
                id:2,
                book:"盘龙",
                author:"西红柿"
            },{
                id:3,
                book:"盗墓笔记",
                author:"南派三叔"
            }]
        }
    }
}
</script>