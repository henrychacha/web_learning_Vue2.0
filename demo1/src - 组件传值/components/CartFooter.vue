<template>
    <ul class="t_foot">
        <li class="ck">
            <input type="checkbox" >
            <span class="truech">全选</span>
            <span class="falsech">取消全选</span>
        </li>
        <li class="sumnum">
            <!-- 总价 -->
            <p class="money">Total:￥<i>{{totle}}</i>元</p>
            <p class="all"><a href="javascript:;">结算</a></p>
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        totle:Number
    }
}
</script>