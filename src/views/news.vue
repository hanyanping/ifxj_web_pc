<style rel="stylesheet/scss" lang="scss">
    .newsBox{
        width: 100%;
    }
    .newsBanner,.mobileBanner{
        width: 100%;
        height: 100vh;
        background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/xinwen_banner.jpg') no-repeat center;
        background-size: cover;
        position: relative;
        .downIcon{
            position: absolute;
            width: 240px;
            height: 100px;
            left: 50%;
            top: 50%;
            margin: -50px 0 0 -120px;
            color: #fff;
            .text{
                text-align: center;
                font-size: 28px;
                font-weight: 600;
                letter-spacing: 5px;
            }
            .hometext{
                padding-top: 15px;
                text-align: center;
                font-size: 12px;
            }
        }
    }
    .mobileBanner{
        width: 100%;
        height: 100vh;
        background: url('https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/xinwen_banner.jpg') no-repeat left;
        background-size: cover;
    }
    .newsContent{
        margin-bottom: 60px;
        margin-top: 20px;
        .newsContainer{
            width: 100%;
            padding: 45px 10% 0;
            .newstext{
                padding: 0 30px;
                min-height: 420px;
            }
            .textbox{
                .title{
                    font-size: 19px;
                    color: #3d3d3d;
                    margin: 15px auto;
                }
                .lead{
                    font-size: 14px;
                    padding: 5px 0px 15px;
                    color: #929292;
                }
                .newsTime{
                    font-size: 12px;
                    color: #3d3d3d;
                    padding: 10px 0 0;
                }
                .textBac{
                    height: 200px;
                    background-size: cover;
                }
            }
        }
    }
    @media screen and (min-width: 1600px) {
        .newsBanner{
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
                    padding-top: 15px;
                }
            }
        }
    }
    @media screen and (min-width: 1920px) {
        .newsBanner{
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
                    padding-top: 20px;
                }
            }
        }
        .newsContent {
           .newsContainer{
               .newstext{
                   min-height: 540px;
               }
               .textbox{
                   .textBac{
                       height: 350px;
                       background-size: 100% 100%;
                   }
               }
           }
       }
    }
    @media screen and (min-width: 2560px) {
        .newsBanner{
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
                    padding-top: 25px;
                }
            }
        }
    }
    @media screen and (max-width: 1200px) {
        .newsContent{
            .newsContainer {
                width: 100%;
                padding: 45px 10% 0;
                .newstext {
                    padding: 0 30px;
                }
                .textbox {
                    .textBac{
                        height: 200px;
                    }
                    .title {
                        font-size: 20px;
                        color: #3d3d3d;
                        margin: 15px auto;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .newsContent{
            .newsContainer {
                width: 100%;
                padding: 6px 15px 0;
                .newstext {
                    padding: 20px 15px 0;
                    min-height: 350px;
                }
                .textbox {
                    .textBac{
                        height: 200px;
                    }
                    .title {
                        font-size: 18px;
                        color: #3d3d3d;
                        margin: 10px auto;
                    }
                    .lead{
                        padding:0;
                        color: #929292;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="newsBox">
        <header-content @prductListen="scrollHeight"></header-content>
        <div class="newsBanner mobile-hidden">
            <div class="downIcon">
                <div class="text">
                    公司动态
                </div>
                <p class="hometext">全面的数字化健康服务，科技让生命更精彩</p>
            </div>
        </div>
        <!--<div class="mobileBanner pc-hidden">-->
            <!--<div class="downIcon">-->
                <!--<div class="text">-->
                    <!--公司动态-->
                <!--</div>-->
                <!--<p class="hometext">全面的数字化健康服务，科技让生命更精彩</p>-->
            <!--</div>-->
        <!--</div>-->
        <div class="newsContent">
            <div class="container newsContainer">
                <div class="row"  >
                    <div class="col-sm-4 col-md-4 col-lg-4 newstext" v-for="(item,index) in newData">
                        <div class="textbox">
                            <div :class="'textBac'+index" class='textBac' v-if='index!=1' :style="{backgroundImage: 'url(' + item.imgUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>
                            <div :class="'textBac'+index" class='textBac' v-if='index==1' :style="{backgroundImage: 'url(' + item.imgUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center top'}"></div>
                            <div class="newsTime">{{item.time}}</div>
                            <h3 class="title">{{item.title}}</h3>
                            <p class="lead">{{item.content}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="container newsContainer">-->
                <!--<div class=""  >-->
                    <!--<div class=" newstext fl" style="width:30%;" v-for="(item,index) in newData">-->
                        <!--<div class="textbox">-->
                            <!--<div :class="'textBac'+index" class='textBac' v-if='index!=1' :style="{backgroundImage: 'url(' + item.imgUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>-->
                            <!--<div :class="'textBac'+index" class='textBac' v-if='index==1' :style="{backgroundImage: 'url(' + item.imgUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center top'}"></div>-->
                            <!--<div class="newsTime">{{item.time}}</div>-->
                            <!--<h3 class="title">{{item.title}}</h3>-->
                            <!--<p class="lead">{{item.content}}</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        </div>
        <Foot></Foot>
    </div>
</template>

<script>
    import headerContent from '../components/headercontent'
    import Foot from '../components/footercontent'
    export default {
        name: "productserver",
        data(){
            return{
                newData: [
                    {'time':'2018年10年26日','title':'分享家官方网站2.0上线','content':'分享家确定依托人工智能、大数据、云计算等技术创新，整合医疗服务、健康管理、头条资讯、健康保险四大优势，为客户提供全面的健康服务的全新发展战略。','imgUrl':"https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/banben2.jpg"},
                    {'time':'2018年09年05日','title': '分享家与妈妈网签署战略合作','content':'近日，分享家与广州盛成妈妈网络科技股份有限公司签署战略合作，为妈妈网用户提供健康资讯、健康保险等综合服务','imgUrl':'https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/mmw.jpg'},
                    {'time':'2018年08年30日','title':'分享家与中国大地保险开展战略合作','content':'近日，分享家与中国大地财产保险股份有限公司签署战略合作，为大地保险开展互联网保险业务提供技术支持。','imgUrl':"https://ifxj-upload.oss-cn-shenzhen.aliyuncs.com/ifxj_web_pc/dadibaoxian.png"},
                    {'time':'2018年08年17日','title': '分享家微信服务号上线运营','content':'8月17日，分享家微信服务号正式开始为大众用户提供健康资讯的推文服务','imgUrl':require('../assets/images/weixinfuwuhao.png')},
                    {'time':'2018年07年25日','title': '分享家官方网站，正式上线1.0版本','content':'7月25日，为了让外界以更便捷的方式了解分享家公司的基本概况、企业文化、公司动态，更好地服务广大用户，官方网站正式上线运营','imgUrl':require('../assets/images/guanwang1.0.png')},
                    {'time':'2018年07年10日','title': '分享家与昆仑健康保险开展战略合作','content':'7月10日，分享家与昆仑健康保险股份有限公司签署战略合作，为昆仑健康在互联网保险业务推广活动中提供技术服务','imgUrl':require('../assets/images/kunlunzhanlve.png')},
                    {'time':'2018年06年19日','title': '分享家与民惠电商签署战略合作','content':'今日，分享家与民惠电子商务有限公司签署战略合作，共同推动双方业务的深入合作','imgUrl':require('../assets/images/minhuihezuo.png')}
                ]

            }
        },
        created(){
            $('.navbar').removeClass('fixed-topone');
            document.getElementsByTagName("title")[0].innerHTML = "公司动态";
        },
        mounted(){
            $('html , body').animate({scrollTop: 0},'slow');
            window.addEventListener('scroll', this.handleFun, true);
            if(this.$route.query.index){
                this.chengeheader(this.$route.query.index)
            }
        },
        methods:{
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
            chengeheader(index){
                var obj = $(".spanborder")
                for(var i = 0;i< obj.length;i ++){
                    obj[i].className = 'spanborder'
                    obj[index].className = 'spanborder active'
                }
            },
            scrollHeight(data){
                var height = $('.'+data).offset().top;
                $('html,body').animate({scrollTop: height},500);
                // $(window).scrollTop(height)
            }
        },
        components:{
            headerContent,
            Foot,
        },
        beforeDestroy(){
            window.removeEventListener("scroll",this.handleFun,true)
        },
    }
</script>

