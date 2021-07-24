<template>
    <div class="pagecontainer">
        <div class="mainbox">
                <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                    <el-row>
                        <el-col :span="24">
                        <el-form-item
                            label="公告标题"
                            prop="noticeTitle"
                            :rules="[
                            { required: true, message: '公告标题不能为空'},
                            ]"
                        >
                            <el-input type="noticeTitle" placeholder="请输入标题内容" v-model.number="numberValidateForm.noticeTitle" autocomplete="off"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>
                        <el-form-item
                            label="公告内容"
                            prop="noticeContent"
                            :rules="[
                            { required: true, message: '公告内容不能为空'},
                            ]"
                        >
                            <el-input type="textarea" :rows="10" placeholder="请输入正文内容" v-model.number="numberValidateForm.noticeContent" autocomplete="off"></el-input>
                        </el-form-item>
                    <!-- <div>
                        <el-col :span="24">
                        <el-form-item
                            label="公告内容"
                            prop="noticeContent"
                            :rules="[
                            { required: true, message: '公告内容不能为空'},
                            ]"
                        >
                            <el-input type="noticeContent" placeholder="请输入内容" v-model.number="numberValidateForm.noticeContent" autocomplete="off"></el-input>
                        </el-form-item>
                        </el-col>
                    </div> -->
                    <el-row>
                        <el-col :span="24">
                        <el-form-item>
                            <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            multiple
                            :limit="3"
                            :on-exceed="handleExceed"
                            :file-list="fileList">
                            <el-button size="small" type="primary">添加附件</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传3个以内的文件，且不超过500kb</div>
                            </el-upload>
                        </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item>
                                <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      numberValidateForm: {
        noticeTitle: '',
        noticeContent: ''
      },
      fileList: []
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
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
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
    margin-top: 2%;
    margin-left: 2%;
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
    display: flex;
}
.inputArea2{
    display: flex;
}
</style>
