<style rel="stylesheet/scss" lang="scss">
    /*************************pc specail start*************************/
    .ourBanner{
        width: 100%;
        height: 100vh;
        background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/guanyuwomen_banner.jpg') no-repeat center;
        background-size: cover;
        position: relative;
        .downIcon{
            position: absolute;
            height: 140px;
            left: 10%;
            top: 50%;
            margin: -74px 0 0 0;
            color: #fff;
            .text{
                width: 166px;
                border: 1px solid #fff;
                text-align: center;
                line-height: 50px;
                height: 50px;
                font-size: 24px;
                font-weight: 600;
                letter-spacing: 5px;
                margin-bottom: 32px;
            }
            .hometext{
                margin-bottom: 15px;
                text-align: left;
                font-size: 12px;
            }
        }
    }

    @media screen and (min-width: 1400px) {
        .treatment{
            .treatmentTop{
                height: 700px;
                width: 100%;
                background: url('../assets/images/treatment.png') no-repeat center;
                background-size: 100% 100%;
                position: relative;
                .changxiang{
                    position: absolute;
                    left: 49%;
                    color: #fff;
                    border: 3px solid #fff;
                    top: 80px;
                    padding: 20px 45px;
                    .jiaru{
                        font-size: 48px;
                        letter-spacing: 2px;
                        .jiaruspan{
                            padding-left: 10px;
                        }
                    }
                    .weilai{
                        font-size:14px;
                        text-align: center;
                        line-height: 46px;
                    }
                }
                .chakan{
                    position: absolute;
                    margin: 0 auto;
                    top: 520px;
                    left: 49%;
                    background: #0abf9b;
                    color: #fff;
                    padding: 14px 30px;
                    cursor: pointer;
                    font-weight: 600;
                }
            }
            .treatmentBoottom{
                height: 698px;
                width: 100%;
                .treamentLeft{
                    height: 698px;
                    width: 35%;
                    background: url('../assets/images/treatmentLeft.png') no-repeat center;
                    background-size: cover;
                }
                .treamentRight{
                    height: 698px;
                    width: 65%;
                    background: url('../assets/images/treatmentRight.png') no-repeat center;
                    background-size: cover;
                    position: relative;
                    .showtreatment{
                        background: rgba(0, 191, 155, 0.7);
                        width: 50%;
                        text-align: center;
                        color: #fff;
                        padding: 100px 150px;
                        position: absolute;
                        top: -75px;
                        height: 698px;
                        line-height: 36px;
                        font-size: 16px;
                        @keyframes fadeIn{
                            0%{
                                opacity:0;
                                transform:translate3d(0,0px,0);
                            }
                            100%{
                                opacity:1;
                                transform:translate3d(0,20px,0);
                            }
                        }
                        @-webkit-keyframes fadeIn{
                            0%{
                                opacity:0;
                                -webkit-transform:translate3d(0,0,0);
                            }
                            100%{
                                opacity:1;
                                -webkit-transform:translate3d(0,20px,0);
                            }
                        }
                        @-o-keyframes fadeIn{
                            0%{
                                opacity:0;
                                -o-transform:translateY(0px);
                                transform: translateZ(0);
                            }
                            100%{
                                opacity:1;
                                -o-transform:translateY(20px);
                                transform: translateZ(0);
                            }
                        }
                        .animatetop{
                            animation: fadeIn 0.5s .5s ease-in both;
                            -webkit-animation: fadeIn  0.5s .5s ease-in both;
                        }
                    }
                }

            }
        }
    }
    @media screen and (max-width: 1400px) {
        .treatment{
            .treatmentTop{
                height: 700px;
                width: 100%;
                background: url('../assets/images/treatment.png') no-repeat center;
                background-size: 100% 100%;
                position: relative;
                .changxiang{
                    position: absolute;
                    left: 49%;
                    color: #fff;
                    border: 3px solid #fff;
                    top: 80px;
                    padding: 20px 45px;
                    .jiaru{
                        font-size: 42px;
                        letter-spacing: 2px;
                        .jiaruspan{
                            padding-left: 10px;
                        }
                    }
                    .weilai{
                        font-size:12px;
                        text-align: center;
                        line-height: 46px;
                    }
                }
                .chakan{
                    position: absolute;
                    margin: 0 auto;
                    top: 510px;
                    left: 49%;
                    background: #0abf9b;
                    color: #fff;
                    padding: 14px 30px;
                    font-weight: 600;
                    cursor: pointer;
                }
            }
            .treatmentBoottom{
                height: 698px;
                width: 100%;
                .treamentLeft{
                    height: 698px;
                    width: 35%;
                    background: url('../assets/images/treatmentLeft.png') no-repeat center;
                    background-size: cover;
                }
                .treamentRight{
                    height: 698px;
                    width: 65%;
                    background: url('../assets/images/treatmentRight.png') no-repeat center;
                    background-size: cover;
                    position: relative;
                    .showtreatment{
                        background: rgba(0, 191, 155, 0.8);
                        width: 50%;
                        text-align: center;
                        color: #fff;
                        padding: 100px 120px;
                        position: absolute;
                        top: -75px;
                        height: 698px;
                        line-height: 36px;
                        font-size: 18px;
                        @keyframes fadeIn{
                            0%{
                                opacity:0;
                                transform:translate3d(0,0px,0);
                            }
                            100%{
                                opacity:1;
                                transform:translate3d(0,20px,0);
                            }
                        }
                        @-webkit-keyframes fadeIn{
                            0%{
                                opacity:0;
                                -webkit-transform:translate3d(0,0,0);
                            }
                            100%{
                                opacity:1;
                                -webkit-transform:translate3d(0,20px,0);
                            }
                        }
                        @-o-keyframes fadeIn{
                            0%{
                                opacity:0;
                                -o-transform:translateY(0px);
                                transform: translateZ(0);
                            }
                            100%{
                                opacity:1;
                                -o-transform:translateY(20px);
                                transform: translateZ(0);
                            }
                        }
                        .animatetop{
                            animation: fadeIn 0.5s .5s ease-in both;
                            -webkit-animation: fadeIn  0.5s .5s ease-in both;
                        }
                    }
                }

            }
        }
    }
    @media screen and (min-width: 1248px) {
        .companyProfile{
            width: 100%;
            background: url('../assets/images/beijing3.png') no-repeat center;
            background-size: cover;
            position: relative;
            .backCompaney{
                background: #0abf9b;
                height: 380px;
                position: relative;
                top: 100px;
                width: 80%;
                @keyframes fadeInUp{
                    0%{
                        opacity:0;
                        transform:translate3d(0,0px,0);
                    }
                    100%{
                        opacity:1;
                        transform:translate3d(0,20px,0);
                    }
                }
                @-webkit-keyframes fadeInUp{
                    0%{
                        opacity:0;
                        -webkit-transform:translate3d(0,0,0);
                    }
                    100%{
                        opacity:1;
                        -webkit-transform:translate3d(0,20px,0);
                    }
                }
                @-o-keyframes fadeInUp{
                    0%{
                        opacity:0;
                        -o-transform:translateY(0px);
                        transform: translateZ(0);
                    }
                    100%{
                        opacity:1;
                        -o-transform:translateY(20px);
                        transform: translateZ(0);
                    }
                }
                .imgCompaneyFade{
                    animation: fadeInUp 1s .5s ease-in both;
                    -webkit-animation: fadeInUp 1s .5s ease-in both;
                }
                .imgCompaney{
                    height: 400px;
                    background: url('../assets/images/gongsijianjie.png') no-repeat center;
                    background-size: cover;
                    width: 46%;
                    margin-left: 25px;
                    margin-top: -50px;
                }
                .textCompaney{
                    color: #fff;
                    margin-top: 60px;
                    margin-left: 10px;

                    .titleCompaney{
                        display: inline-block;
                        font-size: 30px;
                        padding: 10px 20px;
                        border: 3px solid #fff;
                        /*font-weight: 600*/
                    }
                    .text{
                        font-size: 12px;
                        line-height: 35px;
                    }
                }
            }
        }

    }
    @media screen and (min-width: 1600px){
        .ourBanner{
            .downIcon{
                height: 140px;
                margin: -106px 0 0 0px;
                left: 10%;
                .text{
                    width: 238px;
                    height: 68px;
                    line-height: 68px;
                    font-size: 40px;
                    letter-spacing: 5px;
                    text-align: center;
                    margin-bottom: 50px;
                    font-weight: 600;
                }
                .hometext{
                    text-align: left;
                    font-size: 18px;
                    margin-bottom: 20px;
                }
            }
        }
    }
    @media screen and (min-width: 1920px) {
        .companyProfile{
            width: 100%;
            height: 700px;
            background: url('../assets/images/beijing3.png') no-repeat center;
            background-size: cover;
            position: relative;
            .backCompaney{
                background: #0abf9b;
                height: 680px;
                position: relative;
                top: 100px;
                width: 80%;
                @keyframes fadeInUp{
                    0%{
                        opacity:0;
                        transform:translate3d(0,0px,0);
                    }
                    100%{
                        opacity:1;
                        transform:translate3d(0,20px,0);
                    }
                }
                @-webkit-keyframes fadeInUp{
                    0%{
                        opacity:0;
                        -webkit-transform:translate3d(0,0,0);
                    }
                    100%{
                        opacity:1;
                        -webkit-transform:translate3d(0,20px,0);
                    }
                }
                @-o-keyframes fadeInUp{
                    0%{
                        opacity:0;
                        -o-transform:translateY(0px);
                        transform: translateZ(0);
                    }
                    100%{
                        opacity:1;
                        -o-transform:translateY(20px);
                        transform: translateZ(0);
                    }
                }
                .imgCompaneyFade{
                    animation: fadeInUp 1s .5s ease-in both;
                    -webkit-animation: fadeInUp 1s .5s ease-in both;
                }
                .imgCompaney{
                    height: 700px;
                    background: url('../assets/images/gongsijianjie.png') no-repeat center;
                    background-size: cover;
                    width: 46%;
                    margin-left: 25px;
                    margin-top: -60px;
                }
                .textCompaney{
                    color: #fff;
                    margin-top: 180px;
                    padding: 0px 106px 0 137px;
                    .titleCompaney{
                        display: inline-block;
                        font-size: 30px;
                        border: 3px solid #fff;
                    }
                    .text{
                        font-size: 16px;
                        line-height: 35px;
                        padding: 36px 0;
                    }
                }
            }
        }
        .treatment{
            .treatmentTop{
                height: 990px;
                width: 100%;
                background: url('../assets/images/treatment.png') no-repeat center;
                background-size: 100% 100%;
                position: relative;
                .changxiang{
                    position: absolute;
                    left: 49%;
                    color: #fff;
                    border: 3px solid #fff;
                    top: 150px;
                    padding: 20px 45px;
                    .jiaru{
                        font-size: 42px;
                        letter-spacing: 2px;
                        .jiaruspan{
                            padding-left: 10px;
                        }
                    }
                    .weilai{
                        font-size:12px;
                        text-align: center;
                        line-height: 46px;
                    }
                }
                .chakan{
                    position: absolute;
                    margin: 0 auto;
                    top: 670px;
                    left: 49%;
                    background: #0abf9b;
                    color: #fff;
                    padding: 14px 32px;
                    font-weight: 600;
                    font-size: 18px;
                    cursor: pointer;
                }
            }
            .treatmentBoottom{
                height: 900px;
                width: 100%;
                .treamentLeft{
                    height: 900px;
                    width: 35%;
                    background: url('../assets/images/treatmentLeft.png') no-repeat center;
                    background-size: cover;
                }
                .treamentRight{
                    height: 900px;
                    width: 65%;
                    background: url('../assets/images/treatmentRight.png') no-repeat center;
                    background-size: cover;
                    position: relative;
                    .showtreatment{
                        background: rgba(0, 191, 155, 0.8);
                        width: 50%;
                        text-align: center;
                        color: #fff;
                        padding: 160px 120px;
                        position: absolute;
                        top: -110px;
                        height: 900px;
                        line-height: 44px;
                        font-size: 16px;
                        @keyframes fadeIn{
                            0%{
                                opacity:0;
                                transform:translate3d(0,0px,0);
                            }
                            100%{
                                opacity:1;
                                transform:translate3d(0,20px,0);
                            }
                        }
                        @-webkit-keyframes fadeIn{
                            0%{
                                opacity:0;
                                -webkit-transform:translate3d(0,0,0);
                            }
                            100%{
                                opacity:1;
                                -webkit-transform:translate3d(0,20px,0);
                            }
                        }
                        @-o-keyframes fadeIn{
                            0%{
                                opacity:0;
                                -o-transform:translateY(0px);
                                transform: translateZ(0);
                            }
                            100%{
                                opacity:1;
                                -o-transform:translateY(20px);
                                transform: translateZ(0);
                            }
                        }
                        .animatetop{
                            animation: fadeIn 0.5s .5s ease-in both;
                            -webkit-animation: fadeIn  0.5s .5s ease-in both;
                        }
                    }
                }

            }
        }
        .ourBanner{
            .downIcon{
                margin: -125px 0 0 0px;
                left: 10%;
                .text{
                    font-size: 48px;
                    width: 282px;
                    height: 82px;
                    line-height: 82px;
                    letter-spacing: 5px;
                    text-align: center;
                    margin-bottom: 64px;
                    font-weight: 600;
                }
                .hometext{
                    text-align: left;
                    margin-bottom: 20px;
                    font-size: 20px;
                }
            }
        }
    }
    @media screen and (min-width: 2560px){
        .ourBanner{
            .downIcon{
                height: 140px;
                margin: -162px 0 0 0px;
                left: 10%;
                .text{
                    font-size: 58px;
                    width: 363px;
                    height: 100px;
                    line-height: 100px;
                    letter-spacing: 5px;
                    text-align: center;
                    margin-bottom: 85px;
                    font-weight: 600;
                }
                .hometext{
                    text-align: left;
                    margin-bottom: 28px;
                    font-size: 26px;
                }
            }
        }
    }
    .cooperativePartner{
        margin: 155px auto 95px;
        background: #fff;
        text-align: center;
        .pander{
            display: inline-block;
            border: 3px solid #3d3d3d;
            padding: 10px 20px 0;
            font-size: 30px;
            /*font-weight: 600;*/
        }
        .cooperative{
            margin: 0 auto;
            display: flex;
            width: 750px;
            flex-wrap: wrap;
            .logo{
                padding: 0px 30px;
                width: 180px;
                height: 140px;
                line-height: 180px;
                text-align: center;
                img{
                    display: inline-block;
                    vertical-align: middle;
                     width: 100%;
                    height: auto;

                }
            }
        }
    }

    /****************** pc specail end *********************************/

    /**************** mobile specail start ******************************/

    @media screen and (max-width: 1246px) {
        .cooperativePartner{
        margin: 150px auto 40px;
        background: #fff;
        text-align: center;
        .pander{
            display: inline-block;
            border: 3px solid #3d3d3d;
            padding: 10px 20px;
            color: #3d3d3d;
            font-size: 30px;
            /*font-weight: 600;*/
        }
    }
        .companyProfile{
            width: 100%;
            background: url('../assets/images/beijing3.png') no-repeat center;
            background-size: cover;
            position: relative;
            .backCompaney{
                top: 82px;
                position: relative;
                width: 80%;
                background: #0abf9b;
                .imgCompaney{
                    height: 266px;
                    background: url('../assets/images/gongsijianjie.png') no-repeat top;
                    background-size: cover;
                    margin-top: -25px;
                    margin-left: 18px;
                    width: 46%;
                }
                .textCompaney{
                    color: #3d3d3d;
                    margin-left: 0px;
                    margin-top: 11px;
                    margin-bottom: 10px;
                    .titleCompaney{
                        display: inline-block;
                        padding: 10px 20px;
                        font-size: 30px;
                        border: 3px solid #fff;
                        color: #fff;
                    }
                    .text{
                        font-size: 12px;
                        color: #fff;
                        line-height: 35px;
                    }
                }
            }
        }
        .treatment{
            .treatmentBoottom{
                .treamentRight{
                    .showtreatment{
                        background: rgba(0, 191, 155, 0.8);
                        width: 50%;
                        text-align: center;
                        color: #fff;
                        padding: 98px 96px;
                        position: absolute;
                        top: -75px;
                        height: 698px;
                        line-height: 36px;
                        font-size: 16px;
                    }
                }
            }
        }

    }
    @media screen and (max-width: 850px) {
        .companyProfile{
            width: 100%;
            /*background: url('../assets/images/beijing3.png') no-repeat center;*/
            background-size: cover;
            position: relative;
            /*height: 700px;*/
            .backCompaney{
                /*top: 82px;*/
                position: relative;
                width: 100%;
                background: #0abf9b;
                .imgCompaney{
                    height: 480px;
                    background: url('../assets/images/gongsijianjie.png') no-repeat center;
                    background-size: cover;
                    margin-left: 0;
                    width: 100%;
                }
                .textCompaney{
                    color: #3d3d3d;
                    margin-top: 60px;
                    margin-left: 0px;
                    width: 100%;
                    .titleCompaney{
                        display: inline-block;
                        padding: 10px 20px;
                        font-size: 30px;
                        border: 3px solid #fff;
                    }
                    .text{
                        font-size: 12px;
                    }
                }
            }
        }
        .treatment{
            .treatmentBoottom{
                .treamentRight{
                    .showtreatment{
                        background: rgba(0, 191, 155, 0.8);
                        width: 50%;
                        text-align: center;
                        color: #fff;
                        padding: 80px 60px;
                        position: absolute;
                        top: -75px;
                        height: 698px;
                        line-height:36px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .ourBanner{
            width: 100%;
            height: 40vh;
            background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/guanyuwomen_banner.jpg') no-repeat center;
            background-size: cover;
            position: relative;
            .downIcon{
                left: 15px;
                top: 50%;
                .text{
                    font-size: 20px;
                    line-height: 40px;
                    height: 40px;
                    width: 130px;
                    margin-bottom: 20px;
                }
                .hometext{
                    padding-right: 15px;
                }
            }
        }
        .cooperativePartner{
            margin: 40px auto 20px;
            background: #fff;
            text-align: center;
            .pander{
                display: inline-block;
                border: none;
                padding: 10px 20px;
                color: #3d3d3d;
                font-size: 22px;
            }
            .cooperative{
                margin: 10px auto;
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                .logo{
                    padding: 0px 30px;
                    width: 180px;
                    height: 120px;
                    line-height: 120px;
                    text-align: center;
                    img{
                        display: inline-block;
                        vertical-align: middle;
                        width: 100%;
                        height: auto;

                    }
                }
            }
        }
        .companyProfile{
            width: 100%;
            background-size: cover;
            position: relative;
            background: #f2f3f2;
            .backCompaney{
                position: relative;
                width: 100%;
                background: #f2f3f2;
                top: 25px;
                .row{
                   padding: 16px;
                }
                .imgCompaney{
                    height: 180px;
                    background: url('../assets/images/gongsijianjie.png') no-repeat top;
                    background-size: cover;
                    width: 100%;
                    margin-left: 0px;
                }
                .textCompaney{
                    color: #3d3d3d;
                    margin-top: 0px;
                    text-align: center;
                    .titleCompaney{
                        display: inline-block;
                        font-size: 22px;
                        padding: 10px 20px;
                        color: #232323;
                        border: none;
                    }
                    .text{
                        font-size: 12px;
                        color: #929292;
                        line-height: 22px;
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
    .treatmentMobile{
        .treatmentMobileTop{
            height: 360px;
            width: 100%;
            background: url('../assets/images/treatment.png') no-repeat center;
            background-size: cover;
            position: relative;
            padding-top: 25px;
            .changxiang{
                color: #fff;
                border: 3px solid #fff;
                padding: 15px 25px;
                margin: 0 30px;

                .jiaru{
                    font-size: 22px;
                    letter-spacing: 2px;
                    text-align: center;
                    .jiaruspan{
                        padding-left: 10px;
                    }
                }
                .weilai{
                    font-size:14px;
                    text-align: center;
                    line-height: 30px;
                }
            }
            .chakan{
                margin: 45px auto;
                color: #fff;
                text-align: center;
                font-size:14px;
                cursor: pointer;
                font-weight: 600;
                span{
                    background: #0abf9b;
                    padding: 14px 60px;
                }
            }
        }
        .treatmentMobileMiddle{
            text-align: left;
            padding: 50px 0 20px;
            color: #fff;
            .pander {
                display: inline-block;
                padding: 10px 20px 0;
                font-size: 22px;
            }
        }
        .treatmentMobileBottomone{
            height: 180px;
            width: 90%;
            margin-left: 5%;
            background: url('../assets/images/treatmentRight.png') no-repeat center;
            background-size: cover;
            position: absolute;
            top: -150px;
        }
        .treatmentMobileBottom{
            margin-top: 170px;
            height: auto;
            width: 100%;
            background: #0abf9b;
            font-size: 14px;
            position: relative;
            .jianjieCover{
                width: 100%;
                text-align: left;
                color: #fff;
                padding: 0px 20px 20px;
                position: relative;
                height:  auto;
                line-height: 28px;
                .textBox{
                    p{
                        margin-bottom: 0;
                    }
                    .textRight{
                        text-align: left;
                     }
                    .textLeft{
                        text-align: left;
                    }
                }
            }
        }
    }

</style>
<template>
    <div class="our">
        <Head @prductListen="scrollHeight"></Head>
        <!--pc header start-->
            <div class="ourBanner about0 about2 about3">
                <div class="downIcon">
                    <div class="text">
                        品牌理念
                    </div>
                    <p class="hometext">使命：满足人们对健康和美好生活的需求</p>
                    <p class="hometext">愿景：科技让生命更精彩，健康让生活更美好</p>
                    <p class="hometext">理念：依托人工智能、大数据、云计算等技术创新，整合医疗服务、健康管理、头条资讯、健康保险四大优势，提供全面的健康服务。</p>
                </div>
            </div>
        <!--pc header end-->
        <div class="companyProfile about1">
            <div class="container backCompaney">
                <div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-6 imgCompaney">
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-6 textCompaney">
                        <h3 class="titleCompaney">公司简介</h3>
                        <p class="text">深圳分享家科技信息有限公司是一家专注于人工智能、大数据、云计算等前沿技术研究的科技类公司，汇聚行业内的优秀人才，并结合自身行业经验的积累，整合医疗服务、健康管理、头条资讯、健康保险四大优势，为客户、合作伙伴提供全面的数字化健康服务。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cooperativePartner about4">
            <h3 class="pander">合作伙伴</h3>
            <div class="cooperative">
                <div v-for="item in companeyData" class="logo">
                    <img :src="item.name">
                </div>
            </div>
            <div class="cooperative">
                <span class="cooperativeCircle"></span>
                <span class="cooperativeCircle" style="margin-left: 60px;margin-right: 60px;"></span>
                <span class="cooperativeCircle"></span>
            </div>
            <div class="cooperative">
                <span class="cooperativeCircle"></span>
                <span class="cooperativeCircle" style="margin-left: 60px;margin-right: 60px;"></span>
                <span class="cooperativeCircle"></span>
            </div>
        </div>
        <div class="treatment mobile-hidden about5">
            <div class="treatmentTop">
                <div class="changxiang">
                    <div class="jiaru">邀你一起 <span class="jiaruspan">畅享未来</span></div>
                    <div class="weilai" style="margin-top: 15px;">发现真正的自己</div>
                    <div class="weilai">秀出你的才华，让青春更闪亮</div>
                    <div class="weilai">与我们一起实现你的梦想</div>
                    <div class="weilai">加入我们 成就自己</div>
                    <div class="weilai">分享家因你而精彩</div>
                </div>
                <div class="chakan" @click="goboss">
                    <span>查看职位</span>
                </div>
            </div>
            <div class="treatmentBoottom clear">
                <div class="treamentLeft fl"></div>
                <div class="treamentRight fr">
                    <div class="showtreatment">
                        <p v-for="(item,index) in treatmentData" class="animate">
                            <span >{{item.text}}</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <div class="treatmentMobile pc-hidden">
            <div class="treatmentMobileTop">
                <div class="changxiang">
                    <div class="jiaru">邀你一起 <span class="jiaruspan">畅享未来</span></div>
                    <div class="weilai" style="margin-top: 15px;">发现真正的自己</div>
                    <div class="weilai">秀出你的才华，让青春更闪亮</div>
                    <div class="weilai">与我们一起实现你的梦想</div>
                    <div class="weilai">加入我们 成就自己</div>
                    <div class="weilai">分享家因你而精彩</div>
                </div>
                <div class="chakan"  @click="goboss">
                    <span>查看职位</span>
                </div>
            </div>

            <div class="treatmentMobileBottom">
                    <div class="treatmentMobileBottomone">
                    </div>
                <div class="treatmentMobileMiddle">
                    <span class="pander">超好待遇</span>
                </div>
                <div class="jianjieCover">
                    <div class="textBox">
                                <span  v-for="item in treatDataOne">{{item.text}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span v-for="item in treatDataTwo">&nbsp;&nbsp;&nbsp;&nbsp;{{item.text}}</span>
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
                companeyData: [
                    {'name':require('../assets/images/minshang_logo.png')},
                    {'name':require('../assets/images/mamawang_logo.png')},
                    {'name':require('../assets/images/youdun_logo.png')},
                    {'name':require('../assets/images/lianlian_logo.png')},
                    {'name':require('../assets/images/shangketong_logo.png')},
                    {'name':require('../assets/images/aliyun_logo.png')},
                    {'name':require('../assets/images/kunlun_logo.png')},
                    {'name':require('../assets/images/dadi_logo.png')}],
                treatmentData: [{'text':'弹性工作制'},{'text':'五险一金'},{'text':'定期体检'},{'text':'法定节假'},{'text':'节日福利'},{'text':'带薪年假'},{'text':'周末双休'},{'text':'团队活动'},{'text':'现代化的办公环境'},{'text':'完善的薪酬福利制度'}],
                treatDataOne:[{'text':'弹性工作制'},{'text':'五险一金'},{'text':'定期体检'},{'text':'法定节假'},{'text':'节日福利'}],
                treatDataTwo:[{'text':'带薪年假'},{'text':'周末双休'},{'text':'团队活动'},{'text':'现代化的办公环境'},{'text':'完善的薪酬福利制度'}],
                innovateData: [{'title':'电子健康档案','text':'致力于为每个家庭提供一位家庭医生，为每个人提供 一份电子健康档案，为每个人提供一个健康管理计划，建立健康医疗生态系统'},
                    {'title':'智能客服','text':'场景化智能客服，提升客服领域用户体验，实现7×24小时全时段服务，低成本解决大量咨询问题，提升服务体验'},
                    {'title':'数据洞察','text':'针对海量数据，实现快速分析，根据业务特点建立360°用户画像，解析用户用户偏好、业务指标、优化精准营销策略'},
                    {'title':'智能健康顾问','text':'机器人，可以回答用户的常见问题，在产品推荐场景中通过多轮会话收集用户需求，并通过深度解析产品和服务条款，实现基于用户画像的个性化推荐'}],
                newData:[{'year':'2018','month': '8','content':'分享家微信服务号上线运营'},{'year':'2018','month': '7','content':'分享家与昆仑健康保险股份有限公司签署战略合作，\n' +
                    '为昆仑健康在互联网保险业务推广活动中提供技术服务'}]
            }
        },
        created(){
            $('.navbar').removeClass('fixed-topone');
            document.getElementsByTagName("title")[0].innerHTML = "关于我们";
        },
        mounted(){
            window.addEventListener('scroll', this.handleFun, true);
            if(this.$route.query.classname){
                this.scrollHeight(this.$route.query.classname)
            }else{
                $('html , body').animate({scrollTop: 0},'slow');
            }
            if(this.$route.query.index){
                this.chengeheader(this.$route.query.index)
            }
        },
        methods:{
            goboss(){
                window.open('https://www.zhipin.com/gongsir/96eda7246b58496b1nJ62t65Ew~~.html?ka=company-jobs')
            },
            scrollHeight(data){
                var height = $('.'+data).offset().top;
                $('html,body').animate({scrollTop: height},500);
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
                if(height<scrollTop){
                    $(".imgCompaney").addClass("imgCompaneyFade")
                }else{
                    $(".imgCompaney").removeClass("imgCompaneyFade")
                }
                    var heighttwo  = $(".treatmentTop").offset().top;
                if(heighttwo<scrollTop){
                    $(".animate").addClass("animatetop")
                }else{
                    $(".animate").removeClass("animatetop")
                }
            },
            scrollContent(){
                var height = $('.homeBanner').height()-80;
                $('html , body').animate({scrollTop: height},'slow');
            },
            enterStyle(index){
                $(".backicon"+(index+5)).find('.coverBox').stop(true,true).animate(
                    {top:"0px"},300
                )
                $(".backicon"+(index+5)).find('.circleBox').css("display",'none');
            },
            leaveStyle(index){
                $(".backicon"+(index+5)).find('.coverBox').stop(true,true).animate(
                    {top:"280px"},300
                )
                $(".backicon"+(index+5)).find('.circleBox').css("display",'block')
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

