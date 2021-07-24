<template>
    <div>
        <div class="bodyBox">
            <!-- <el-row>
            <el-col :span="24">
                注：只有校级和系级负责人可以修改，系级改系级，校级改全部
            </el-col>
            </el-row> -->
            <el-row>
                <el-col :span="24">
                    <span>注：只有校级和系级负责人可以修改，系级改系级，校级改全部</span>
                </el-col>
            </el-row>
            <el-row class="box1" align="middle">
                <el-form label-width="80px" ref="form" :model="form" class="formBox">
                    <el-col :span="5">
                        <el-form-item>
                            <span>立项时间</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="起始时间">
                            <el-date-picker type="date" v-model="form.date1" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="结束时间">
                            <el-date-picker type="date" v-model="form.date2" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                    <el-form-item>
                        <el-button type="primary" size="medium">提交</el-button>
                    </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="box2">
                <el-form label-width="80px" ref="form" :model="form" class="formBox">
                    <el-col :span="5">
                        <el-form-item>
                            <span>中期审核</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="起始时间">
                            <el-date-picker type="date" v-model="form.date3" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="结束时间">
                            <el-date-picker type="date" v-model="form.date4" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                    <el-form-item>
                        <el-button type="primary" size="medium">提交</el-button>
                    </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
            <el-row class="box1">
                <el-form label-width="80px" ref="form" :model="form" class="formBox">
                    <el-col :span="5">
                        <el-form-item>
                            <span>结项审核</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="起始时间">
                            <el-date-picker type="date" v-model="form.date5" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="结束时间">
                            <el-date-picker type="date" v-model="form.date6" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                    <el-form-item>
                        <el-button type="primary" size="medium">提交</el-button>
                    </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        date1: '',
        date2: '',
        date3: '',
        date4: '',
        date5: '',
        date6: ''
      }
    }
  }
}
</script>
<style scoped>
.formBox{
    display: flex;
}
.bodyBox{
    /* width: 80%; */
    /* width: 1000px; */
    margin-left: 50px;
    width: 1000px;
}
.box1{
    background-color: #e3ebf5;
    display: flex;
    align-items: center;
    /* justify-content: center; */
}
.el-row {
    height: 60px;
    display: flex;
    align-items: center;
}
.el-col {
    border-radius: 4px;
}
.el-col .el-form-item{
    padding-top: 20px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
