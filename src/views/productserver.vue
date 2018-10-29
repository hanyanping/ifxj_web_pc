<style rel="stylesheet/scss" lang="scss">
    .product{
        width: 100%;
        .content{
            .platcontent{
                width: 100%;
                    .platTitle{
                        font-size: 30px;
                        font-weight: 600;
                        padding-bottom: 10px;
                    }
                    .platText{
                        font-size: 14px;
                        margin-bottom: 0;
                    }

                .leftBorder{
                    border-left: 14px solid #0abf9b;
                }
                .rightBorder{
                    border-right: 14px solid #0abf9b;
                }
                .platCol{
                    height: 400px;
                    padding: 0;
                    .topBorder{
                        width: 100%;
                        height: 14px;
                        background: #0abf9b;
                        margin-left: 4%;
                        position: absolute;
                    }
                    .bottomBorder{
                        width: 96%;
                        height: 14px;
                        background: #0abf9b;
                        margin-right: 20px;
                        position: absolute;
                        bottom: 0;
                    }
                    .platbacktext{
                        width: 480px;
                        padding: 15px 40px;
                        /*min-height: 120px;*/
                        margin-top: 140px;
                        .platTitle{
                            font-size: 20px;
                            padding-bottom: 10px;
                            font-weight: 600;
                        }
                        .platText{
                            font-size: 14px;
                        }
                    }
                    .backGreen{
                        color: #fff;
                        background: #0abf9b;

                    }
                    .backWhrite{
                        color: #3d3d3d;
                        background: #fff;
                        .platText{
                            color: #525252;
                        }
                    }
                }
                .rightRow{
                    .platbacktext{
                       margin-left: -40px;
                    }
                }
                .leftRow{
                    position: relative;
                    .platbacktext{
                        text-align: right;
                        position: absolute;
                        right: -40px;
                        z-index: 100;
                    }
                }
                .platback{
                    height: 400px;
                }
                .platback0{
                    /*background: url('../assets/images/jiankangyiliao.png');*/
                    background: url('../assets/images/zhinengyingxiao.png');
                    background-size: cover;
                }
                .platback1{
                    background: url('../assets/images/shujudongcha.png');
                    /*background: url('../assets/images/jiankangguanli.png');*/
                    background-size: cover;
                }

                .platback2{
                    background: url('../assets/images/jiankangyiliao.png');
                    background-size: cover;
                }
                .platback3{
                    background: url('../assets/images/jiankangguanli.png');
                    background-size: cover;
                }
                .platback4{
                    background: url('../assets/images/yidongzhanye.png');
                    background-size: cover;
                }
                .platback5{
                    background: url('../assets/images/xinyidai.png');
                    background-size: cover;
                }

            }
        }
    }
    @media screen and (min-width: 1920px) {
        .product{
            .content{
                .platcontent{
                    .platCol{
                        height: 720px;
                        .platback{
                            height: 720px;
                        }
                        .platbacktext{
                             margin-top: 270px;
                            width: 900px;
                            padding: 40px;
                            .platTitle{
                                font-size: 30px;
                                font-weight: 600;
                            }
                            .platText{
                                font-size: 14px;
                            }
                    }
                    }

                }
            }
        }
    }
    /*************************pc specail start*************************/
    @media screen and (min-width: 768px) {
        .product{
            .content {
                margin: 130px 0 50px;
            }
        }
        }

    /*************************pc specail end*************************/
    /**************** mobile specail start ******************************/
    @media screen and (max-width: 768px) {
        .product{
            .content {
                margin: 70px 0 20px;
                .platcontent {
                    width: 100%;
                    text-align: center;
                    .mobliePlate{
                        margin-bottom: 30px;
                        .platback{
                            height: 180px;
                        }
                        .platTitle {
                            font-weight: 600;
                            font-size: 20px;
                            padding: 10px;
                        }
                        .platText {
                            color: #929292;
                            font-size: 14px;
                            text-align: left;
                        }
                    }

                }
            }
        }

    }

    /**************** mobile specail end *****************************/
</style>
<template>
    <div class="product">
        <header-content @prductListen="scrollHeight"></header-content>
        <div class="content"  >
            <div v-for="(item,index) in data" :class="'platform'+index">
                <div class="container platcontent mobileone-hidden" >
                    <div class="row" v-if="(index%2)==0" :class="(index%2)==0?'rightRow':'leftRow'">
                        <div class="col-sm-6 col-md-6 col-lg-6 platCol">
                            <div :class="'platback'+index" class="platback">
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 platCol"  :class="[ { 'leftBorder': index%5==2 }]">
                            <div class="platbacktext" :class="index%3==0?'backGreen':'backWhrite'">
                                <div class="platTitle">{{item.title}}</div>
                                <p class="platText">{{item.text}}</p>
                            </div>
                            <div :class="[{ 'bottomBorder': index%5==4 }]"></div>
                        </div>

                    </div>
                    <div class="row leftRow" v-else >
                        <div class="col-sm-6 col-md-6 col-lg-6  platCol" :class="[{ 'rightBorder': index%5==0 } ]">
                            <div :class="[ { 'topBorder': index%5==3 }]"></div>
                            <div class="platbacktext" :class="index%3==0?'backGreen':'backWhrite'">
                                <div class="platTitle">{{item.title}}</div>
                                <p class="platText">{{item.text}}</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-6 col-lg-6 platCol" :class="">
                            <div :class="'platback'+index" class="platback">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container platcontent pcone-hidden">
                    <div class="row">
                        <div class="col-sm-3 col-md-3 col-lg-3 mobliePlate">
                            <div :class="'platback'+index" class="platback">
                            </div>
                            <div class="platTitle">{{item.title}}</div>
                            <p class="platText">{{item.text}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-content></footer-content>
    </div>
</template>

<script>
    import headerContent from '../components/headercontent'
    import footerContent from '../components/footercontent'
    export default {
        name: "productserver",
        data(){
            return{
                data:[
                    {'title':'智能营销平台','text':'实现全业务接触点的保险产品销售及管理，助力合作伙伴业务员展业，并提高推广效率。'},
                    {'title':'数据洞察平台','text':'数据洞察平台是针对海量大数据的完整流程分析工具，包括数据处理、自助分析、高级算法探索。平台针对行业数据，建立流程分析模板，引导用户进行决策式数据分析。主要功能有：数据处理、图形化数据建模、多维数据分析、自助智能分析、数据高级洞察等。'},
                    {'title':'健康医疗服务平台','text':'为健康医疗合作伙伴（包含医生、护师、健康管理师、营养师、健康身教练、保健调理师、心理咨询师）提供统一服务平台，帮助用户快速获取相关健康服务。包括：医护上门，口腔健康，就医陪诊，中医调理，产后母婴，健康体检，慢病防控，运动健身，心理咨询、康复理疗，专家咨询等精准健康服务等。'},
                    {'title':'健康管理平台','text':'基于合作伙伴资源以智能穿戴设备、体检中心、门诊部等作为数据采集入口，以用户历年动态健康数据为依据，为用户提供全龄化的生命周期管理，个性化健康计划，重要健康指标动态监测，健康数据实时追溯与动态抽取，健康数据异常报警，健康管理效果评价等。'},
                    {'title':'移动展业平台','text':'移动展业平台是给合作伙伴销售人员使用的展业工具，以互联网技术为基础的一站式销售支持平台。快速、便捷的实现全业务接触点的保险产品销售及管理，助力合作伙伴业务员展业，并提高推广效率。'},
                    {'title':'新一代分布式电商平台','text':'一站式搭建互联网电商、微信等可触达用户的平台，采用分布式微服务架构设计，实现平台高并发、可扩展、高容错、易维护。平台实现一站式在线投保、整合大数据客户洞察、互联网运营工具，提升营销及销售能力。'}
                ]
            }
        },
        created(){
            document.getElementsByTagName("title")[0].innerHTML = "产品服务";
        },
        mounted(){
            $('.navbar').addClass('fixed-topone');
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
         getDay(day){
            var today = new Date();
            var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
            today.setTime(targetday_milliseconds); //注意，这行是关键代码
            var tYear = today.getFullYear();
            var tMonth = today.getMonth();
            var tDate = today.getDate();
            tMonth = this.doHandleMonth(tMonth + 1);
            tDate = this.doHandleMonth(tDate);
            return tYear+"-"+tMonth+"-"+tDate;
    },
     doHandleMonth(month) {
         var m = month;
         if (month.toString().length == 1) {
             m = "0" + month;
         }
         return m;
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
            }
        },
        components:{
            headerContent,
            footerContent,
        },
        beforeDestroy(){
            $('.navbar').removeClass('fixed-topone');
        }
    }
</script>

