<template>
    <div>
        <form action="" @submit.prevent="subFn">
            <p>用户名：<input type="text" v-model="userName"></p>
            <p>密码：<input type="text" v-model="pwd"></p>
            <p><button>登录</button></p>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userName:"",
            pwd:""
        }
    },
    methods:{
        subFn(){
            let user = {
                userName:this.userName,
                pwd:this.pwd
            }
            sessionStorage.setItem("user",JSON.stringify(user));
            this.$router.replace("/index")
        }
    }

}
</script>