<template>
    <div class="page_container">
        <div class="bodyBox">
            <!-- 重写表格 -->
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                :row-class-name="tableRowClassName"
                header-align="center">
                <el-table-column
                type="index"
                label="序号"
                width="60">
                </el-table-column>
                <el-table-column
                prop="docName"
                label="文档名称"
                width="180">
                </el-table-column>
                <el-table-column
                prop="programKind"
                label="项目类型"
                width="180">
                </el-table-column>
                <el-table-column
                prop="uploadMen"
                label="上传人员"
                width="180">
                </el-table-column>
                <!-- 上传时间 -->
                <el-table-column
                label="上传时间"
                width="180">
                <template slot-scope="scope">{{ scope.row.uploadDate }}</template>
                </el-table-column>
                <el-table-column
                label="下载"
                show-overflow-tooltip>
                <el-button type="text">下载</el-button>
                </el-table-column>
            </el-table>
            <!-- 底部框 -->
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
            <br>
            <br>
            <!-- 格式下载 -->
            <span><el-button type="text" @click="dialogFormVisible = true">格式下载</el-button></span>
            <!-- 对话框部分 -->
            <el-dialog title="格式下载" :visible.sync="dialogFormVisible">
                <el-form :model="form" ref="form" label-width="80px" class="demo-ruleForm">
                    <el-row>
                        <!-- <el-col :span="4">
                            <span>选择日期：</span>
                        </el-col> -->
                        <el-form-item label="选择日期">
                        <el-col :span="10">
                        <el-form-item
                            label="开始时间"
                            prop="startTime"
                            :rules="[
                            { required: true, message: '开始时间不能为空'},
                            ]"
                        >
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        </el-col>
                        <el-col :span="10">
                        <el-form-item
                            label="结束时间"
                            prop="endTime"
                            :rules="[
                            { required: true, message: '结束时间不能为空'},
                            ]"
                        >
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        </el-col>
                        </el-form-item>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                        <el-form-item
                            label="选择格式"
                            prop="region1"
                            :rules="[
                            { required: true, message: '格式不能为空'},
                            ]"
                        >
                            <el-select v-model="form.region1" placeholder="请选择格式" style="width: 100%;">
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
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                        <el-form-item
                            label="选择项目"
                            prop="region2"
                            :rules="[
                            { required: true, message: '项目名不能为空'},
                            ]"
                        >
                            <el-select v-model="form.region2" placeholder="请选择项目">
                                <el-option label="学生" value="01"></el-option>
                                <el-option label="系级负责人" value="02"></el-option>
                                <el-option label="校级负责人" value="03"></el-option>
                            </el-select>
                        </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      tableData: [{
        docName: '3D游戏开发',
        uploadMen: '张三',
        uploadDate: '2020/10/12',
        programKind: '校级'
      }, {
        docName: '3D游戏开发',
        uploadMen: '张三',
        uploadDate: '2020/10/12',
        programKind: '校级'
      }, {
        docName: '3D游戏开发',
        uploadMen: '张三',
        uploadDate: '2020/10/12',
        programKind: '校级'
      }],
      form: {
        name: '',
        region1: '',
        region2: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
    onSubmit () {
      console.log('submit!')
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
.bodyBox{
    /* width: 80%; */
    /* width: 1000px; */
    margin-left: 50px;
    width: 1000px;
}
.bodyBox table tr{
    height: 55px;
}
.body_bottom{
    /* margin-left: 50px; */
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
.el-dialog .el-row{
    height: 60px;
}
</style>
