<template>
<div class="page_container">
    <!-- 页面标志 -->
    <div class="page_logo">
        <img src="../assets/firstPage_images/logo_01.png" alt="">
        <span>大学生创新创业管理平台</span>
    </div>
    <div class="contentBox">
        <div class="title">
            <div>
                <p class="bread_nav">
                <a href="#/firstPage">首页</a>
                <a href="#/secondPage">/ 公告查询</a>
                <span>  /  公告详情</span>
            </p>
            </div>
        </div>
        <div class="bodyBox">
            <div class="body_title">
                <span>华北电力大学教务处（保定）通知</span>
            </div>
            <div class="bodyContent">
                <div class="biaoti">
                    <h1>学校召开校党委理论学习中心组（扩大）党史学习教育专题学习会</h1>
                </div>
                <div class="zhengwen">
                    <p>4月7日下午，学校召开校党委理论学习中心组（扩大）党史学习教育专题学习会，邀请北京大学国际关系学院黄宗良教授，作题为《党的领导和党的执政能力建设——划时代的伟大觉醒和中国社会转型》的专题报告。全体校领导、全体中层干部、党史学习教育宣讲团成员、马克思主义学院全体教师参加了本次会议。会议以两地视频形式在北京校部、保定校区同时举行。校党委书记周坚主持会议。</p>
                    <p>黄宗良结合详实的史料，从中国共产党的诞生是开天辟地的大事，新中国的建立开始了一个新的时代；改革开放是党的一次伟大觉醒；走向全面建设社会主义现代化国家的历史性转变；中国共产党执政的重要历史经验；中华民族伟大复兴的光辉前景等五个方面全面地回顾了党史上的重大事件及关键节点，生动展现了党带领人民筚路蓝缕奠基立业、创造辉煌开辟未来的光荣历程。整场报告内涵丰富、意义深远，为进一步学好党史提供了启迪和指导。</p>
                    <p>周坚在总结讲话中指出，黄宗良教授从大历史观的角度，系统梳理了党加强政治领导和提升执政能力建设的历程和经验，全景式回顾了中国共产党百年辉煌奋斗史上的三大里程碑、三件大事及其伟大历史意义，对于深入学习党的百年探索史、奋斗史、创业史和发展史提供了新的思考方向。在中国共产党成立100周年之际，在全党开展党史学习教育，是牢记初心使命、推进中华民族伟大复兴历史伟业的必然要求，是坚定信仰信念、在新时代坚持和发展中国特色社会主义的必然要求，也是推进党的自我革命、永葆党的生机活力的必然要求。学校要以党史学习教育为契机，进一步推动“双一流”事业建设，将党的宝贵经验与新时代高教事业、学校改革发展深度融合，增强党史学习教育的开展实效。</p>
                </div>
            </div>
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
}
</script>
<style scoped>
.page_logo{
    display: flex;
    align-items: center;
    background-color: #0669b2;
    background-size: 100%;
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
.page_container{
    overflow-x: hidden;
    background-color: #eaf2f7;
    height: 100%;
    background-size: 100% 100%;
}
.contentBox{
    width: 1100px;
    height: 550px;
    background-color: #fff;
    position: absolute;
    margin-left: 50%;
    margin-top: 45px;
    transform: translate(-50%);
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
    margin-left: 250px;
    width: 600px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #ff2525;
}
.body_title span{
    font-size: 25px;
    font-weight: bold;
    color: #ff2525;
}
.bodyContent{
    margin-left: 150px;
    width: 800px;
    /* display: flex;
    justify-content: center; */
}
.biaoti h1{
    text-align: center;
    font-family: 宋体, simsun;
    font-size: 24px;
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
