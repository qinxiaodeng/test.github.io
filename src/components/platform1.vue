<template>
    <el-container class="home-container">
        <!--头部区域-->
        <el-header>
            <div class="headcontent">
                <img src="../assets/firstPage_images/logo_01.png" alt="">
                <span>
                    <p>大学生创新创业管理平台</p>
                </span>
            </div>
            <div class="logininfo">
             <el-button type="info" @click="logout">退出</el-button>
            </div>
        </el-header>
        <!-- 页面主题区域 -->
        <el-container>
            <!--侧边栏区域-->
            <el-aside width="200px">
                <!-- 侧边栏菜单区域 -->
                <el-menu background-color="#1e282c" text-color="#fff"
                active-text-color="#ffd04b"
                unique-opened
                router>
                    <!-- 一级菜单 -->
                    <el-submenu index="1">
                        <!-- 一级菜单的模板区 -->
                        <template slot="title">
                        <!-- 图标 -->
                        <i class="el-icon-user-solid"></i>
                        <!-- 文本 -->
                        <span>用户管理</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item index="/userSearch">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>用户查询</span>
                            </template>
                        </el-menu-item>
                        <!-- 二级菜单 -->
                        <el-menu-item index="/addUser">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>添加用户</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/timeRelease">
                        <i class="el-icon-time"></i>
                        <span slot="title">时间发布</span>
                    </el-menu-item>
                    <el-submenu index="3">
                        <!-- 一级菜单的模板区 -->
                        <template slot="title">
                        <!-- 图标 -->
                        <i class="el-icon-s-check"></i>
                        <!-- 文本 -->
                        <span>公告管理</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item index="/noticeSearch2">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>公告查询</span>
                            </template>
                        </el-menu-item>
                        <!-- 二级菜单 -->
                        <el-menu-item index="/addNotice">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>添加公告</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/myProgram">
                        <i class="el-icon-folder-opened"></i>
                        <span slot="title">我的项目</span>
                    </el-menu-item>
                    <el-submenu index="5">
                        <!-- 一级菜单的模板区 -->
                        <template slot="title">
                        <!-- 图标 -->
                        <i class="el-icon-s-order"></i>
                        <!-- 文本 -->
                        <span>项目审核</span>
                        </template>
                        <!-- 二级菜单 -->
                        <el-menu-item index="/projectApproval">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>立项审核</span>
                            </template>
                        </el-menu-item>
                        <!-- 二级菜单 -->
                        <el-menu-item index="/progressRecord">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>进展记录</span>
                            </template>
                        </el-menu-item>
                        <!-- 二级菜单 -->
                        <el-menu-item index="/midtermApproval">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>中期审核</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="/projectUpgrade">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>项目升级</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="/conclusionApproval">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>结项审核</span>
                            </template>
                        </el-menu-item>
                        <el-menu-item index="/deferredAudit">
                            <!-- 二级菜单的模板区 -->
                            <template slot="title">
                            <!-- 图标 -->
                            <i class="el-icon-location"></i>
                            <!-- 文本 -->
                            <span>延期审核</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/financialStatistics">
                        <i class="el-icon-menu"></i>
                        <span slot="title">财务统计</span>
                    </el-menu-item>
                    <el-menu-item index="/documentDownload">
                        <i class="el-icon-document"></i>
                        <span slot="title">文档下载</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <!--右侧区域-->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.el-header{
    background-color: #0669b2;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    /* align-items: center; */
}
.headcontent{
    display: flex;
    align-items: center;
}
.headcontent span{
    white-space:nowrap;
}
.headcontent img{
    height:100%;
}
.logininfo{
    height: 100%;
    display: flex;
    align-items: center;
}
.home-container{
    height: 100%;
    min-width: 1040px;
}
.el-aside{
    background-color: #1e282c;
}
.el-main{
    background-color: #fff;
}
</style>
