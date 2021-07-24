<template>
    <div class="page_container">
        <div class="bodyBox">
            <!-- 搜索框 -->
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
                    <el-form-item label="项目名称">
                        <el-input></el-input>
                    </el-form-item>
                    </el-col>
                    <el-col :span="3">
                    <el-form-item label-width="40px">
                        <el-button icon="el-icon-search" circle></el-button>
                    </el-form-item>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-form>
            </el-row>
            <!-- 重写表格 -->
            <el-table
                :data="tableData"
                border
                show-summary
                tooltip-effect="dark"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                <el-table-column
                type="index"
                label="序号"
                width="65">
                </el-table-column>
                <!-- 项目详情对话框 -->
                <el-table-column
                label="项目名称"
                width="120">
                <template slot-scope="scope">
                <el-button type="text" @click="dialogFormVisible  = true">{{ scope.row.programName }}</el-button>
                </template>
                </el-table-column>
                <el-table-column
                prop="programKind"
                label="项目类别"
                width="130">
                </el-table-column>
                <el-table-column
                prop="capitalName"
                label="负责人"
                width="130">
                </el-table-column>
                <!-- 申报时间 -->
                <el-table-column
                label="申报时间"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="amount1"
                sortable
                label="项目总报销金额(元)">
                </el-table-column>
            </el-table>
            <!-- 项目详情对话框 -->
            <el-dialog title="项目详情" :visible.sync="dialogFormVisible">
                <el-row>
                    <el-col :span="3">
                        <span>项目名称</span>
                    </el-col>
                    <el-col :span="7">
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
                        <span  style="color:white">＆nbsp;＆nbs</span>
                    </el-col>
                    <el-col :span="3">
                        <span>学号</span>
                    </el-col>
                    <el-col :span="4">
                        <span>201709000</span>
                    </el-col>
                    <el-col :span="3">
                        <span>分工</span>
                    </el-col>
                    <el-col :span="4">
                        <span>web页面解析</span>
                    </el-col>
                    <el-col :span="3">
                        <span>电话</span>
                    </el-col>
                    <el-col :span="4">
                        <span>13333332222</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span>项目成员1</span>
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
                        <span>软件工程</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span  style="color:white">＆nbsp;＆nbs</span>
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
                        <span>13344445555</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span>项目成员2</span>
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
                        <span>网络安全</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span  style="color:white">＆nbsp;＆nbs</span>
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
                        <span>算法设计</span>
                    </el-col>
                    <el-col :span="3">
                        <span>电话</span>
                    </el-col>
                    <el-col :span="4">
                        <span>13377778888</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span>指导教师</span>
                    </el-col>
                    <el-col :span="3">
                        <span>姓名</span>
                    </el-col>
                    <el-col :span="4">
                        <span>刘书刚</span>
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
                        <span  style="color:white">＆nbsp;＆nbs</span>
                    </el-col>
                    <el-col :span="3">
                        <span>学号</span>
                    </el-col>
                    <el-col :span="4">
                        <span>201709003</span>
                    </el-col>
                    <el-col :span="3">
                        <span>分工</span>
                    </el-col>
                    <el-col :span="4">
                        <span>算法设计</span>
                    </el-col>
                    <el-col :span="3">
                        <span>电话</span>
                    </el-col>
                    <el-col :span="4">
                        <span>13377778888</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span>创业实践项目企业导师</span>
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
                        <span>网络安全</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span  style="color:white">＆nbsp;＆nbs</span>
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
                        <span>算法设计</span>
                    </el-col>
                    <el-col :span="3">
                        <span>电话</span>
                    </el-col>
                    <el-col :span="4">
                        <span>13377778888</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span>起始时间</span>
                    </el-col>
                    <el-col :span="7">
                        <span>2020/10/12</span>
                    </el-col>
                    <el-col :span="3">
                        <span>结束时间</span>
                    </el-col>
                    <el-col :span="4">
                        <span>2021/10/12</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="3">
                        <span>项目简介</span>
                    </el-col>
                    <el-col :span="21">
                        <span>了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。使用组件 Demo 快速体验交互细节；使用前端框架封装的代码帮助工程师快速开发。在线主题编辑器，可视化定制和管理站点主题、组件样式</span>
                    </el-col>
                </el-row>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">返回</el-button>
                </div>
            </el-dialog>
        </div>
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
        amount1: '400'
      }, {
        programID: '123456789',
        programName: '3D游戏开发',
        teacherName: '刘书刚',
        capitalName: '张三',
        department: '计算机系',
        date: '2020/10/12',
        programKind: '校级',
        programState: '立项未通过',
        amount1: '500'
      }, {
        programID: '123456789',
        programName: '3D游戏开发',
        teacherName: '刘书刚',
        capitalName: '张三',
        department: '计算机系',
        date: '2020/10/12',
        programKind: '校级',
        programState: '立项未通过',
        amount1: '500'
      }],
      multipleSelection: [],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
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
.headbox{
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
    width: 1000px;
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
.textword{
    float: right;
}
.el-dialog .el-row{
    height: 40px;
}
</style>
