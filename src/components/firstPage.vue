<template>
<div >
    <div class="page_container">
        <!-- 页面标志 -->
        <div class="page_logo">
            <img src="../assets/firstPage_images/school_logo.png" alt="">
            <span>大学生创新创业管理平台</span>
        </div>
        <div class="mainbox">
            <!-- 轮播图 -->
            <div class="carouselBox">
                <!-- 左侧按钮 -->
                <a href="#" class="arrow-l">
                    &lt;
                </a>
                <!-- 右侧按钮 -->
                <a href="#" class="arrow-r"></a>
            </div>
            <!-- 中间图 -->
            <div class="pictureBox">
            <img src="../assets/firstPage_images/长图标.png" height="180px">
            </div>
            <div style="display:flex">
            <div class="leftBox">
                <div class="title">
                    <span>最新公告</span>
                    <a href="#/noticeSearch">更多+</a>
                </div>
                <div class="contentBox">
                    <ul class="list_group">
                        <li class="list_item">
                            <span>2021年12月大学生创新创业项目立项开始</span>
                            <span class="item_time">2021-12-21</span>
                        </li>
                        <li class="list_item">
                            <span>2021年12月大学生创新创业项目立项开始</span>
                            <span class="item_time">2021-12-21</span>
                        </li>
                        <li class="list_item">
                            <span>2021年12月大学生创新创业项目立项开始</span>
                            <span class="item_time">2021-12-21</span>
                        </li>
                        <li class="list_item">
                            <span>2021年12月大学生创新创业项目立项开始</span>
                            <span class="item_time">2021-12-21</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rightBox">
                <div class="box1">
                    <img src="../assets/firstPage_images/p1.png" alt="">
                    <span>项目申报</span>
                </div>
                <div class="box2">
                    <img src="../assets/firstPage_images/p2.png" alt="">
                    <span>项目管理</span>
                </div>
                <div class="box3">
                    <img src="../assets/firstPage_images/p3.png" alt="">
                    <span>查询公告</span>
                </div>
            </div>
            </div>
        </div>
        <div class="page_bottom">
           <div>
            <span>版权所有：华北电力大学（保定）</span>
            <img src="../assets/firstPage_images/dreamtech_logo.png" height="50px">
            <span>Dre@mtech工作室</span>
           </div>
        </div>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.page_container{
    overflow-x: hidden;
}
.page_logo{
    display: flex;
    align-items: center;
    background-color: #0669b2;
    background-size:100%;
    padding-left: 250px;
    width: 100%;
    height: 90px;
}
.page_logo span{
    white-space:nowrap;
    font-weight: normal;
    font-size: 2em;
    margin-left: 30px;
}
.pictureBox{
    display: flex;
    align-items: center;
    justify-content: center;
}
.leftBox{
    background-color: #fff;
    width: 480px;
    margin-left: 200px;
}
.title{
   width: 480px;
   /* display: flex;
   align-items: center; */
   border-bottom: 2px solid #cbcbcb;
   padding-bottom: 5px;
}
.title a{
    /* position: fixed;
    right: 0px; */
    font-size: 28px;
    float: right;
}
.title span{
    font-size: 27px;
}
.content{
    float: left;
}
.list_group{
    padding-left: 0;
}
.list_item{
    margin-bottom: 30px;
}
.item_time{
    float: right;
}
.contentBox ul li{
    list-style: none;
}
.rightBox{
    float: right;
    margin-left: 350px;
    margin-right: 200px;
}
.box1{
    background-color: #39a6f1;
    width: 300px;
    height: 70px;
    display: flex;
    align-items: center;
    margin-bottom: 35px;
}
.box1 img{
    background-color: #0669b2;
    height: 100%;
}
.box1 span{
    margin-left: 50px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
}
.box2{
    background-color: #009f3c;
    width: 300px;
    height: 70px;
    display: flex;
    align-items: center;
    margin-bottom: 35px;
}
.box2 img{
    background-color: #006a25;
    height: 100%;
}
.box2 span{
    margin-left: 50px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
}
.box3{
    background-color: #f4b757;
    width: 300px;
    height: 70px;
    display: flex;
    align-items: center;
}
.box3 img{
    background-color: #f09450;
    height: 100%;
}
.box3 span{
    margin-left: 50px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
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
}
</style>
