<template>
  <div class="login_bg">
    <div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="form_container"
      >
        <h2>登录</h2>
        <el-form-item prop="username" label-width="0px">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" label-width="0px">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ],
        password:[
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted(){
    // console.log(this.http.post)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
            //   alert("submit!");


            //params1 : 提交路径
            // params2: 参数
            this.http.post("/api/userlogin",this.ruleForm).then((res)=>{
                console.log(res)
                if(res.code==200){

                  sessionStorage.setItem("list",JSON.stringify(res.list));
                  sessionStorage.setItem("token",res.list.token)
                  // 登录成功进行跳转
                  this.$router.replace("/index")
                }else{
                  //  登录失败显示错误信息
                  this.$message(res.msg)
                }
            }).catch(err=>{
              console.log(err)
              this.$message(err.msg)
            })

            
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }
};
</script>
<style lang="">
.login_bg {
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(left, #563443, #413a53, #2f3d60);
}
.form_container {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -150px 0 0 -150px;
}
.form_container h2 {
  color: #fff;
  margin: 20px 0;
  text-align: center;
}
.el-button {
  width: 300px;
}
</style>