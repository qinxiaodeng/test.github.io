<template>
<el-container class="page_container">
<!-- 页面标志 -->
    <el-header>
        <div class="page_logo">
            <img src="../assets/firstPage_images/logo_01.png" alt="">
            <span>大学生创新创业管理平台</span>
        </div>
    </el-header>
<!-- 页面内容 -->
    <el-main>
    <div class="contentBox">
        <div class="title">
            <div>
                <p class="bread_nav">
                <a href="#/secondPage">首页</a>
                <span>  /  公告查询</span>
            </p>
            </div>
        </div>
        <div class="searchBox">
            <el-form label-width="80px" ref="form" :model="form" class="formBox">
                <el-form-item label="日期">
                        <el-date-picker type="date" v-model="form.date1" placeholder="选择日期" style="width: 100%;"></el-date-picker>
                </el-form-item>
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
                <el-form-item label="名称">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label-width="40px">
                    <el-button icon="el-icon-search" circle></el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="bodyBox">
            <div class="body_title">
                <span class="word1">序号</span>
                <span class="word2">教职工号</span>
            </div>
            <div class="body_content">
                <div class="content_box1">
                    <a href="#/noticeContent" class="word1">2021年12月大学生创新创业项目立项开始</a>
                    <span class="word2">2012-12-23</span>
                </div>
                <div class="content_box2">
                    <a href="#/noticeContent" class="word1">2021年12月大学生创新创业项目立项开始</a>
                    <span class="word2">2012-12-23</span>
                </div>
                <div class="content_box1">
                    <a href="#/noticeContent" class="word1">2021年12月大学生创新创业项目立项开始</a>
                    <span class="word2">2012-12-23</span>
                </div>
                <div class="content_box2">
                    <a href="#/noticeContent" class="word1">2021年12月大学生创新创业项目立项开始</a>
                    <span class="word2">2012-12-23</span>
                </div>
                <div class="content_box1">
                    <a href="#/noticeContent" class="word1">2021年12月大学生创新创业项目立项开始</a>
                    <span class="word2">2012-12-23</span>
                </div>
            </div>
            <div class="body_bottom">
                <span><el-button icon="el-icon-d-arrow-left" size="mini"></el-button></span>
                <span><el-button icon="el-icon-arrow-left" size="mini"></el-button></span>
                <span>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            1/10<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>1</el-dropdown-item>
                            <el-dropdown-item>2</el-dropdown-item>
                            <el-dropdown-item>3</el-dropdown-item>
                            <el-dropdown-item>4</el-dropdown-item>
                            <el-dropdown-item>5</el-dropdown-item>
                            <el-dropdown-item>6</el-dropdown-item>
                            <el-dropdown-item>7</el-dropdown-item>
                            <el-dropdown-item>8</el-dropdown-item>
                            <el-dropdown-item>9</el-dropdown-item>
                            <el-dropdown-item>10</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
                <span><el-button icon="el-icon-arrow-right" size="mini"></el-button></span>
                <span><el-button icon="el-icon-d-arrow-right" size="mini"></el-button></span>
                <span class="word2">共十页</span>
            </div>
        </div>
    </div>
    </el-main>
<!-- 底部标志 -->
    <div class="page_bottom">
        <div>
            <span>版权所有：华北电力大学（保定）</span>
            <img src="../assets/firstPage_images/dreamtech_logo.png" height="50px">
            <span>Dre@mtech工作室</span>
        </div>
    </div>
</el-container>
</template>

<script>
export default {
  data () {
    return {
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
.el-main{
    display: flex;
    justify-content: center;
    align-items: center;
}
.page_container{
    /* overflow-x: hidden;
    background-color: #eaf2f7; */
    height: 100%;
    background-size: 100% 100%;
    min-width: 1300px;
    /* display: flex;
    justify-content: center; */
    /* align-items: center; */
}
.contentBox{
    width: 1100px;
    height: 550px;
    background-color: #fff;
    margin-top: 1%;
    /* position: absolute;
    margin-left: 50%;
    margin-top: 45px;
    transform: translate(-50%); */
    /* display: flex;
    justify-content: center; */
}
.title{
    display: flex;
    justify-content: center;
}
.title div{
    margin-top: 10px;
    width: 1000px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: left;
    border-bottom: 2px solid #979797;
}
.searchBox{
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
}
.formBox{
    display: flex;
}
.page_logo{
    display: flex;
    align-items: center;
    background-color: #0669b2;
    background-size: 100%;
    width: 100%;
    height: 100%;
}
.page_logo img{
    margin-left: 7%;
    height:100%;
}
.page_logo span{
    white-space:nowrap;
    font-weight: normal;
    font-size: 2em;
    margin-left: 30px;
}
.bread_nav a{
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
    outline: none;
}
.bodyBox{
    width: 1000px;
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
    background-color: #82b4d8;
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
.el-icon-arrow-down {
    font-size: 12px;
}
.bread_nav span{
    font-size: 22px;
}
.searchBox{
    display: block;
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
.page_bottom div span{
    color: #fff;
    font-weight: bold;
    white-space:nowrap;
}
@media screen and (max-width: 1180px){
    .contentBox{
    width: 1100px;
    height: 550px;
    background-color: #fff;
    }
}
</style>
