<template>
    <div class="page_container">
        <div class="content_top">
            <!-- <div class="logoPage"><img src="../assets/secondPage_images/school_logo.png" alt=""></div> -->
            <img src="../assets/secondPage_images/school_logo.png" alt="">
            <span class="logo_word">大学生创新创业训练平台</span>
            <div class="login_info">
            <span>余正秦同学</span>
            <a href="#/login" class="exitBt"><img src="../assets/platform_images/退出.png" alt=""></a>
            </div>
        </div>
        <div class="content_left">
            <div class="nav">
                <div class="nav_title">
                    <a href="#"><img src="../assets/platform_images/笔记本.png" alt=""> 用户管理</a>
                </div>
                <div class="nav_title">
                    <a href="#"><img src="../assets/platform_images/记录.png" alt=""> 时间发布</a>
                </div>
                <div class="nav_title">
                    <a href="#"><img src="../assets/platform_images/审核.png" alt=""> 公告管理</a>
                </div>
                <div class="nav_title">
                    <a href="#"><img src="../assets/platform_images/笔记本.png" alt=""> 我的项目</a>
                </div>
                <div class="nav_title">
                    <a href="#"><img src="../assets/platform_images/结项审核.png" alt=""> 项目审核</a>
                </div>
                <div class="nav_title">
                    <a href="#"><img src="../assets/platform_images/报销.png" alt=""> 财务统计</a>
                </div>
                <div class="nav_title">
                    <a href="#"><img src="../assets/platform_images/文档 (1).png" alt=""> 文档下载</a>
                </div>
            </div>
        </div>
        <div class="content_right">
            显示页面
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
/* .logoPage{
    margin-left: 2%;
} */
.page_container{
    width: 100%;
    height: 100%;
}
.content_top{
    width: 100%;
    height: 85px;
    background-color: #0669b2;
    display: flex;
    align-items: center;
}
.content_top img{
    margin-left: 2%;
    height: 100%;
}
.content_top span{
    color: #fff;
    font-size: 25px;
    white-space: nowrap;
}
.login_info{
    display: flex;
    align-items: center;
    width: 10%;
    height: 85px;
    margin-right: 2%;
    position: absolute;
    right: 0;
}
.exitBt{
    /* width: 20%; */
    height: 30px;
}
.content_left{
    width: 19%;
    height: 690px;
    background-color: #1e282c;
    float: left;
}
.content_right{
    width: 81%;
    height: 690px;
    background-color: #fff;
    float: right;
}
.nav_title{
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    /* padding-left: 10px; */
}
.nav_title a{
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
}
.nav_title a:hover{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    border-left: 3px solid #0669b2;
}
.nav_title a img{
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>
