<template>
    <div class="page_container">
        <div class="textword1">
            <span style="color: red">需要进行结项审核的项目</span>
        </div>
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
                width="65">
                </el-table-column>
                <el-table-column
                prop="programName"
                label="项目名称"
                width="130">
                </el-table-column>
                <el-table-column
                prop="programID"
                label="项目编号"
                width="130">
                </el-table-column>
                <el-table-column
                prop="teacherName"
                label="指导教师"
                width="130">
                </el-table-column>
                <el-table-column
                prop="capitalName"
                label="负责人"
                width="130">
                </el-table-column>
                <el-table-column
                prop="programKind"
                label="项目类别"
                width="130">
                </el-table-column>
                <el-table-column
                prop="teamMember"
                label="组内成员"
                width="130">
                </el-table-column>
                <el-table-column
                prop="programState"
                label="项目状态">
                </el-table-column>
                <!-- 打分对话框 -->
                <el-table-column
                label="评分"
                width="130">
                <el-button type="text" @click="dialogFormVisible  = true">评分</el-button>
                </el-table-column>
                <el-table-column
                label="排名"
                show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <!-- 底部栏 -->
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
        <!-- 审核对话框 -->
        <el-dialog title="结项审核评分" :visible.sync="dialogFormVisible">
            <el-row>
                <el-col :span="3">
                    <span>项目名称</span>
                </el-col>
                <el-col :span="7" align="center">
                    <span>3D游戏开发</span>
                </el-col>
                <el-col :span="3">
                    <span>项目编号</span>
                </el-col>
                <el-col :span="4">
                    <span>201709000</span>
                </el-col>
                <el-col :span="3">
                    <span>项目类别</span>
                </el-col>
                <el-col :span="4">
                    <span>创新训练项目</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3">
                    <span>负责人</span>
                </el-col>
                <el-col :span="3">
                    <span>姓名</span>
                </el-col>
                <el-col :span="4">
                    <span>张三</span>
                </el-col>
                <el-col :span="3">
                    <span>学号</span>
                </el-col>
                <el-col :span="4">
                    <span>201709000</span>
                </el-col>
                <el-col :span="3">
                    <span>指导老师</span>
                </el-col>
                <el-col :span="4">
                    <span>刘书刚</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3">
                    <span>组内成员1</span>
                </el-col>
                <el-col :span="3">
                    <span>姓名</span>
                </el-col>
                <el-col :span="4">
                    <span>李四</span>
                </el-col>
                <el-col :span="3">
                    <span>院系</span>
                </el-col>
                <el-col :span="4">
                    <span>计算机系</span>
                </el-col>
                <el-col :span="3">
                    <span>专业</span>
                </el-col>
                <el-col :span="4">
                    <span>计算机科学与技术</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3">
                    <span style="color:white">＆nbsp;＆nbsp;＆nbsp;＆nbsp;</span>
                </el-col>
                <el-col :span="3">
                    <span>学号</span>
                </el-col>
                <el-col :span="4">
                    <span>201709001</span>
                </el-col>
                <el-col :span="3">
                    <span>分工</span>
                </el-col>
                <el-col :span="4">
                    <span>后端设计</span>
                </el-col>
                <el-col :span="3">
                    <span>电话</span>
                </el-col>
                <el-col :span="4">
                    <span>13722223333</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3">
                    <span>组内成员2</span>
                </el-col>
                <el-col :span="3">
                    <span>姓名</span>
                </el-col>
                <el-col :span="4">
                    <span>王五</span>
                </el-col>
                <el-col :span="3">
                    <span>院系</span>
                </el-col>
                <el-col :span="4">
                    <span>计算机系</span>
                </el-col>
                <el-col :span="3">
                    <span>专业</span>
                </el-col>
                <el-col :span="4">
                    <span>计算机科学与技术</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3">
                    <span style="color:white">＆nbsp;＆nbsp;＆nbsp;＆nbsp;</span>
                </el-col>
                <el-col :span="3">
                    <span>学号</span>
                </el-col>
                <el-col :span="4">
                    <span>201709002</span>
                </el-col>
                <el-col :span="3">
                    <span>分工</span>
                </el-col>
                <el-col :span="4">
                    <span>后端设计</span>
                </el-col>
                <el-col :span="3">
                    <span>电话</span>
                </el-col>
                <el-col :span="4">
                    <span>13744445555</span>
                </el-col>
            </el-row>
            <el-row gutter="20">
                <el-col :span="4">
                   <span>分数</span>
                </el-col>
                <el-col :span="3">
                    <el-input></el-input>
                </el-col>
                <el-col :span="3">
                    <el-input></el-input>
                </el-col>
                <el-col :span="3">
                    <el-input></el-input>
                </el-col>
                <el-col :span="6" align="center">
                    <el-button type="primary">计算平均分</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                   <span>平均分</span>
                </el-col>
                <el-col :span="8">
                    <el-input></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="4">
                   <span>项目不通过评价</span>
                </el-col>
                <el-col :span="20">
                 <el-input type="textarea" :rows="4"></el-input>
                </el-col>
            </el-row>
            <div slot="footer" class="dialog-footer">
            <el-row>
                <el-col :span="8" align="center">
                <el-button type="primary" @click="dialogFormVisible = false">通过</el-button>
                </el-col>
                <el-col :span="8" align="center">
                <el-button type="primary" @click="dialogFormVisible = false">不通过</el-button>
                </el-col>
                <el-col :span="8" align="center">
                <el-button @click="dialogFormVisible = false">返回</el-button>
                </el-col>
            </el-row>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        programID: '123456789',
        programName: '3D游戏开发',
        teacherName: '刘书刚',
        capitalName: '张三',
        department: '计算机系',
        date: '2020/10/12',
        programKind: '校级',
        programState: '立项未通过',
        teamMember: '李四、王五',
        checkNum: '0'
      }, {
        programID: '123456789',
        programName: '3D游戏开发',
        teacherName: '刘书刚',
        capitalName: '张三',
        department: '计算机系',
        date: '2020/10/12',
        programKind: '校级',
        programState: '立项未通过',
        teamMember: '李四、王五',
        checkNum: '0'
      }, {
        programID: '123456789',
        programName: '3D游戏开发',
        teacherName: '刘书刚',
        capitalName: '张三',
        department: '计算机系',
        date: '2020/10/12',
        programKind: '校级',
        programState: '立项未通过',
        teamMember: '李四、王五',
        checkNum: '0'
      }, {
        programID: '123456789',
        programName: '3D游戏开发',
        teacherName: '刘书刚',
        capitalName: '张三',
        department: '计算机系',
        date: '2020/10/12',
        programKind: '校级',
        programState: '立项未通过',
        teamMember: '李四、王五',
        checkNum: '0'
      }, {
        programID: '123456789',
        programName: '3D游戏开发',
        teacherName: '刘书刚',
        capitalName: '张三',
        department: '计算机系',
        date: '2020/10/12',
        programKind: '校级',
        programState: '立项未通过',
        teamMember: '李四、王五',
        checkNum: '0'
      }, {
        programID: '123456789',
        programName: '3D游戏开发',
        teacherName: '刘书刚',
        capitalName: '张三',
        department: '计算机系',
        date: '2020/10/12',
        programKind: '校级',
        programState: '立项未通过',
        teamMember: '李四、王五',
        checkNum: '0'
      }, {
        programID: '123456789',
        programName: '3D游戏开发',
        teacherName: '刘书刚',
        capitalName: '张三',
        department: '计算机系',
        date: '2020/10/12',
        programKind: '校级',
        programState: '立项未通过',
        teamMember: '李四、王五',
        checkNum: '0'
      }],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        programKind: '',
        programState: '',
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
.textword1{
    margin-top: 2%;
}
.textword1 span{
    white-space:nowrap;
    margin-left: 50px;
}
.bodyBox{
    /* width: 80%; */
    /* width: 1000px; */
    margin-left: 50px;
    width: 1200px;
}
.bodyBox table tr{
    height: 55px;
}
.body_bottom{
    /* margin-left: 50px; */
    width: 1200px;
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
