<template>
    <div class="pagecontainer">
        <div class="mainbox">
            <div class="headbox">
                <span>
                    <p>添加用户</p>
                </span>
            </div>
            <!-- <table>
                <tr>
                    <td>
                        教职工号
                    </td>
                </tr>
            </table> -->
            <div class="firstbox">
                <el-form ref="formRef" :model="form" label-width="80px">
                    <el-form-item label="教职工号" prop="teacherID">
                    <el-input v-model="form.teacherID"></el-input>
                    </el-form-item>
                    <el-form-item label="教师姓名" style="margin-left:18px" prop="teacherName">
                    <el-input v-model="form.teacherName"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="secondbox">
                <el-form ref="formRef" :model="form" label-width="80px">
                    <el-form-item label="系别" prop="region1">
                    <el-select v-model="form.region1" placeholder="请选择系别">
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
                    <el-form-item label="权限类别" prop="region2">
                    <el-select v-model="form.region2" placeholder="请选择类别">
                        <el-option label="学生" value="01"></el-option>
                        <el-option label="系级负责人" value="02"></el-option>
                        <el-option label="校级负责人" value="03"></el-option>
                    </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <div class="thirdBox">
                <el-form ref="formRef" :model="form" label-width="80px">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('formRef')">提交</el-button>
                        <el-button @click="resetForm('formRef')">重置</el-button>
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
      // 这是登录数据表单的绑定对象
      form: {
        teacherID: 'li',
        teacherName: '',
        region1: '',
        region2: ''
      },
      formRules: {
        teacherID: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        teacherName: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
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
.firstbox .el-form{
    display: flex;
}
.secondbox{
    height: 50px;
    display: flex;
    align-items: center;
    padding: 2%;
}
.secondbox .el-form{
    display: flex;
}
.thirdBox{
    display: flex;
    justify-content: center;
}
</style>
