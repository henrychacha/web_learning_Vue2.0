<template>
    <div>
        Home
        <button @click="toFood">美食</button>
        
    </div>
</template>
<script>
export default {
    methods:{
        toFood(){
            // this.$router.push("/food")
            this.$router.replace("/food")
        }
    }
}
</script>