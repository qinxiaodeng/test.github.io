<template>
<div class="page_container">
    <!-- 页面标志 -->
    <div class="page_logo">
        <img src="../assets/secondPage_images/school_logo.png" alt="">
        <span>工程训练中心</span>
        <span class="btns">
            <el-button type="primary" size="medium" @click="loginIn">登录</el-button>
        </span>
    </div>
    <!-- 内容 -->
    <div class="contentBox">
        <div class="title">
            <span>大创</span>
            <span>竞赛</span>
            <span>孵化项目</span>
            <span>机器人俱乐部</span>
        </div>
        <div class="bodyBox">
            <ul class="list_group">
                <li class="list_item">
                    <div class="time">
                        <span class="stress">23</span>
                        <span class="normal">2020.12</span>
                    </div>
                    <div class="item_right">
                        <a href="">2020年12月大学生创新创业项目结项开始</a>
                    </div>
                </li>
                <li class="list_item">
                    <div class="time">
                        <span class="stress">23</span>
                        <span class="normal">2020.12</span>
                    </div>
                    <div class="item_right">
                        <a href="">2020年12月大学生创新创业项目结项开始</a>
                    </div>
                </li>
                <li class="list_item">
                    <div class="time">
                        <span class="stress">23</span>
                        <span class="normal">2020.12</span>
                    </div>
                    <div class="item_right">
                        <a href="">2020年12月大学生创新创业项目结项开始</a>
                    </div>
                </li>
                <li class="list_item">
                    <div class="time">
                        <span class="stress">23</span>
                        <span class="normal">2020.12</span>
                    </div>
                    <div class="item_right">
                        <a href="">2020年12月大学生创新创业项目结项开始</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="moretext">
            <a href="#/noticeSearch">查看更多>></a>
        </div>
    </div>
    <div class="pictureBox">
        <div class="box1">
            <img src="../assets/secondPage_images/p1.png" alt="">
            <span>大创管理</span>
        </div>
        <div class="box2">
            <img src="../assets/secondPage_images/p2.png" alt="">
            <span>竞赛管理</span>
        </div>
        <div class="box1">
            <img src="../assets/secondPage_images/p3.png" alt="">
            <span>孵化项目管理</span>
        </div>
        <div class="box2">
            <img src="../assets/secondPage_images/p4.png" alt="">
            <span>俱乐部管理</span>
        </div>
    </div>
    <!-- 底部标志 -->
    <div class="page_bottom">
        <div>
            <span>版权所有：华北电力大学（保定）</span>
            <img src="../assets/firstPage_images/dreamtech_logo.png" height="50px">
            <span>Dre@mtech工作室</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
  methods: {
    loginIn () {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.page_container{
    overflow-x: hidden;
}
.page_logo{
    display: flex;
    align-items: center;
    background-color: #0669b2;
    background-size: 100%;
    width: 1000px;
    margin-left:50%;
    transform: translate(-500px);
    height: 90px;
}
.page_logo span{
    white-space:nowrap;
    font-weight: normal;
    font-size: 2em;
    margin-left: 30px;
}
.el-button--primary{
    background-color: #0669b2;
}
/* .btns{
    padding-left: 550px;
} */
.contentBox{
    background-image: url(../assets/secondPage_images/ncepu.png);
    background-size: 550px 550px;
    background-repeat:no-repeat;
    background-position: 50% 50%;
    width: 700px;
    height: 550px;
    position: absolute;
    margin-left: 50%;
    transform: translate(-50%);
}
.title{
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #4f5050;
}
.title span{
    display: flex;
    justify-content: center;
    font-size: 22px;
    width: 158.125px;
    /* padding-left: 10px; */
}
.list_group{
    list-style-type: none;
    padding-left: 0;
}
.list_item{
    height: 95px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #4f5050;
}
.time span{
    display: block;
}
.stress{
    font-size: 30px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 5px;
    line-height: bold;
    color: #0669b2;
}
.normal{
    font-size: 22px;
    color: #064f8a;
}
.item_right a{
    margin-left: 25px;
    font-size: 22px;
    text-decoration: none;
    outline: none;
}
.moretext{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100px;
    margin-left: 50%;
    background-color: #fff;
    transform: translate(-50%,-30px);
}
.moretext a{
    text-decoration: none;
    outline: none;
}
.pictureBox{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 70px;
    margin-left: 50%;
    transform: translate(-50%);
}
.box1{
    display: flex;
    align-items: center;
    background-color: #1b87e5;
    height: 50px;
    width: 310px;
}
.box1 img{
    height: 50px;
    margin-left: 15px;
}
.box1 span{
    font-size: 25px;
    color: #fff;
    margin-left: 35px;
}
.box2{
    display: flex;
    align-items: center;
    height: 50px;
    width: 310px;
    background-color: #60b0f5;
}
.box2 img{
    height: 50px;
    margin-left: 15px;
}
.box2 span{
    font-size: 25px;
    color: #fff;
    margin-left: 35px;
}
.page_bottom{
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    background-color: #0669b2;
}
.page_bottom div{
    margin: 0 auto;
    display: flex;
    align-items: center;
}
</style>
