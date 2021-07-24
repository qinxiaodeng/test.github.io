<template>
<div class="page_container">
    <!-- 页面标志 -->
    <div class="page_logo">
        <img src="../assets/firstPage_images/logo_01.png" alt="">
        <span>大学生创新创业管理平台</span>
        <span class="username">余正秦同学</span>
        <!-- <el-button icon=""></el-button> -->
    </div>
    <div class="mainBox">
        <div class="title">
            <span>修改密码</span>
            <div>
                 <span>余正秦 201709000926</span>
            </div>
        </div>
        <div class="contentBox">
            <el-form :model="dataForm" ref="dataForm" label-width="80px" class="login_form">
                <!-- 原密码 -->
                <el-form-item
                label="原密码"
                prop="oldpassword"
                :rules="[
                { required: true, message: '原密码不能为空'}
                ]">
                <el-input v-model="dataForm.oldpassword" type="password" placeholder="请输入原密码"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item
                label="新密码"
                prop="newpassword1"
                :rules="[
                { required: true, message: '新密码不能为空'}
                ]">
                    <el-input v-model="dataForm.newpassword1" type="password" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item
                label="请确认"
                prop="newpassword2"
                :rules="[
                { required: true, message: '不能为空'}
                ]">
                    <el-input v-model="dataForm.newpassword2" type="password" placeholder="请再次输入新密码"></el-input>
                </el-form-item>
                 <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button size="medium" @click="logout">返回</el-button>
                    <el-button type="primary" size="medium" @click="submitForm('dataForm')">确认</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      // 这是修改密码数据表单的绑定对象
      dataForm: {
        oldpassword: '',
        newpassword1: '',
        newpassword2: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('提交成功!')
          this.$router.push('/login')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
    .page_logo{
        display: flex;
        align-items: center;
        background-color: #0669b2;
        background-size: 100%;
        /* padding-left: 250px; */
        width: 100%;
        height: 90px;
        text-align: right;
    }
    .page_logo span{
        white-space:nowrap;
        font-weight: normal;
        font-size: 25px;
        color: #fff;
        margin-left: 30px;
    }
    .username{
        float: right;
        margin-left: 100%;
        /* display: flex;
        position: absolute;
        transform: translateX(80%); */
    }
    .page_container{
        background-image: url(../assets/Login_images/背景.png);
        min-width: 1170px;
        min-height: 800px;
        height: 100%;
        background-size:100% 100%;
        background-repeat:no-repeat;
        /* border: 1px solid #fff; */
    }
    .mainBox{
        min-width: 330px;
        min-height: 350px;
        width: 40%;
        height: 52%;
        background-color: #e2eff8;
        position: absolute;
        margin-left: 50%;
        transform: translate(-50%);
        margin-top: 10%;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
    }
    .title{
        /* min-width: ; */
        margin-top: 25px;
        width: 80%;
        height: 10%;
        margin-left: 10%;
        border-bottom: 1px solid #096fb8;
        /* display: flex;
        align-items: center; */
    }
    .title span{
        white-space:nowrap;
        font-size: 25px;
        font-weight: bold;
        margin-left: 2%;
        /* margin-bottom: 5%; */
    }
    .title div{
        padding-top: 13px;
    }
    .title div span{
        font-size: 15px;
        font-weight: bold;
    }
    .contentBox{
        margin-top: 2%;
    }
    .login_form {
        margin-top: 9%;
        width: 100%;
        padding: 0;
        box-sizing: border-box;
        padding-left: 10%;
        padding-right: 10%;
    }
    .btns el-button--primary{
        background-color: #03a7ec;
    }
    @media screen and (max-width: 1180px){
        .rightbox{
            width: 300px;
        }
    }
</style>
