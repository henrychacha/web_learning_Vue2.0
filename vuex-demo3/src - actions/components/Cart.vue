<template>
    <div>
        <v-cart-list></v-cart-list>
        <v-cart-footer></v-cart-footer>
    </div>
</template>
<script>
import CartList from "./CartList"
import CartFooter from "./CartFooter"
export default {
    components:{
        vCartList:CartList,
        vCartFooter:CartFooter
    }
}
</script>