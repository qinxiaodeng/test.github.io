<template>
    <div>
        <!-- 主显示界面 -->
        <div class="bodyBox">
            <!-- <el-row>
            <el-col :span="24">
                注：只有校级和系级负责人可以修改，系级改系级，校级改全部
            </el-col>
            </el-row> -->
            <el-row>
                <el-form label-width="80px" ref="form" :model="form" class="formBox">
                    <el-col :span="6">
                        <el-form-item label="日期">
                            <el-date-picker type="date" v-model="form.date1" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                    <el-form-item label="系别">
                        <el-select v-model="form.region" placeholder="请选择系别">
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
                    <el-col :span="6">
                    <el-form-item label="公告名称">
                        <el-input></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="3">
                    <el-form-item label-width="40px">
                        <el-button icon="el-icon-search" circle></el-button>
                    </el-form-item>
                    </el-col>
                    <el-col :span="3">
                    <el-form-item>
                        <el-button type="primary">勾选删除</el-button>
                    </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
<!-- 重写表格 -->
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                :row-class-name="tableRowClassName">
                <el-table-column
                type="selection"
                width="50">
                </el-table-column>
                <el-table-column
                type="index"
                label="序号"
                width="110">
                </el-table-column>
                <el-table-column
                prop="teacherId"
                label="教职工号"
                width="160">
                </el-table-column>
                <el-table-column
                prop="teacherName"
                label="教师姓名"
                width="160">
                </el-table-column>
                <el-table-column
                prop="department"
                label="系别"
                width="160">
                </el-table-column>
                <el-table-column
                prop="rightKind"
                label="权限类型"
                width="160">
                </el-table-column>
                <el-table-column
                label="修改权限"
                show-overflow-tooltip>
                <el-button type="text" @click="outerVisible = true">修改</el-button>
                </el-table-column>
            </el-table>
<!-- 弹出框内容 -->
            <el-dialog title="权限修改" :visible.sync="outerVisible">
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
                </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button type="primary" @click="innerVisible = true">确 定</el-button>
            </div>
            </el-dialog>
            <el-dialog
            title="提示"
            :visible.sync="innerVisible"
            width="30%">
            <span>确认修改？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="innerVisible = false">取 消</el-button>
                <el-button type="primary" @click="innerVisible = false;outerVisible = false">确 定</el-button>
            </span>
            </el-dialog>
        </div>
        <!-- 分页工具 -->
        <div class="body_bottom">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-size="7"
            layout="total, prev, pager, next, jumper"
            :total="70">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        teacherId: '201709000',
        teacherName: '刘书刚',
        department: '计算机系',
        rightKind: '系级负责人'
      }, {
        teacherId: '201709000',
        teacherName: '刘书刚',
        department: '计算机系',
        rightKind: '系级负责人'
      }, {
        teacherId: '201709000',
        teacherName: '刘书刚',
        department: '计算机系',
        rightKind: '系级负责人'
      }, {
        teacherId: '201709000',
        teacherName: '刘书刚',
        department: '计算机系',
        rightKind: '系级负责人'
      }, {
        teacherId: '201709000',
        teacherName: '刘书刚',
        department: '计算机系',
        rightKind: '系级负责人'
      }, {
        teacherId: '201709000',
        teacherName: '刘书刚',
        department: '计算机系',
        rightKind: '系级负责人'
      }, {
        teacherId: '201709000',
        teacherName: '刘书刚',
        department: '计算机系',
        rightKind: '系级负责人'
      }],
      multipleSelection: [],
      outerVisible: false,
      innerVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      numberValidateForm: {
        teacherID: '',
        teacherName: '',
        region1: '',
        region2: '',
        date1: '',
        date2: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 设置行背景色
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'row1'
      } else if (rowIndex % 2 === 0) {
        return 'row2'
      }
      return ''
    },
    // 页面跳转
    // 监听pagesize改变
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    // 监听当前页码改变
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style scoped>
/deep/ .el-table .row1 {
  background: #e3ebf5;
}
/deep/ .el-table .row2 {
  background: #fff;
}
.zhushi{
    color: #ff0000;
    margin-left: 50px;
}
.headbox{
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
}
.formBox{
    display: flex;
}
.bodyBox{
    /* width: 80%; */
    /* width: 1000px; */
    margin-left: 50px;
    width: 1000px;
}
.bodyBox table tr{
    height: 55px;
}
.body_title{
    margin-left: 50px;
    width: 1000px;
    height: 55px;
    background-color: #82b4d8;
    display: flex;
    align-items: center;
}
.body_title span{
    font-weight: bold;
}
.word1{
    position: absolute;
    margin-left: 50px;
}
.word2{
    position: absolute;
    margin-left: 800px;
}
.content_box1{
    margin-left: 50px;
    width: 1000px;
    height: 55px;
    background-color: #fff;
    display: flex;
    align-items: center;
}
.content_box2{
    margin-left: 50px;
    width: 1000px;
    height: 55px;
    background-color: #e3ebf5;
    display: flex;
    align-items: center;
}
.body_bottom{
    margin-left: 50px;
    width: 1000px;
    height: 55px;
    background-color: #e3ebf5;
    display: flex;
    align-items: center;
    justify-content: center;
}
.body_bottom span el-button--primary{
    background-color: #82b4d8;
}
.el-dropdown-link {
    cursor: pointer;
    color: #fff;
}

.el-row {
    height: 55px;
}
.el-col {
    border-radius: 4px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
