<template>
    <div>
        product-{{$route.params.pid}}
    </div>
</template>
<script>
export default {
    mounted() {
        console.log(this.$route.params.pid)

        // $.ajax("",)
    },
    watch: {
        "$route":function(oldVal,newVal){
            console.log(oldVal,newVal)
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log("product beforeRouteEnter")
        console.log(this);
        next((vm)=>{
            console.log(vm)
        });
    },
    beforeRouteLeave (to, from, next) {
        console.log("product beforeRouteLeave")
        next();
    },
    beforeRouteUpdate(to, from, next){
        console.log("product beforeRouteUpdate")
        next();
    }
}
</script>