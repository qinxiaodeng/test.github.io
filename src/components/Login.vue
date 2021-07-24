<template>
        <div class="login_container">
            <div class="login_logo">
                <img src="../assets/Login_images/登录白标题.png" alt="">
                <span>
                    <p>创新创业项目管理系统</p>
                </span>
            </div>
            <div class="login_box">
                <div class="leftbox"><img width="100%" class="img-responsive" src="../assets/Login_images/创业合作.png" alt=""></div>
                <div class="rightbox">
                    <!-- 头像区域 -->
                    <div class="avator_box">
                        <img src="../assets/Login_images/用户-is.png" style="float:left;margin:8px 8px 0 0" height="50px">
                        <span>用户登录</span>
                    </div>
                    <!-- 登录表单 -->
                    <el-form :model="loginForm" label-width="0px" class="login_form">
                    <!-- 用户名 -->
                    <el-form-item>
                        <el-input v-model="loginForm.username" prefix-icon="el-icon-s-custom" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item>
                        <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <!-- 按钮区域 -->
                    <el-form-item class="btns">
                        <el-button type="primary" size="medium" @click="loginIn">登录</el-button>
                    </el-form-item>
                    </el-form>
                    <span class="showMsg">
                        <a href="#/passwordChange">忘记密码</a>
                    </span>
                </div>
                <div class="clear">
                </div>
            </div>
        </div>
</template>

<script>
export default {
  methods: {
    loginIn () {
      this.$router.push('/platform1')
    }
  },
  data () {
    return {
      // 这是登录数据表单的绑定对象
      loginForm: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
    .login_container {
        min-width: 900px;
        background-image: url(../assets/Login_images/背景.png);
        width: 100%;
        height: 100%;
        background-size:100% 100%;
        background-repeat:no-repeat;
    }
    .login_box{
        width: 100%;
    }
    .clear{
        clear: both;
    }
    .leftbox{
        /* min-width: 300px; */
        width: 40%;
        height: 20%;
        float: left;
        margin-left: 25%;
        margin-top: 4%;
        transform: translate(-50%);
    }
    .rightbox{
        min-width: 250px;
        margin-top: 5%;
        margin-left: 75%;
        transform: translate(-50%);
        padding:2%;
        background: #fff;
        border-radius: 5px;
        position: absolute;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        width: 30%;
        height: 300px;
    }
    .login_logo{
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* position: absolute;
        margin-left: 40%;
        transform: translateX(-50%); */
    }
    .login_logo span{
        white-space:nowrap;
        /* width: 100%; */
        display: flex;
        align-items: center;
        font-weight: 800;
        color: white;
        font-size: 25px;
        margin-left: 30px;
    }
    .avator_box{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #d1e9fa;
    }
    .avator_box span{
        font-weight: bold;
        font-size: 2em;
        color: #178fe6;
    }
    .login_form {
        margin-top: 30px;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
    }
    .btns{
        width: 100%;
    }
    .btns .el-button{
        width:100%;
    }
    .showMsg{
       display: flex;
       float: right;
    }
    /* @media screen and (max-width: 1180px){
        .rightbox{
            width: 300px;
        }
    } */
    /* @media screen and (max-width: 960px){
        .rightbox{
           margin-left: 2px;
        }
    } */
</style>
