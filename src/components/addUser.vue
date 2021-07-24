<template>
    <div class="pagecontainer">
        <div class="mainbox">
            <div class="headbox">
                <span>
                    <p>添加用户</p>
                </span>
            </div>
            <div class="firstbox">
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                    <div class="inputArea1">
                        <el-col :span="11">
                        <el-form-item
                            label="教职工号"
                            prop="teacherID"
                            :rules="[
                            { required: true, message: '教职工号不能为空'},
                            { type: 'number', message: '教职工号必须为数字值'}
                            ]"
                        >
                            <el-input type="teacherID" v-model.number="numberValidateForm.teacherID" autocomplete="off"></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="11">
                        <el-form-item
                            label="教师姓名"
                            prop="teacherName"
                            :rules="[
                            { required: true, message: '教师姓名不能为空'},
                            ]"
                        >
                            <el-input type="teacherName" v-model.number="numberValidateForm.teacherName" autocomplete="off"></el-input>
                        </el-form-item>
                        </el-col>
                    </div>
                    <div class="inputArea2">
                        <el-col :span="11">
                        <el-form-item
                            label="系别"
                            prop="region1"
                            :rules="[
                            { required: true, message: '系别不能为空'},
                            ]"
                        >
                            <el-select v-model="numberValidateForm.region1" placeholder="请选择系别" style="width: 100%;">
                                <el-option label="电力工程系" value="01"></el-option>
                                <el-option label="动力工程系" value="02"></el-option>
                                <el-option label="电子与通信工程系" value="03"></el-option>
                                <el-option label="机械工程系" value="04"></el-option>
                                <el-option label="环境科学与工程系" value="05"></el-option>
                                <el-option label="经济管理系" value="06"></el-option>
                                <el-option label="法政系" value="07"></el-option>
                                <el-option label="自动化系" value="08"></el-option>
                                <el-option label="计算机系" value="09"></el-option>
                                <el-option label="英语系" value="10"></el-option>
                            </el-select>
                        </el-form-item>
                        </el-col>
                        <el-col :span="11">
                        <el-form-item
                            label="权限类型"
                            prop="region2"
                            :rules="[
                            { required: true, message: '权限类型不能为空'},
                            ]"
                        >
                            <el-select v-model="numberValidateForm.region2" placeholder="请选择权限类型">
                                <el-option label="学生" value="01"></el-option>
                                <el-option label="系级负责人" value="02"></el-option>
                                <el-option label="校级负责人" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                        </el-col>
                    </div>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
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
      numberValidateForm: {
        teacherID: '',
        teacherName: '',
        region1: '',
        region2: '',
        date1: '',
        date2: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('提交成功!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
.pagecontainer{
    width: 100%;
    height: 100%;
    min-width: 600px;
}
.mainbox{
    min-width: 500px;
    margin-top: 5%;
    margin-left: 33%;
    transform: translate(-50%);
    background: #fff;
    border-radius: 1px;
    position: absolute;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    width: 45%;
    height: 400px;
}
.headbox{
    width: 100%;
    height: 50px;
    background-color: #cde1f0;
    display: flex;
    align-items: center;
}
.headbox span{
    font-weight: bold;
    font-size: 20px;
    margin-left: 2%;
    white-space: nowrap;
    /* font-size: 20px; */
    /* margin-left: 2%; */
}
.firstbox{
    height: 50px;
    margin-top: 4%;
    display: flex;
    align-items: center;
    padding: 2%;
}
.inputArea1{
    margin-top: 120px;
    display: flex;
}
.inputArea2{
    display: flex;
}
</style>
