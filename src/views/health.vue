<style rel="stylesheet/scss" lang="scss">
    /*************************pc specail start*************************/
    .healthServer{
        width: 100%;
        padding: 150px 10% 35px;
        .contentTitle{
            text-align: center;
            .moblieTitle{
                font-size: 48px;
                color: #3d3d3d;
            }
            .contentText{
                color: #3d3d3d;
                font-size: 12px;
                padding-top: 13px;
                padding-bottom: 40px;
            }
        }
        .textbox{
            text-align: left;
            /*-webkit-transition: all .1s ease-in .08s;*/
            /*transition: all .1s ease-in .08s;*/
            position: relative;
            padding-bottom: 20px;
            cursor: pointer;
            .backicon{
                width: 100%;
                height: 170px;
                background-size: cover;
            }
            .lable{
               position: absolute;
                top: 0;
                height: 32px;
                padding: 0 8px 0 0;
                background-color: #0abf9b;
                line-height: 32px;
                text-align: center;
                .fl{
                    padding-left: 5px;
                }
                .lableIcon{
                   img{
                       height: 18px;
                       width: 18px;
                   }
                }
                .lableText{
                    color: #fff;
                    font-size: 12px;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .lead{
                font-size: 14px;
                padding: 20px 15px 0;
                color: #3d3d3d;
                font-weight: 600;
                display: -webkit-box;
                max-height: 60px;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                margin-bottom: 0px;
            }
        }
        .textbox:hover{
            cursor: pointer;
            box-shadow: 0px 2px 29px 0px rgba(57, 57, 57, 0.18);
            /*<!--margin-top: -10px;-->*/
            -webkit-transition:all .3s linear;
            /*transition: all .3s ease-in .3s;*/
            transition: all .3s linear;
        }
    }
    .healthcontent{
        width: 100%;
        padding: 20px 10%;
        .healthBox{
            display: flex;
            .healthVoice{
                width: 78%;
                margin-right: 30px;
                .title{
                    color: #3d3d3d;
                    font-size: 24px;
                    border-bottom: 3px solid #0abf9b;
                    padding-bottom: 15px;
                    font-weight: 600;
                }
                .textbox:hover{
                    box-shadow: 0px 2px 29px 0px rgba(57, 57, 57, 0.18);
                    -webkit-transition:all .3s linear;
                    /*transition: all .3s ease-in .3s;*/
                    transition: all .3s linear;
                }
                .textbox {
                    cursor: pointer;
                    border: solid 1px #eeeeee;
                    margin-top: 30px;
                    width: 48%;
                    text-align: left;
                    .lable{
                        padding: 10px 15px;
                        background-color: #fff;
                        line-height: 32px;
                        text-align: center;
                        .lableIcon{
                           img{
                               height: 18px;
                               width: 18px;
                           }
                        }
                        .lableText{
                            color: #0abf9b;
                            font-size: 12px;
                            display: inline-block;
                            vertical-align: middle;
                        }
                        .fr{
                            color:#929292;
                            font-size: 12px;
                        }

                    }
                    .lead{
                        font-size: 18px;
                        font-weight: 600;
                        padding: 0px 15px 15px;
                        color: #3d3d3d;
                        height: 45px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    }
                    .backicon {
                        width:100%;
                        height: 237px;
                        background-size: cover;
                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }
                }
            }
            .healthNews{
                width: 33%;
                background: #0abf9b;
                margin-top: 46px;
                .title{
                    padding: 18px 15px;
                    color: #fff;
                    font-size: 24px;
                    font-weight: 600;
                }
                .textbox {
                    text-align: left;
                    background: #fff;
                    margin: 0 15px 30px;
                    cursor: pointer;
                    .lable{
                        padding: 15px;
                        line-height: 32px;
                        text-align: center;
                        .fr{
                            color:#929292;
                            font-size: 12px;
                        }
                        .lableIcon{
                            img{
                                height: 18px;
                                width: 18px;
                            }
                        }
                        .lableText{
                            color: #0abf9b;
                            font-size: 12px;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                    .lead{
                        font-size: 18px;
                        font-weight: 600;
                        padding: 0px 15px 15px;
                        color: #3d3d3d;
                        margin-bottom:0;
                    }
                    .backicon {
                        width:100%;
                        height: 175px;
                    }
                }

            }
        }
    }
    .moreNews{
        width: 100%;
        padding: 30px 10% 30px;
        .moreNewstitle{
            font-size: 24px;
            padding-bottom: 15px;
            border-bottom: 3px solid #0abf9b;
            font-weight: 600;
        }
        .healthnewsContent{
            display:flex;
            margin-top: 30px;
            cursor: pointer;
            .newsLeft{
                background-size: cover;
                height: 200px;
                width: 30%;
                margin-right: 24px;
                border: 1px solid #f2f2f2;
                .lable{
                    padding: 0 8px 0;
                    height: 32px;
                    background-color: #0abf9b;
                    line-height: 32px;
                    text-align: center;
                    .lableIcon{
                        img{
                            height: 18px;
                            width: 18px;
                        }
                    }
                    .lableText{
                        color: #fff;
                        font-size: 12px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
            }
            .newsRight{
                position: relative;
                width: 55%;

                .rightTop{
                    position: absolute;
                    top: 10px;
                    .lead{
                        font-size: 18px;
                        font-weight: 600;
                    }
                    .topTitle{
                        font-weight: 600;
                        color: #3d3d3d;
                        font-size: 18px;
                    }
                    .topText{
                        font-size: 14px;
                        color: #929292;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                    }
                }
                .newsTime{
                    position: absolute;
                    bottom: 5px;
                    color: #929292;
                    font-size: 12px;
                }
            }
        }
        .moreData{
            cursor: pointer;
            text-align: center;
            height: 40px;
            width: 100px;
            line-height: 40px;
            color: #0abf9b;
            margin: 50px auto 10px;
            border: 2px solid #0abf9b;
        }
    }
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
    @media screen and (min-width: 1920px) {
        .healthServer{
            .textbox{
                cursor: pointer;
                .backicon{
                    height:380px;
                }
            }
        }
        .healthcontent{
            .healthBox{
                .healthVoice{
                    .textbox{
                        cursor: pointer;
                        .lead{
                            font-weight: 600;
                        }
                        .backicon{
                            height: 440px;
                            background-size: cover;
                        }
                    }
                }
                .healthNews{
                    .textbox{
                        cursor: pointer;
                        .backicon{
                            height: 400px;
                            background-size: cover;
                        }
                    }
                }
            }
        }
        .moreNews {
            .healthnewsContent {
                cursor: pointer;
                .newsLeft{
                    height: 420px;
                    background-size: cover;
                    width:35%;
                }
            }
        }
    }
    @media screen and (max-width: 1330px) {
        .healthServer {
            .textbox {
                cursor: pointer;
                text-align: left;
                -webkit-transition: all .1s ease-in .08s;
                transition: all .1s ease-in .08s;
                .backicon {
                    width: 100%;
                    height: 180px;
                    background-size: cover;
                }
            }
        }
        .moreNews{
            width: 100%;
            padding: 20px 10% 50px;
            .moreNewstitle{
                font-size: 18px;
                padding-bottom: 15px;
                border-bottom: 3px solid #0abf9b
            }
            .healthnewsContent{
                display:flex;
                margin-top: 30px;
                cursor: pointer;
                .newsLeft{
                    height: 180px;
                    width: 35%;
                    margin-right: 24px;
                    .lable{
                        height: 32px;
                        padding: 0 8px  0;
                        background-color: #0abf9b;
                        line-height: 32px;
                        text-align: center;
                        .lableIcon{
                            img{
                                height: 18px;
                                width: 18px;
                            }
                        }
                        .lableText{
                            color: #fff;
                            font-size: 12px;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                }
                .newsRight{
                    position: relative;
                    width: 55%;
                    .rightTop{
                        position: absolute;
                        top: 10px;
                        .topTitle{
                            color: #3d3d3d;
                            font-size: 18px;
                            font-weight: 600;
                        }
                        .topText{
                            font-size: 14px;
                            color: #929292;
                        }
                    }
                    .newsTime{
                        position: absolute;
                        bottom: 5px;
                        color: #929292;
                        font-size: 12px;
                    }
                }
            }
            .moreData{
                cursor: pointer;
                text-align: center;
                height: 40px;
                width: 100px;
                line-height: 40px;
                color: #0abf9b;
                margin: 50px auto 10px;
                border: 2px solid #0abf9b;
            }
        }
    }
    /****************** pc specail end *********************************/

    /**************** mobile specail start ******************************/

    @media screen and (max-width: 768px) {
        .healthcontent{
            width: 100%;
            padding: 0px 15px;
            .healthBox{
                display: block;
                .healthVoice{
                    margin-right: 30px;
                    width: 100%;
                    .title{
                        color: #3d3d3d;
                        font-size: 18px;
                        border-bottom: 3px solid #0abf9b;
                        padding-bottom: 15px;
                    }
                    .textbox:hover{
                        /*box-shadow: 0px 2px 29px 0px rgba(57, 57, 57, 0.18);*/
                        /*-webkit-transition: all .28s ease-in .1s;*/
                        /*transition: all .28s ease-in .1s;*/
                    }
                    .textbox {
                        /*box-shadow: 0px 2px 29px 0px rgba(57, 57, 57, 0.18);*/
                        margin-top: 15px;
                        min-height:200px;
                        width: 100%;
                        text-align: left;
                        cursor: pointer;
                        .lable{
                            padding: 5px 15px;
                            background-color: #fff;
                            line-height: 32px;
                            text-align: center;
                            .lableIcon{
                                img{
                                    height: 16px;
                                    width: 16px;
                                }
                            }
                            .lableText{
                                color: #0abf9b;
                                font-size: 12px;
                                display: inline-block;
                                vertical-align: middle;
                            }
                            .fr{
                                color:#929292;
                                font-size: 12px;
                            }

                        }
                        .lead{
                            font-size: 14px;
                            padding: 0px 15px 15px;
                            color: #3d3d3d;
                            margin-bottom:10px;
                            height: 35px;
                        }
                        .backicon {
                            width:100%;
                            height: 180px;
                            background-size: cover;
                        }
                    }
                }
                .healthNews{
                    background: #0abf9b;
                    margin-top: 20px;
                    padding: 5px;
                    width: 100%;
                    .title{
                        padding: 15px;
                        color: #fff;
                        font-size: 18px;
                    }
                    .textbox {
                        text-align: left;
                        background: #fff;
                        margin: 0 15px 30px;
                        cursor: pointer;
                        .lable{
                            padding: 5px 15px;
                            line-height: 32px;
                            text-align: center;
                            .fr{
                                color:#929292;
                                font-size: 12px;
                            }
                            .lableIcon{
                                img{
                                    height: 18px;
                                    width: 18px;
                                }
                            }
                            .lableText{
                                color: #0abf9b;
                                font-size: 12px;
                                display: inline-block;
                                vertical-align: middle;
                            }
                        }
                        .lead{
                            font-size: 14px;
                            padding: 0px 15px 15px;
                            color: #3d3d3d;
                            margin-bottom:0;
                        }
                        .backicon {
                            width:100%;
                            height: 175px;
                        }
                    }

                }
            }
        }
        .healthServer{
            padding: 110px 15px 30px;
            .contentTitle{
                .moblieTitle{
                    font-size: 22px;
                    font-weight: 600;
                }
            }
            .textbox {
                min-height:300px;
                width: 48%;
                text-align: left;
                -webkit-transition: all .1s ease-in .08s;
                transition: all .1s ease-in .08s;
                padding-bottom: 10px;
                cursor: pointer;
                .lable{
                    position: absolute;
                    top: 0;
                    padding: 0 8px 0 0;
                    height: 32px;
                    background-color: #0abf9b;
                    line-height: 32px;
                    text-align: center;
                    .fl{
                        padding-left: 5px;
                    }
                    .lableIcon{
                       img{
                           height: 16px;
                           width: 16px;
                       }
                    }
                    .lableText{
                        color: #fff;
                        font-size: 14px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
                .lead{
                    font-size: 14px;
                    /*padding: 20px 5px;*/
                    color: #3d3d3d;
                    margin-bottom:0;
                }
                .backicon {
                    width:100%;
                    height: 170px;
                    background-size: cover;
                }
            }

        }
        .moreNews{
            width: 100%;
            padding: 25px 10%;
            .moreNewstitle{
                font-size: 18px;
                padding-bottom: 15px;
                border-bottom: 3px solid #0abf9b
            }
            .healthnewsContent{
                display:flex;
                margin-top: 15px;
                cursor: pointer;
                .newsLeft{
                    height: 180px;
                    width: 30%;
                    margin-right: 24px;
                    .lable{
                      padding: 0 8px 0;
                        height: 32px;
                        background-color: #0abf9b;
                        line-height: 32px;
                        text-align: center;
                        .lableIcon{
                            img{
                                height: 16px;
                                width: 16px;
                            }
                        }
                        .lableText{
                            color: #fff;
                            font-size: 12px;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                }
                .newsRightmobile{
                    .rightTop{
                        padding-top: 15px;
                        .lead{
                            margin-bottom: 15px;
                            font-weight: 600;
                        }
                        .topTitle{
                            color: #3d3d3d;
                            font-weight: 600;
                            font-size: 18px;
                        }
                        .topText{
                            font-size: 14px;
                            color: #929292;
                        }
                    }
                    .newsTime{
                        bottom: 5px;
                        color: #929292;
                        font-size: 12px;
                    }
                }
            }
            .moreData{
                cursor: pointer;
                text-align: center;
                height: 40px;
                width: 100px;
                line-height: 40px;
                color: #0abf9b;
                margin: 30px auto 10px;
                border: 1px solid #0abf9b;

            }
        }
    }
    @media screen and (max-width: 767px) {
        .healthServer{
            padding: 30px 15px 15px;
            .contentTitle{
                .moblieTitle{
                    font-size: 22px;
                    font-weight: 600;
                }
            }
            .textbox {
                min-height: 150px;
                width: 48%;
                text-align: left;
                -webkit-transition: all .1s ease-in .08s;
                transition: all .1s ease-in .08s;
                cursor: pointer;
                .lable{
                    position: absolute;
                    top: 0;
                    padding: 0 8px 0 0;
                    height: 32px;
                    background-color: #0abf9b;
                    line-height: 32px;
                    text-align: center;
                    .fl{
                        padding-left: 5px;
                    }
                    .lableIcon{
                       img{
                           height: 16px;
                           width: 16px;
                       }
                    }
                    .lableText{
                        color: #fff;
                        font-size: 12px;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
                .lead{
                    font-size: 12px;
                    /*padding: 20px 5px;*/
                    color: #3d3d3d;
                    margin-bottom:0;
                }
                .backicon {
                    width:100%;
                    height: 100px;
                    background-size: cover;
                }
            }

        }
        .moreNews{
            width: 100%;
            padding: 25px 15px;
            .moreNewstitle{
                font-size: 16px;
                padding-bottom: 15px;
                border-bottom: 3px solid #0abf9b
            }
            .healthnewsContent{
                display:block;
                margin-top: 30px;
                cursor: pointer;
                .newsLeft{
                    height: 180px;
                    width: 100%;
                    margin-right: 15px;
                    .lable{
                        height: 32px;
                        padding: 0 8px 0;
                        background-color: #0abf9b;
                        line-height: 32px;
                        text-align: center;
                        .lableIcon{
                           img{
                               height: 16px;
                               width: 16px;
                           }
                        }
                        .lableText{
                            color: #fff;
                            font-size: 12px;
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                }
                .newsRightmobile{
                    .rightTop{
                        .topTitle{
                            color: #3d3d3d;
                            font-weight: 600;
                            font-size: 16px;
                            padding: 15px 0 0px;
                        }
                        .topText{
                            font-size: 12px;
                            color: #929292;
                            padding-top: 5px;
                        }
                        .newsTime{
                            color: #929292;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
    /**************** mobile specail end *****************************/
</style>
<template>
    <div class="health">
        <Head></Head>
        <div class="container healthServer mobile-hidden">
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3" v-for="(item,index) in bestData" @click="goDetail(item.id)">
                    <div class="textbox" >
                        <!--<div class="backicon">-->
                            <div class="backicon" :style="{backgroundImage: 'url(' + item.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>
                            <!--<img :src="item.imageUrl">-->
                        <!--</div>-->
                        <div class="lable clear">
                            <div  class='fl' >
                                 <span class="lableIcon">
                                <img :src="getArticleImg(item.tagId)">
                            </span>
                                <span class="lableText">{{getArticleTitle(item.tagId)}}</span>
                            </div>
                        </div>
                        <p class="lead" :id="'leadone'+index" v-html="item.title"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class=" healthServer pc-hidden">
                <div class="clear" >
                    <div class="textbox" v-for="(item,index) in bestData" :class="index%2==0?'fl':'fr'" @click="goDetail(item.id)">
                        <div class="backicon" :style="{backgroundImage: 'url(' + item.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>
                        <div class="lable clear">
                            <div  class='fl' >
                                 <span class="lableIcon">
                                <img :src="getArticleImg(item.tagId)">
                            </span>
                                <span class="lableText">{{getArticleTitle(item.tagId)}}</span>
                            </div>
                        </div>
                        <p class="lead" v-html="item.title"></p>
                    </div>
                </div>
        </div>
        <div v-if='isshowhealth' class="healthcontent mobile-hidden">
            <div class="healthBox">
                <div class="healthVoice">
                    <div class="title">健康之声</div>
                    <div class="clear" >
                        <div class="textbox" v-for="(item,index) in healthvoice" :class="index%2==0?'fl':'fr'" @click="goDetail(item.id)">
                            <div class="lable clear">
                                <div class="fl" >
                                     <span class="lableIcon">
                                        <img :src="getArticleIcon(item.tagId)">
                                    </span>
                                    <span class="lableText">{{getArticleTitle(item.tagId)}}</span>
                                </div>
                                <div class="fr">
                                    <span class="auther">{{item.author}}</span>
                                    <span class="time">{{item.createDate}}</span>
                                </div>
                            </div>
                            <p class="lead" v-html="item.title"></p>
                            <div class="backicon" :style="{backgroundImage: 'url(' + item.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>
                            <!--<div class="backicon" ><img :src="item.img"></div>-->
                        </div>
                    </div>
                </div>
                <div class="healthNews" >
                    <div class="title" v-if="isshowNews">
                        健康新闻
                    </div>
                        <div class="textbox" v-for="(item,index) in healthNews" @click="goDetail(item.id)">
                            <div class="lable clear">
                                <div class="fl" >
                                    <span class="lableIcon">
                                        <img :src="getArticleIcon(item.tagId)">
                                    </span>
                                    <span class="lableText">{{getArticleTitle(item.tagId)}}</span>
                                </div>
                                <div class="fr">
                                    <span class="auther">{{item.author}}</span>
                                    <span class="time">{{item.createDate}}</span>
                                </div>
                            </div>
                            <p class="lead" v-html="item.title"></p>
                            <div class="backicon" :style="{backgroundImage: 'url(' + item.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>
                        </div>
                </div>
            </div>
        </div>
        <div v-if='isshowhealth' class="healthcontent pc-hidden">
            <div class="healthBox">
                <div class="healthVoice">
                    <div class="title">健康之声</div>
                        <div class="textbox" v-for="(item,index) in healthvoice" @click="goDetail(item.id)">
                            <div class="lable clear">
                                <div class="fl">
                                    <span class="lableIcon">
                                        <img :src="getArticleIcon(item.tagId)">
                                    </span>
                                    <span class="lableText">{{getArticleTitle(item.tagId)}}</span>
                                </div>
                                <div class="fr">
                                    <span class="auther">{{item.author}}</span>
                                    <span class="time">{{item.createDate}}</span>
                                </div>
                            </div>
                            <p class="lead" v-html="item.title"></p>
                            <div class="backicon" :style="{backgroundImage: 'url(' + item.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>
                        </div>
                </div>
                <div class="healthNews" v-if="isshowNews">
                    <div class="title" >
                        健康新闻
                    </div>
                    <div class="textbox" v-if="isshowNews" v-for="(item,index) in healthNews" @click="goDetail(item.id)">
                        <div class="lable clear">
                            <div class="fl" >
                                <span class="lableIcon"><img :src="getArticleIcon(item.tagId)"></span>
                                <span class="lableText">{{getArticleTitle(item.tagId)}}</span>
                            </div>
                            <div class="fr">
                                <span class="auther">{{item.author}}</span>
                                <span class="time">{{item.createDate}}</span>
                            </div>
                        </div>
                        <p class="lead" v-html="item.title"></p>
                        <div class="backicon" :style="{backgroundImage: 'url(' + item.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="moreNews">
            <div v-if='isshowMore' class="moreNewstitle">
                更多优选
            </div>
            <div class="accessory-list-wrap">
                <div class="accessory-list col-4">
                    <ul>
                        <div v-if='isshowMore' class="healthnewsContent" v-for="(item,index) in allData" @click="goDetail(item.id)">
                            <div class="newsLeft" :style="{backgroundImage: 'url(' + item.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}">
                                <div class="lable fl" >
                                    <span class="lableIcon">
                                        <img :src="getArticleImg(item.tagId)">
                                    </span>
                                    <span class="lableText">{{getArticleTitle(item.tagId)}}</span>
                                </div>

                            </div>
                            <div class="newsRight mobile-hidden">
                                <div class="rightTop">
                                    <p class="lead" v-html="item.title"></p>
                                    <p class="topText">{{item.summary}}</p>
                                </div>
                                <div class="newsTime">{{item.createDate}}</div>
                            </div>
                            <div class="newsRightmobile pc-hidden">
                                <div class="rightTop">
                                    <p class="lead" v-html="item.title"></p>
                                    <div class="newsTime">{{item.createDate}}</div>
                                    <p class="topText">{{item.summary}}</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="showLoading" style='text-align: center;' v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                           <img src="../assets/images/loading.gif" style="height: 20px;width: 100px;margin-top:20px;">
                        </div>
                    </ul>
                </div>
            </div>

            <!--<div class="moreData" @click="getData" v-if="!showAll">浏览更多</div>-->
        </div>
        <div class="codeBox mobile-hidden" v-if="!showFoot">
            <div v-if="showEmail" class='emailImg' >商务合作：service@ifxj.com</div>
            <div  v-if="showPhone" class='phoneImg' >客服热线：400-871-8701</div>
            <div>
                <div class="emailInfo" @mouseenter="enter(1)" @mouseleave="leave(1)">
                    <img  v-if="!showEmail"  src="../assets/images/whriteemail.png">
                    <img  v-if="showEmail"  src="../assets/images/blackemail.png">
                    <p>邮箱</p>
                </div>
                <div class="emailInfo" @mouseenter="enter(2)" @mouseleave="leave(2)">
                    <img  v-if="!showPhone" src="../assets/images/whritePhone.png">
                    <img  v-if="showPhone" src="../assets/images/blackphone.png">
                    <p>客服</p>
                </div>
                <p class="emailInfo showTop none" style="height: 59px;line-height: 59px;padding: 0;" @click="goTop"> <img class="shangfan" src="../assets/images/fanhuidingbu.png"></p>
            </div>
        </div>
        <Foot v-if="showFoot"></Foot>
    </div>
</template>

<script>
    import Head from '../components/headercontent'
    import Foot from '../components/footercontent'
    import Service from '../common/service'
    import Filter from '../common/filter'
    export default {
        name: 'home',
        data () {
            return {
                isshowNews: false,
                isshowMore: false,
                isshowhealth: false,
                showLoading: true,
                busy: false,
                pages:1,
                pageSizes:4,
                showFoot: false,
                showAll: false,
                allData: [],
                healthvoice:[],
                healthNews: [],
                count: '4',
                bestData: [],
                showEmail: false,
                showPhone: false
            }
        },
        created(){
            this.getAllId();
            this.getarticleBest();
            this.getGoodsList(false,3,'',this.pageSizes);
            document.getElementsByTagName("title")[0].innerHTML = "健康头条";
        },
        mounted(){
            $('.navbar').addClass('fixed-topone');
            // $('html , body').animate({scrollTop: 0},'slow');
            if(this.$route.query.index){
                this.chengeheader(this.$route.query.index)
            }
            window.addEventListener('scroll', this.scrollHeight, true);
        },
        methods:{
            scrollHeight(){
                var height = (window.screen.height)/2;
                if(($(window).scrollTop())>height){
                    $('.showTop').css({'display':'block'})
                }else{
                    $('.showTop').css({'display':'none'})
                }
            },
            enter(index){
                console.log(index)
                if(index == 1){
                    this.showEmail = true;
                }else{
                    this.showPhone = true;
                }
            },
            leave(index){
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
            overflowhidden(id, rows, str){
                var text = document.getElementById(id);
                var lineHeight = 20;//获取到line-height样式设置的值 必须要有
                var at = rows*parseInt(lineHeight);      //计算包含文本的div应该有的高度
                var tempstr = str;                       //获取到所有文本
                text.innerHTML = tempstr;                //将所有文本写入html中
                var len = tempstr.length;
                var i = 0;
                if(text.offsetHeight <= at){             //如果所有文本在写入html后文本没有溢出，那不需要做溢出处理
                    /*text.innerHTML = tempstr;*/
                }
                else {                                   //否则 一个一个字符添加写入 不断判断写入后是否溢出
                    var temp = "";
                    text.innerHTML = temp;
                    while(text.offsetHeight <= at){
                        temp = tempstr.substring(0, i+1);
                        i++;
                        text.innerHTML = temp;
                    }
                    var slen = temp.length;
                    tempstr = temp.substring(0, slen-1);
                    len = tempstr.length
                    text.innerHTML = tempstr.substring(0, len-3) +"...";     //替换string后面三个字符
                    text.height = at +"px";                                  //修改文本高度 为了让CSS样式overflow：hidden生效
                }

            },
            getarticleBest(){
                Service.sys().getarticleBest({
                    count:this.count
                }).then(response => {
                    for (var i = 0; i < response.data.length; i++) {
                        // response.data[i].tagId = new Array(response.data[i].tagId)
                        // response.data[i].imageUrl = require('../assets/images/1111.jpg')
                        if((response.data[i].imageUrl === null) || (!response.data[i].imageUrl)){
                            response.data[i].imageUrl = this.getArticlenoneImg(response.data[i].tagId);
                        }
                    }
                    this.bestData = response.data;
                    this.$nextTick(()=>{
                        for(var i=0;i<this.bestData.length;i++){
                            var text = document.getElementById("leadone"+i);

                            var str = text.innerHTML;

                            var that = this;
                            // window.onresize = function(){
                            //     that.overflowhidden("leadone"+i,2,str);
                            // }
                            // that.overflowhidden("leadone"+i,2,str);
                        }
                    })
                }, err => {
                });
            },
            getArticleTitle(status){
                return Filter.getArticleStatus(status)
            },
            getArticlenoneImg(status){//默认图片
                return Filter.getArticlenoneImg(status)
            },
            getArticleIcon(status){
                return Filter.getArticleIcon(status)
            },
            getArticleImg(status){
                return Filter.getArticleImg(status)
            },
            getAllId(){
                //调用接口获得数据
                Service.sys().getAll({
                }).then(response => {
                    for(var i = 0;i<response.data.length;i++){
                        if(response.data[i].name == '健康之声'){
                            this.getGoodsList(false,response.data[i].id,response.data[i].name,4)
                        }else if(response.data[i].name == '健康新闻'){
                            this.getGoodsList(false,response.data[i].id,response.data[i].name,2)
                        }
                    }
                }, err => {
                });
            },
            timetrans(d) {
                var getSeconds = '', getMinutes = '', getHours = '';
                getHours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
                getMinutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
                getSeconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()
                var newTime = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日 ';
                    // + getHours + ':' + getMinutes + ':' + getSeconds;
                return newTime
            },
            getGoodsList(flag,id,source,size){
                Service.sys().getArtitle({
                    categoryId: id,
                    page: this.pages,
                    size: size
                }).then(response => {
                    if(response.data.records.length != 0){
                        for (var i = 0; i < response.data.records.length; i++) {
                            response.data.records[i].createDate = this.timetrans(new Date(parseInt( response.data.records[i].createDate)));
                            // response.data.records[i].tagId = new Array(response.data.records[i].tagId)
                            if((response.data.records[i].imageUrl === null) || (!response.data.records[i].imageUrl)){
                                response.data.records[i].imageUrl = this.getArticlenoneImg(response.data.records[i].tagId);
                            }
                        }
                    }
                    if(flag){
                        // 多次加载数据
                        if(response.data.records.length == 0){
                            this.busy = true;
                            this.showLoading = false;
                            this.showFoot = true;
                        }else{
                            this.allData = this.allData.concat(response.data.records);
                            this.busy = false;
                        }
                    }else{
                        // 第一次加载数据
                        if(source == '健康之声'){
                            if(response.data.records.length != 0){
                                this.healthvoice = response.data.records;
                                this.isshowhealth  =true;
                            }else{
                                this.isshowhealth  =false;
                            }

                        }else if(source == '健康新闻'){
                            if(response.data.records.length != 0){
                                this.healthNews = response.data.records;
                                this.isshowNews = true;
                            }else{
                                this.isshowNews = false;
                            }
                        }else{
                            this.allData = response.data.records;
                            this.isshowMore = true;
                            // 当第一次加载数据完之后，把这个滚动到底部的函数触发打开
                            this.busy = false;
                        }
                    }
                }, err => {
                });
            },
            loadMore: function() {
                this.busy = true;
                // 多次加载数据
                setTimeout(() => {
                    this.pages ++;
                    this.getGoodsList(true,3,'',this.pageSizes);
                }, 500);
            },
            goDetail(id){
                let routeData = this.$router.resolve({
                    name: "healthDetail",
                    query: {index:this.$route.query.index,id: id}
                });
                window.open(routeData.href, '_blank');
                // this.$router.push({path:'/healthDetail',query:{index:this.$route.query.index,id: id}})
            },
            getData(){
                this.showAll = true;
            },
            enterStyle(index){
                $(".backicon"+(index+5)).find('.coverBox').stop(true,true).animate(
                    {top:"0px"},300
                )
                $(".backicon"+(index+5)).find('.circleBox').css("display",'none');
            },
            leaveStyle(index){
                $(".backicon"+(index+5)).find('.coverBox').stop(true,true).animate(
                    {top:"480px"},300
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
            $('.navbar').removeClass('fixed-topone');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

