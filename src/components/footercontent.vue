<style rel="stylesheet/scss" lang="scss">
    .footercontent{
        background: #0d0d0d;
        .flexInfo{
            padding-left: 12%;
        }
        .flex{
            display: flex;
            justify-content: space-between;
            .codeBox{
               right: 2%;
                margin-top: 56px;
                display: flex;
                position: fixed;
                bottom: 120px;
                .emailImg{
                    height: 59px;
                    width: 200px;
                    background: #0abf9b;
                    color: #232323;
                    position: absolute;
                    left: -210px;
                    line-height: 59px;
                    font-size: 14px;
                    text-align: center;
                }
                .phoneImg{
                    height: 59px;
                    background: #0abf9b;
                    color: #232323;
                    width: 200px;
                    position: absolute;
                    left: -210px;
                    top: 68px;
                    line-height: 59px;
                    font-size: 14px;
                    text-align: center;
                }
                .emailInfo{
                    background: #0abf9b;
                    font-size: 12px;
                    color: #fff;
                    text-align: center;
                    cursor: pointer;
                    margin-bottom: 8px;
                    padding: 10px 17px;
                    img{
                        height: 20px;
                        width: 20px;
                        margin-bottom: 2px;
                    }
                    p{
                        margin-bottom: 0px;
                    }
                    .shangfan{
                        height: 12px;
                        width: 15px;
                        cursor: pointer;
                    }
                }
                .emailInfo:hover{
                    color: #0d0d0d;
                }
                .none{
                    display: none;
                }
                .active{
                    color: #0d0d0d;
                }
            }
            .logoText {
                margin-top: 45px;
                img{
                    height: 26px;
                    width: 96px;
                    margin-bottom: 15px;
                    margin-right: 15px;
                }
                .companey{
                    color: #929292;
                    font-size: 14px;

                }
            }
            .footInfo{
                display: flex;
                min-width: 768px;
                justify-content: space-between;
                margin-top: 40px;
                margin-bottom: 40px;
                .codeInfo{
                    display: flex;
                    padding-right: 40px;

                    .code{
                        height: 90px;
                        width: 90px;
                    }
                    .codeText{
                        margin-top: 25px;
                        margin-left: 10px;
                        font-size: 12px;
                        color: #fff;
                    }
                }
                .listBox{
                    padding: 0 40px;
                    .title{
                        font-size: 16px;
                        color: #0abf9b;
                        margin-bottom: 16px;
                    }
                    .listInfo{
                        font-size: 12px;
                        color: #fff;
                        padding: 4px 0;
                         li{
                            padding-bottom: 10px;
                             cursor: pointer;
                        }
                        li:hover{
                            color: #d1d1d1;
                        }
                    }
                }
            }
        }
        .footerText{
            border-top: 1px solid #434343;
            color: #fff;
            font-size: 12px;
            text-align: center;
            padding: 30px 0;
            .footIcon{
                height: 15px;
                width: 15px;
                margin-right: 5px;
                margin-left: 15px;
            }
            a{
                color: #fff;
                font-size: 12px;
            }
        }
    }
    /****************** pc specail start *********************************/
    @media screen and (max-width:1200px){
        .footercontent{
            .flex{
                .footInfo{
                    .listBox{
                        padding: 0 25px;
                    }
                }
            }
        }
    }
    /****************** pc specail end *********************************/
    /**************** mobile specail start ******************************/
    @media screen and (max-width: 750px) {

    }
    @media screen and (max-width: 768px) {
        .mobileFooter{
            margin-bottom: 20px;
            .logoInfo{
                padding: 20px 0 10px;
                text-align: center;
                .mobileLogo{
                    height: 26px;
                    width: 96px;
                    margin-bottom: 8px;
                }
                .companey{
                    color: #929292;
                    font-size: 14px;
                }
            }

        }
        .mobileCode{
            margin-top: 18px;
            text-align: center;
            .mobilecodeIcon{
                height: 90px;
                width: 90px;
                margin-bottom: 8px;
            }
            .codetext{
                color: #929292;
                font-size: 14px;
            }
        }
        .mobileInfo{
            margin-top: 18px;
            text-align: center;
            .title{
                color: #fff;
                font-size: 14px;
                padding-bottom: 10px;
            }
            .infoText{
                color: #929292;
                font-size: 12px;
                p{
                    margin-bottom: 5px;
                }

            }
        }
    }
    /**************** mobile specail end *****************************/
</style>
<template>
    <div class="footercontent">
        <div class="flexInfo mobile-hidden">
            <div class="flex">
                <div>
                    <div class="logoText">
                        <img src="../assets/images/logo.png"/>
                        <span class="companey">深圳分享家科技信息有限公司</span>
                    </div>
                    <div class="footInfo flex">
                        <div class="codeInfo">
                            <img class='code' src="../assets/images/erweima.png"/>
                            <div class="codeText">
                                <p>关注分享家服务号</p>
                                <p>立刻分享美好</p>
                            </div>
                        </div>
                        <div class="listBox">
                            <p class="title">推荐</p>
                            <ul class="listInfo">
                                <li @click="golink('/health',2)">健康头条</li>
                                <li @click="golink('/news',3)">公司动态</li>
                            </ul>
                        </div>
                        <div class="listBox">
                            <p class="title">公司</p>
                            <ul class="listInfo">
                                <li @click="golink('/aboutour',4)">关于公司</li>
                                <li @click="golink('/aboutour',4)">加入我们</li>
                            </ul>
                        </div>
                        <div class="listBox">
                            <p class="title">联系我们</p>
                            <div class="listInfo">
                                <p>客服热线：400-871-8701</p>
                                <p>服务时间 : 9:00-18:00</p>
                                <p>商务合作：service@ifxj.com</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="codeBox">
                    <div v-if="showEmail" class='emailImg' >商务合作：service@ifxj.com</div>
                    <div  v-if="showPhone" class='phoneImg' >客服热线：400-871-8701</div>
                    <div>
                        <div class="emailInfo" @mouseenter="enterStyle(1)" @mouseleave="leaveStyle(1)">
                            <img  v-if="!showEmail"  src="../assets/images/whriteemail.png">
                            <img  v-if="showEmail"  src="../assets/images/blackemail.png">
                            <p>邮箱</p>
                        </div>
                        <div class="emailInfo" @mouseenter="enterStyle(2)" @mouseleave="leaveStyle(2)">
                            <img  v-if="!showPhone" src="../assets/images/whritePhone.png">
                            <img  v-if="showPhone" src="../assets/images/blackphone.png">
                            <p>客服</p>
                        </div>
                        <p class="emailInfo showTop none" style="height: 59px;line-height: 59px;padding: 0;" @click="goTop"> <img class="shangfan" src="../assets/images/fanhuidingbu.png"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="pc-hidden mobileFooter">
            <div class="logoInfo">
                <img class="mobileLogo" src="../assets/images/logo.png"/>
                <div class="companey">深圳分享家科技信息有限公司</div>
            </div>
            <div class="mobileCode">
                <img class="mobilecodeIcon" src="../assets/images/erweima.png"/>
                <div class="codetext">关注分享家服务号</div>
                <div class="codetext">立刻分享美好</div>
            </div>
            <!--<div class="mobileInfo">-->
                <!--<div class="title">推荐</div>-->
                <!--<div class="infoText">-->
                    <!--<p @click="golink('/health',2)">健康头条</p>-->
                    <!--<p @click="golink('/news',3)">公司动态</p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="mobileInfo">-->
                <!--<div class="title">公司</div>-->
                <!--<div class="infoText">-->
                    <!--<p @click="golink('/aboutour',4)">关于我们</p>-->
                    <!--<p @click="golink('/aboutour',4)">加入我们</p>-->
                <!--</div>-->
            <!--</div>-->
            <div class="mobileInfo">
                <div class="title">联系我们</div>
                <div class="infoText">
                    <p>客服热线：400-871-8701</p>
                    <p>服务时间 : 9:00-18:00</p>
                    <p>商务合作：service@ifxj.com</p>
                </div>
            </div>
        </div>
        <div class="footerText">
            <p>Copyright © 2018 ifxj.com 深圳分享家科技信息有限公司</p>
            <p><a href="" @click="gogognanOne">粤ICP备18049260号-1</a><img class="footIcon" src="../assets/images/footIcon.png"><a  @click="gogognanTwo" href="">粤公网安备 44030502003108号</a></p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "footercontent",
        data() {
            return {
                showEmail: false,
                showPhone: false
            }
        },
        mounted() {
            window.addEventListener('scroll', this.scrollHeight, true);
        },
        methods: {
            scrollHeight(){
                var height = (window.screen.height)/2;
                if(($(window).scrollTop())>height){
                    $('.showTop').css({'display':'block'})
                }else{
                    $('.showTop').css({'display':'none'})
                }
            },
            golink(router, index){
                // $('body').removeClass("main");
                // document.documentElement.style.overflow = 'visible';//启用
                this.$nextTick(() => {
                    this.$router.push({path: router, query: {'index': index}})
                })
            },
            enterStyle(index){
                if(index == 1){
                    this.showEmail = true;
                }else{
                    this.showPhone = true;
                }
            },
            leaveStyle(index){
                if(index == 1){
                    this.showEmail = false;
                }else{
                    this.showPhone = false;
                    // this.showEmail = true;
                }
            },
            goTop(){
                $('html , body').animate({scrollTop: 0},'slow');
            },
            gogognanOne(){
                window.open('http://www.miitbeian.gov.cn/publish/query/indexFirst.action')
            },
            gogognanTwo() {
                window.open('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502003108')
            }
        }
    }
</script>

