<style rel="stylesheet/scss" lang="scss">
        /*************************pc specail start*************************/
        @charset "utf-8";
        $bgcolor: #D51E12;
        $fontFamily: pingfangSC,
        Arial,
        Helvetica,
        sans-serif;
        $fontColor: #fff;
        $bgtc: #ECECEC;
        $baseFontSize: 75;
        .home{
            height: 100%;
        }
    .homeBanner{
            width: 100%;
            height: 100%;
            background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/bac2.png') no-repeat center;
            background-size: cover;
            position: relative;
            #canvasBox{
                position: absolute;
                z-index: 100;
                left: 50%;
                top: 50%;
            }
            .downIcon{
                position: absolute;
                width: 232px;
                height: 140px;
                left: 50%;
                top: 50%;
                margin: -42px 0 0 -120px;
                color: #fff;
                z-index: 1000;
                .text{
                    font-size: 24px;
                    font-weight: 600;
                    letter-spacing: 5px;
                }
                .hometext{
                    text-align: center;
                    font-size: 12px;
                }
            }
        }
    .banner{
        width: 100%;
        height: 640px;
        background-size: 100% 100%;
    }
    .healthServe{
        width: 100%;
        padding: 45px 10%;
        .contentTitle{
            text-align: center;
            .moblieTitle{
                font-size: 30px;
                color: #3d3d3d;
                font-weight: 600;
            }
            .contentText{
                color: #525252;
                font-size: 16px;
                padding-top: 13px;
                padding-bottom: 50px;
            }
        }
        .textbox{
            min-height: 320px;
            text-align: center;
            -webkit-transition: all .3s ease-in .3s;
            transition: all .3s ease-in .3s;
            position: relative;
            .backicon{
                height: 250px;
            }
            .backicon1{
                width: 100%;
                background: url('../assets/images/serverOne.png') no-repeat center;
                background-size: cover;
            }
            .backicon2{
                width: 100%;
                background: url('../assets/images/serverTwo.png') no-repeat center;
                background-size: cover;
            }
            .backicon3{
                width: 100%;
                background: url('../assets/images/serverThree.png') no-repeat center;
                background-size: cover;
            }
            .backicon4{
                width: 100%;
                background: url('../assets/images/serverFoure.png') no-repeat center;
                background-size: cover;
            }
            .title{
                font-size: 20px;
                color: #3d3d3d;
                margin: 10px auto;
            }
            .lead{
                font-size: 12px;
                padding: 0px 15px 25px;
            }
        }
        @media (hover) {
            .textbox:hover {
                box-shadow: 0px 2px 29px 0px rgba(57, 57, 57, 0.18);
                -webkit-transition:all .2s linear;
                /*transition: all .3s ease-in .3s;*/
                transition: all .2s linear;
                margin-top: -10px;
            }
        }
    }
    .innovate{
        padding: 45px 10%;
        width: 100%;
        background: url('../assets/images/bac3.png') no-repeat center;
        background-size: cover;
        .contentTitle{
            text-align: center;
            .moblieTitle{
                font-size: 30px;
                color: #3d3d3d;
                font-weight: 600;
            }
            .contentText{
                color: #525252;
                font-size: 16px;
                padding-top: 13px;
                padding-bottom: 45px;
            }
        }
        .index_8_product{
            overflow: hidden;
            margin: 0;
            .card_qu:nth-child(1) {
                .card {
                    .iconfont:before {
                        content: "";
                        background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/dangan.png) center 172px no-repeat;
                        background-size: 54px 54px;
                    }
                }
            }
            .card_qu:nth-child(2) {
                .card {
                    .iconfont:before {
                        content: "";
                        background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/zhinengkefu.png) center 172px no-repeat;
                        background-size: 54px 54px;
                    }
                }
            }
            .card_qu:nth-child(3) {
                .card {
                    .iconfont:before {
                        content: "";
                        background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/shuju.png) center 172px no-repeat;
                        background-size: 54px 54px;
                    }
                }
            }
            .card_qu:nth-child(4) {
                .card {
                    .iconfont:before {
                        content: "";
                        background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/jiqiren.png) center 172px no-repeat;
                        background-size: 54px 54px;
                    }
                }
            }
            .active{
                padding: 0;
            }
            .card-wrapper{
                .card:hover{
                    .card-mask {
                        display: block
                    }
                }
                .card:hover{
                    .iconfont:before {
                        height: 180px;
                        line-height: 88px;
                        overflow: hidden;
                        background-position: center 122px;
                        -webkit-transform: scale(.8);
                        -ms-transform: scale(.8);
                        transform: scale(.8)
                    }
                    .desc {
                        height: auto;
                        height: initial
                    }
                }
                .card {
                    opacity: 1;
                    -webkit-transition: opacity .3s;
                    -o-transition: opacity .3s;
                    transition: opacity .3s;
                    cursor: pointer;
                    height: 425px;
                    color: #fff;
                    float: left;
                    position: relative;
                    background-repeat: repeat;
                    .iconfont {
                        position: relative;
                    }

                    .iconfont:before {
                        width: 54px;
                        display: block;
                        font-size: 32px;
                        text-align: center;
                        line-height: 140px;
                        height: 240px;
                        margin: auto;
                        -webkit-transition: all .8s;
                        -o-transition: all .8s;
                        transition: all .8s
                    }
                    .text {
                        position: relative;
                        text-align: center;
                        margin: 0px 0;
                        font-size: 16px;
                    }
                    .desc {
                        opacity: .8;
                        height: 0;
                        margin: 20px 0;
                        padding: 0 20px;
                        font-size: 14px;
                        overflow: hidden;
                        line-height: 20px;
                        text-align: center;
                    }
                    .backicon{
                        width: 100%;
                        height: 425px;
                    }
                    .backicon5 {
                        background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate1.png') no-repeat center;
                        background-size: cover;
                        position: absolute;
                        top: 0;
                        left: 0
                    }
                    .backicon6 {
                        background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate2.png') no-repeat center;
                        background-size: cover;
                        position: absolute;
                        top: 0;
                        left: 0
                    }
                    .backicon8 {
                        background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate4.png') no-repeat center;
                        background-size: cover;
                        position: absolute;
                        top: 0;
                        left: 0
                    }
                    .backicon7 {
                        background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate3.png) no-repeat center;
                        background-size: cover;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                    .card-mask {
                        height: 100%;
                        width: 100%;
                        background: rgba(20, 211, 165, 0.6);
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: none;
                    }
                }
            }
        }
        .innovatebox{
            padding: 0;
        }
    }
    .news{
        padding: 45px 10%;
        width: 100%;
        .contentTitle{
            text-align: center;
            .moblieTitle{
                font-size: 30px;
                color: #3d3d3d;
                margin-bottom: 45px;
                margin-top: 5px;
                font-weight: 600;
            }
            .contentText{
                color: #666;
                font-size: 12px;
                padding-top: 13px;
                padding-bottom: 40px;
            }
        }
        .innovatetextbox{
            border-radius: 5px;
            box-shadow: 0px 2px 43px 0px
            rgba(115, 115, 115, 0.14);
            display: flex;
            padding: 20px 0 20px 20px;
            height: 108px;
            width: 359px;
            position: relative;
            .newsLeft{
                margin-left: -32px;
                padding: 8px 20px;
                background-color: #0abf9b;
                color: #fff;
                text-align: center;
                display: inline-block;
                .newsMonth{
                    border-bottom: 1px solid #fff;
                    font-size: 18px;
                    padding: 0 12px 6px;
                    margin-bottom: 3px;
                }
                .newsYear{
                    font-size: 12px;
                    margin-bottom: 0px;
                }
            }
            .newsRight{
              padding: 9px 20px 9px;
                display: inline-block;
            }
            .newsRight1{
                padding: 9px 20px 9px;
                display: inline-block
            }

        }
    }
        @media screen and (min-width: 1600px) {
            .homeBanner{
                .downIcon{
                    width: 360px;
                    height: 140px;
                    margin: -60px 0 0 -175px;
                    .text{
                        font-size: 40px;
                        letter-spacing: 5px;
                    }
                    .hometext{
                        text-align: center;
                        font-size: 18px;
                        padding-top: 10px;
                    }
                }
            }
        }
        @media screen and (min-width: 1920px) {
            .homeBanner{
                .downIcon{
                    width: 425px;
                    height: 140px;
                    margin: -70px 0 0 -210px;
                    .text{
                        font-size: 48px;
                        letter-spacing: 5px;
                    }
                    .hometext{
                        text-align: center;
                        font-size: 20px;
                        padding-top: 10px;
                    }
                }
            }
            .healthServe{
                .textbox{
                    .backicon{
                        height: 450px;
                    }
                }
            }
            .innovate{
                .index_8_product{
                    /*overflow: hidden;*/
                    .card_qu:nth-child(1) {
                        .card {
                            .iconfont:before {
                                content: "";
                                background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/dangan.png) center 260px no-repeat;
                                background-size: 54px 54px;
                            }
                        }
                    }
                    .card_qu:nth-child(2) {
                        .card {
                            .iconfont:before {
                                content: "";
                                background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/zhinengkefu.png) center 260px no-repeat;
                                background-size: 54px 54px;
                            }
                        }
                    }
                    .card_qu:nth-child(3) {
                        .card {
                            .iconfont:before {
                                content: "";
                                background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/shuju.png) center 260px no-repeat;
                                background-size: 54px 54px;
                            }
                        }
                    }
                    .card_qu:nth-child(4) {
                        .card {
                            .iconfont:before {
                                content: "";
                                background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/jiqiren.png) center 260px no-repeat;
                                background-size: 54px 54px;
                            }
                        }
                    }
                    .active{
                        padding: 0;
                    }
                    .card-wrapper{
                        .card:hover{
                            .card-mask {
                                display: block
                            }
                            .iconfont:before {
                                height: 305px;
                                overflow: hidden;
                                background-position: center 250px;
                                -webkit-transform: scale(.8);
                                -ms-transform: scale(.8);
                                transform: scale(.8)
                            }
                            .desc {
                                height: auto;
                                height: initial;
                            }
                        }
                        .card {
                            opacity: 1;
                            -webkit-transition: opacity .3s;
                            -o-transition: opacity .3s;
                            transition: opacity .3s;
                            cursor: pointer;
                            height:  675px;
                            color: #fff;
                            float: left;
                            position: relative;
                            background-repeat: repeat;
                            .iconfont {
                                position: relative;
                            }

                            .iconfont:before {
                                width: 54px;
                                display: block;
                                font-size: 32px;
                                text-align: center;
                                line-height: 100px;
                                height: 345px;
                                margin: auto;
                                -webkit-transition: all .8s;
                                -o-transition: all .8s;
                                transition: all .8s
                            }
                            .text {
                                position: relative;
                                text-align: center;
                                margin-top: -16px;
                            }
                            .desc {
                                opacity: .8;
                                height: 0;
                                margin: 25px 0;
                                padding: 0 20px;
                                font-size: 12px;
                                overflow: hidden;
                                line-height: 20px;
                                text-align: center;
                            }
                            .backicon{
                                width: 100%;
                                height:  675px;
                            }
                            .backicon5 {
                                background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate1.png') no-repeat center;
                                background-size: cover;
                                position: absolute;
                                top: 0;
                                left: 0
                            }
                            .backicon6 {
                                background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate2.png') no-repeat center;
                                background-size: cover;
                                position: absolute;
                                top: 0;
                                left: 0
                            }
                            .backicon8 {
                                background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate4.png') no-repeat center;
                                background-size: cover;
                                position: absolute;
                                top: 0;
                                left: 0
                            }
                            .backicon7 {
                                background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate3.png) no-repeat center;
                                background-size: cover;
                                position: absolute;
                                top: 0;
                                left: 0;
                            }
                            .card-mask {
                                height: 100%;
                                width: 100%;
                                background: rgba(20, 211, 165, 0.6);
                                position: absolute;
                                top: 0;
                                left: 0;
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        @media screen and (min-width: 2560px) {
            .homeBanner{
                .downIcon{
                    width: 505px;
                    height: 140px;
                    margin: -90px 0 0 -245px;

                    .text{
                        font-size: 58px;
                        letter-spacing: 5px;
                    }
                    .hometext{
                        text-align: center;
                        font-size: 26px;
                        padding-top: 15px;
                    }
                }
            }
        }
        @media screen and (max-width: 1200px) {
            .healthServe{
                .contentTitle{
                    .moblieTitle{
                        font-size: 22px;
                        font-weight: 600;
                    }
                }
                .textbox{
                    .backicon{
                        height: 220px;
                    }
                }
            }
            .innovate{
                .contentTitle{
                    .moblieTitle{
                        font-size: 22px;
                        font-weight: 600;
                    }
                }
                .innovatebox{
                    .innovatetextbox{
                        .backicon{
                            height: 380px;
                            .circleBox{
                                padding-top: 155px;
                            }
                            .coverBox{
                                padding-top: 105px;
                            }
                        }
                    }
                }
            }
        }
    /****************** pc specail end *********************************/

    /**************** mobile specail start ******************************/
        @media screen and (max-width: 768px) {
            .homeBanner{
                background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/mobilebac2.png') no-repeat center;
                background-size: cover;
                position: relative;
            }
           .healthServe{
               padding: 25px 15px;
               .contentTitle{
                   .moblieTitle{
                       font-size: 22px;
                       font-weight: 600;
                   }
                   .contentText{
                       padding-bottom: 15px;
                   }
               }
               .textbox{
                   min-height: 200px;
                   .backicon{
                       height: 180px;
                   }
                   .lead{
                       color: #929292;
                       font-size: 14px;
                   }
               }
            }
            .innovate {
                padding: 25px 15px;
                width: 100%;
                background: #f2f3f2;
                .contentTitle{
                    .moblieTitle{
                        font-size: 22px;
                        font-weight: 600;
                    }
                    .contentText{
                        padding-bottom: 15px;
                    }
                }
                .innovatebox {
                    .innovatetextbox{
                         .backicon5 {
                            width: 100%;
                             background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate1.png') no-repeat center;
                             background-size: cover;
                        }
                        .backicon6 {
                            width: 100%;
                            background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate4.png) no-repeat center;
                            background-size: cover;
                        }
                        .backicon7 {
                            width: 100%;
                            background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate3.png) no-repeat center;
                            background-size: cover;
                        }
                        .backicon8{
                            width: 100%;
                            background: url(https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/innovate4.png) no-repeat center;
                            background-size: cover;
                        }

                        .backicon{
                            height: 180px;
                            .circleBox{
                                padding-top: 20px;
                                color: #fff;
                                .text {
                                    font-size: 12px;
                                    padding: 10px 15px 15px;
                                }
                                .circle {
                                    height: 35px;
                                    width: 35px;
                                    margin: 0 auto;
                                    img {
                                        height: 100%;
                                        width: 100%;
                                    }
                                }
                                .circleText {
                                    font-size: 14px;
                                    margin-top: 8px;
                                    text-align: center;
                                }
                            }
                        }

                    }
                }
            }
            .news{
                padding: 0px 22px 25px;
                .contentTitle{
                    .moblieTitle{
                        font-size: 22px;
                        font-weight: 600;
                        margin: 30px 0 15px;
                    }
                }
                .newsbox{
                    margin-top: 15px;
                    .innovatetextbox{
                        width: 287px!important;
                        margin: 0 auto;
                        .newsRight{
                            padding: 0 20px;
                            font-size: 13px;
                        }
                        .newsRight1 {
                            padding: 0 20px;
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    /**************** mobile specail end *****************************/
    .carousel-indicators li{
        height: 15px;
        width: 15px;
        margin-right: 6px;
    }
    .carousel-indicators .active {
        width: 15px;
        height: 15px;
        margin-right: 6px;
        box-sizing: border-box;
    }

        #mycanvas{
            -webkit-animation: rotation 2.67s linear infinite;
            animation: rotation 2.67s linear infinite;
        }
        @keyframes rotation {
            from {
                transform: rotate(0deg) translateZ(1px);
                -ms-transform: rotate(0deg) translateZ(1px);
                -moz-transform:rotate(0deg) translateZ(1px);
                -webkit-transform: rotate(0deg) translateZ(1px);
                -o-transform: rotate(0deg) translateZ(1px);
            }
            to {
                transform: rotate(360deg) translateZ(1px);
                -ms-transform: rotate(360deg) translateZ(1px);
                -moz-transform: rotate(360deg) translateZ(1px);
                -webkit-transform: rotate(360deg) translateZ(1px);
                -o-transform: rotate(360deg) translateZ(1px);
            }
        }

</style>
<template>
    <div class="home">
        <Head></Head>
        <!--pc header start-->
        <div class="homeBanner">
            <!--<div id="canvasBox" class="mobile-hidden">-->
                <!--<canvas id="mycanvas"></canvas>-->
            <!--</div>-->
            <div class="downIcon">
                    <div class="text">
                        科技让生命更精彩
                    </div>
                    <div class="text" style="margin-top: 10px;"> 健康让生活更美好</div>
                    <p class="hometext">为了满足人们对美好生活的需求</p>
            </div>
        </div>
        <!--pc header end-->
        <div class="container healthServe">
            <div class="contentTitle">
                <h3 class="moblieTitle">全面的数字化健康服务</h3>
                <p class="contentText">依托人工智能、大数据、云计算等技术创新，整合医疗服务、健康管理、头条资讯、健康保险四大优势，为客户提供全面的健康服务</p>
            </div>
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="textbox" >
                        <div class="backicon1 backicon"></div>
                        <p class="title">
                            医疗服务
                        </p>
                        <p class="lead">无需预约，通过人工智能平台可获得健康问询。依托平台合作的医疗网络可获得预约挂号、高端诊疗、私人健康顾问等服务</p>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="textbox">
                        <div class="backicon2 backicon"></div>
                        <p class="title">
                            健康管理
                        </p>
                        <p class="lead">饮食管理、运动管理、睡眠管理、心里管理、情绪管理，通过掌握健康的生活方式来改善自身的健康水平</p>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="textbox">
                        <div class="backicon3 backicon"></div>
                        <p class="title">
                            头条资讯
                        </p>
                        <p class="lead">通过健康知识共享平台为客户提供中医、养生、营养、心理、健身、防癌、慢性病等全方面的健康资讯</p>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="textbox">
                        <div class="backicon4 backicon"></div>
                        <p class="title">
                            健康保险
                        </p>
                        <p class="lead">依托科技创新，与产品合作方共同创新健康保障产品，满足客户高端保障服务、特殊群体保障服务等多层面等保障需求</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container innovate">
            <div class="contentTitle">
                <h3 class="moblieTitle mobile-hidden">专注前沿技术研究 推动健康产业创新</h3>
                <h3 class="moblieTitle pc-hidden">专注前沿技术研究</h3>
                <h3 class="moblieTitle pc-hidden" style="margin-top: -5px;">推动健康产业创新</h3>
                <p class="contentText">分享家科技结合自身大数据、人工智能技术、前沿科技应用积累，助力合作伙伴产品与服务创新</p>
            </div>
            <div class="row index_8_product">
                <div style="margin-bottom: -15px;" class="col-sm-3 col-md-3 col-lg-3  innovatebox card-wrapper active card_qu" v-for="(item,index) in innovateData">
                    <div class="card  mobile-hidden" >
                        <div :class="'backicon'+(index+5)" class='backicon'></div>
                        <!--<img src="../assets/images/innovate1.png">-->
                        <div class="card-mask"></div>
                        <div class="iconfont icon-bmr"></div>
                        <div class="text">{{item.title}}</div>
                        <div class="desc">{{item.text}}</div>
                    </div>
                    <div class="innovatetextbox pc-hidden" >
                        <div :class="'backicon'+(index+5)" class='backicon'>
                            <div class="circleBox">
                                <div class="circle"><img :src="item.img"></div>
                                <p class="circleText">{{item.title}}</p>
                                <p class="text pc-hidden">{{item.text}}</p>
                            </div>
                            <div class="coverBox mobile-hidden">
                                <div class="circle"><img :src="item.img"></div>
                                <p class="circleText">{{item.title}}</p>
                                <p class="text">{{item.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container news">
            <div class="contentTitle">
                <h3 class="moblieTitle">最新动态</h3>
            </div>
            <div class="mobile-hidden flexAround">
                <div class=" newsbox" v-for="(item,index) in newData">
                    <div class="innovatetextbox" >
                        <div class="newsLeft">
                            <p class="newsMonth">{{item.month}}</p>
                            <p class="newsYear">{{item.year}}</p>
                        </div>
                        <div :class="index==0?'newsRight1 newsRight':'newsRight'">
                            <span>{{item.content}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pc-hidden">
                <div class="col-sm-6 col-md-6 col-lg-6 newsbox" v-for="(item,index) in newData">
                    <div class="innovatetextbox" >
                        <div class="newsLeft">
                            <p class="newsMonth">{{item.month}}</p>
                            <p class="newsYear">{{item.year}}</p>
                        </div>
                        <div :class="index==0?'newsRight1 newsRight':'newsRight'">
                            <span>{{item.content}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot></Foot>
    </div>
</template>

<script>
    import Head from '../components/headercontent'
    import Foot from '../components/footercontent'
    export default {
        name: 'home',
        data () {
            return {
                i: 0,
                innovateData: [{'title':'电子健康档案','img':require('../assets/images/dangan.png'),'text':'致力于为每个家庭提供一位家庭医生，为每个人提供 一份电子健康档案，为每个人提供一个健康管理计划，建立健康医疗生态系统'},
                    {'title':'智能客服','img':require('../assets/images/zhinengkefu.png'),'text':'场景化智能客服，提升客服领域用户体验，实现7×24小时全时段服务，低成本解决大量咨询问题，提升服务体验'},
                    {'title':'数据洞察','img':require('../assets/images/shuju.png'),'text':'针对海量数据，实现快速分析，根据业务特点建立360°用户画像，解析用户用户偏好、业务指标、优化精准营销策略'},
                    {'title':'智能健康顾问','img':require('../assets/images/jiqiren.png'),'text':'机器人，可以回答用户的常见问题，在产品推荐场景中通过多轮会话收集用户需求，并通过深度解析产品和服务条款，实现基于用户画像的个性化推荐'}],
                newData:[{'year':'2018','month': '9','content':'近日，分享家与广州盛成妈妈网络科技股份有限公司签署战略合作，为妈妈网用户提供健康资讯、健康保险等综合服务'},{'year':'2018','month': '8','content':'近日，分享家与中国大地财产保险股份有限公司签署战略合作，为大地保险开展互联网保险业务提供技术支持。'
                    }]
            }
        },
        created(){
            $('.navbar').removeClass('fixed-topone');
            document.getElementsByTagName("title")[0].innerHTML = "分享家 - 科技让生命更精彩";

        },
        mounted(){
            window.addEventListener('scroll', this.handleFun, true);
            $('html , body').animate({scrollTop: 0},'slow');
            if(this.$route.query.index){
                this.chengeheader(this.$route.query.index)
            }
            // this.onefunction()
            // this.canvas()
            // window.onresize = () => {
            //     this.canvas()
            // };

        },
        methods:{
            getRads(degrees){
                return (Math.PI * degrees) / 180;
            },
            canvas(){
                var myCanvas  = document.getElementById('mycanvas');
                var canvasBox = document.getElementById('canvasBox');
                var autuSize = 0.35* (window.innerWidth);
                myCanvas.width= autuSize;
                myCanvas.height= autuSize;
                canvasBox.width= autuSize;
                canvasBox.height= autuSize;
                canvasBox.style.marginTop = -(0.5*autuSize)+'px';
                canvasBox.style.marginLeft = -(0.5*autuSize)+'px';
                console.log(myCanvas.width)
                var ctx = myCanvas.getContext("2d");
                var gr = ctx.createRadialGradient(0.3*autuSize,0.3*autuSize,0.2*autuSize,0.1*autuSize,0.4*autuSize,0.6*autuSize);
//添加颜色端点
                gr.addColorStop(0,'rgba(255,255,255,1)');
                gr.addColorStop(.4,'rgba(255,255,255,0.5)');
                gr.addColorStop(0.8,'rgba(0,189,200,0.4)');
//应用fillStyle生成渐变
                ctx.lineWidth = 2;
                ctx.strokeStyle = gr;
                ctx.arc(0.5*autuSize,0.5*autuSize,0.5*autuSize,(Math.PI/180)*0,(Math.PI/180)*360,false);
                ctx.stroke();
                ctx.beginPath();

                var gr = ctx.createRadialGradient(0.1*autuSize,0.1*autuSize,0.2*autuSize,0.6*autuSize,0.4*autuSize,0.8*autuSize);
//添加颜色端点
                gr.addColorStop(0,'rgba(0,189,200,1)');
                gr.addColorStop(.5,'rgba(0,189,200,0.6)');
                gr.addColorStop(0.7,'rgba(255,255,255,.6)');
//应用fillStyle生成渐变
                ctx.lineWidth = 2;
                ctx.strokeStyle = gr;
                ctx.arc(0.5*autuSize,0.5*autuSize,0.45*autuSize,this.getRads(360),this.getRads(0));
                ctx.stroke();
                ctx.beginPath();

                var gr = ctx.createRadialGradient(0.6*autuSize,0.4*autuSize,0.3*autuSize,0.1*autuSize,0.4*autuSize,0.6*autuSize);
//添加颜色端点
                gr.addColorStop(0.8,'rgba(0,189,200,1)');
                gr.addColorStop(.5,'rgba(0,189,200,0.5)');
                gr.addColorStop(0.2,'rgba(255,255,255,1)');
//应用fillStyle生成渐变
                ctx.lineWidth = 2;
                ctx.strokeStyle = gr;
                ctx.arc(0.5*autuSize,0.5*autuSize,0.4*autuSize,this.getRads(0),this.getRads(360));

                ctx.stroke();
            },
            onefunction(){
                var div=document.getElementsByClassName("one")[0];
                console.log(div);
                setCss3(div,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
                var angel=0;
                setInterval(function(){
                    angel+=8;
                    setCss3(div,{transform:"rotate("+angel+"deg)","transform-origin":"200 200"})
                },80)
                function setCss3(obj,objAttr){
                    //循环属性对象
                    for(var i in objAttr){
                        var newi=i;
                        //判断是否存在transform-origin这样格式的属性
                        if(newi.indexOf("-")>0){
                            var num=newi.indexOf("-");
                            newi=newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase());
                        }
                        //考虑到css3的兼容性问题,所以这些属性都必须加前缀才行
                        obj.style[newi]=objAttr[i];
                        newi=newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
                        obj.style[newi]=objAttr[i];
                        obj.style["webkit"+newi]=objAttr[i];
                        obj.style["moz"+newi]=objAttr[i];
                        obj.style["o"+newi]=objAttr[i];
                        obj.style["ms"+newi]=objAttr[i];
                    }
                }
            },
            handleFun(){
                // 页面滚动距顶部距离
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                    document.body.scrollTop
                var scroll = scrollTop - this.i;
                this.i = scrollTop;
                var height = $('.navbar').height()
                if ($(window).scrollTop() >= height) {
                    $('.navbar').css({'margin-top':'-100px'}).addClass('fixed-top');
                } else {
                    if(scroll<0){//向上滚动
                        $('.navbar').css({'margin-top':'0px'}).removeClass('fixed-top')
                     }
                }
            },
            scrollContent(){
                var height = $('.homeBanner').height()-80;
                $('html , body').animate({scrollTop: height},'slow');
            },
            chengeheader(index){
                var obj = $(".spanborder")
                for(var i = 0;i< obj.length;i ++){
                    obj[i].className = 'spanborder'
                    obj[index].className = 'spanborder active'
                }
            },
        },
        components:{
            Head,
            Foot,
        },
        beforeDestroy(){
            window.removeEventListener("scroll",this.handleFun,true)
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

