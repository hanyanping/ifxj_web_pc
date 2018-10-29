<style rel="stylesheet/scss" lang="scss">
    /*************************pc specail start*************************/
    .newsDetail{
        width: 100%;
        padding: 140px 10% 70px;
        display: flex;
        .newsContent{
            width: 75%;
            margin-right: 70px;
            .articleContent{
                img{
                    /*width: 100%!important;*/
                    margin: 10px 0;
                }
                h2{
                    font-size: 16px;
                }
                p{
                    line-height: 25px;
                    margin:0 0 0px;
                }
            }
            .detailTitle{
                font-size: 30px;
                color:#0d0d0d;

            }
            .authInfo{
                padding: 35px 0;
                color: #929292;
                font-size: 12px;
                display: flex;
                line-height: 32px;
                .weixinCode{
                    position: relative;
                    .weixin{
                        margin-left: 20px;
                        height: 32px;
                        width: 32px;
                    }
                    .wxCode{
                        position: absolute;
                        height: 120px;
                        width: 120px;
                        background: #0abf9b;
                        text-align: center;
                        top: -25px;
                        left: 70px;
                        .wximg{
                            height: 100px;
                            width: 100px;
                            margin: 10px auto;
                        }
                        .triangle-left {
                            position: absolute;
                            display: inline-block;
                            width: 0;
                            height: 0;
                            border-top: 8px solid transparent;
                            border-right: 10px solid #0abf9b;
                            border-bottom: 8px solid transparent;
                            left: -10px;
                            top: 30px;
                        }
                    }
                }
            }
        }
        .aboutContent{
            background: #0abf9b;
            color: #fff;
            width: 300px;
            height: 350px;
            padding: 20px 15px;
            margin-left: 20px;
            .aboutTitle{
                font-size: 26px;
            }
            .aboutContents{
                display: flex;
                padding-top:20px;
                cursor: pointer;
                .backicon{
                    height: 60px;
                    width: 104px;
                    background-size:cover;
                }
                .content{
                    display: inline-block;
                    padding-left: 10px;
                    width:130px;
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
            .newsLeft{
                height: 200px;
                width: 30%;
                margin-right: 24px;
                background-size: cover;
                border: 1px solid #f2f2f2;
                .lable{
                    padding: 0 8px 0;
                    height: 38px;
                    background-color: #0abf9b;
                    line-height: 38px;
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
                    }
                    .topText{
                        font-size: 14px;
                        color: #929292;
                    }
                }
                .newsTime{
                    position: absolute;
                    bottom: 10px;
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
        .moreNews {
            .healthnewsContent {
                .newsLeft{
                    height: 420px;
                    background-size: cover;
                    width:35%;
                }
            }
        }
    }
    @media screen and (max-width: 1330px) {
        .moreNews{
            width: 100%;
            padding: 30px 10% 50px;
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
                    height: 200px;
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
                .newsRight{
                    position: relative;
                    width: 55%;
                    .rightTop{
                        position: absolute;
                        top: 0;
                        .topTitle{
                            color: #3d3d3d;
                            font-size: 18px;
                        }
                        .topText{
                            font-size: 14px;
                            color: #929292;
                        }
                    }
                    .newsTime{
                        position: absolute;
                        bottom: 0;
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

        .moreNews{
            width: 100%;
            padding: 20px 10%;
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
                    height: 200px;
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
        .newsDetail{
            width: 100%;
            padding: 40px 15px 40px;
            display: block;
            .newsContent{
                width: 100%;
                margin-right: 0;
                .articleContent{
                    overflow: hidden!important;
                    table{
                        width: 100%!important;
                    }
                    img{
                        /*width: 100% !important;*/
                    }
                }
                .detailTitle{
                    font-size: 20px;
                    color:#0d0d0d;
                }
                .authInfo{
                    padding: 25px 0;
                    color: #929292;
                    font-size: 12px;
                    display: flex;
                    line-height: 32px;
                    .weixinCode{
                        position: relative;
                        .weixin{
                            margin-left: 20px;
                            height: 32px;
                            width: 32px;
                        }
                        .wxCode{
                            position: absolute;
                            height: 100px;
                            width: 100px;
                            background: #0abf9b;
                            text-align: center;
                            top: -20px;
                            left: 70px;
                            .wximg{
                                height: 80px;
                                width: 80px;
                                margin: 10px auto;
                            }
                            .triangle-left {
                                position: absolute;
                                display: inline-block;
                                width: 0;
                                height: 0;
                                border-top: 8px solid transparent;
                                border-right: 10px solid #0abf9b;
                                border-bottom: 8px solid transparent;
                                left: -10px;
                                top: 30px;
                            }
                        }
                    }
                }
            }
            .aboutContent{
                background: #0abf9b;
                color: #fff;
                width: 100%;
                height: 350px;
                padding: 20px 15px;
                margin-left: 0px;
                margin-top: 20px;
                .aboutTitle{
                    font-size: 28px;
                }
                .aboutContents{
                    display: flex;
                    padding-top:20px;
                    cursor: pointer;
                    .backicon{
                        height: 60px;
                        width: 104px;
                        background-size:100% 100%;
                    }
                    /*img{*/
                        /*height: 60px;*/
                        /*width: 104px;*/
                        /*display: inline-block;*/
                    /*}*/
                    .content{
                        display: inline-block;
                        padding-left: 10px;
                        min-width: 200px;
                    }
                }
            }

        }
        .moreNews{
            width: 100%;
            padding: 20px 15px;
            .moreNewstitle{
                font-size: 16px;
                padding-bottom: 10px;
                border-bottom: 3px solid #0abf9b
            }
            .healthnewsContent{
                cursor: pointer;
                display:block;
                margin-top: 30px;
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
        }
    }
    /**************** mobile specail end *****************************/
</style>
<template>
    <div class="health">
        <Head></Head>
        <div class="newsDetail">
            <div class="newsContent">
                <div class="detailTitle" v-html="contentData.title"></div>
                <div class="authInfo">
                    <div>
                        <span>{{contentData.author}}    {{contentData.createDate}}</span>
                    </div>
                    <div class="weixinCode mobile-hidden"  @mouseover="showCode" @mouseout='hideCode'>
                        <!--<img class="wxCode" src="../assets/images/weixintanchuang.png">-->
                        <div class="wxCode " v-if="isshowCode" >
                            <span class="triangle-left"></span>
                            <img class='wximg' :src="code">
                        </div>
                        <img class='weixin' src="../assets/images/weixin.png">
                    </div>
                </div>
                <div class='articleContent' v-html="contentData.content"></div>
                <div style="margin-top: 15px;font-size: 14px;color: #929292;">
                    免责声明：本文主要内容及图片来源于网络，版权归属原作者，如有侵权，请联系我们及时删除。
                </div>
            </div>
            <div class="aboutContent">
                <div class="aboutTitle">相关推荐</div>
                <div class="aboutContents" v-for="item in relatedList" @click="goDetail(item.id)">
                    <!--<img :src="item.imageUrl">-->
                    <div class="backicon" :style="{backgroundImage: 'url(' + item.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}"></div>
                    <div class="content">{{item.title}}</div>
                </div>
            </div>
        </div>
        <div class="moreNews">
            <div class="moreNewstitle">
                更多优选
            </div>
            <div class="accessory-list-wrap">
                <div class="accessory-list col-4">
                    <ul>
                        <div class="healthnewsContent" v-for="(item,index) in allData" @click="goDetail(item.id)">
                            <div class="newsLeft" :style="{backgroundImage: 'url(' + item.imageUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'center center'}">
                                <div class="lable fl">
                                    <span class="lableIcon">
                                        <img :src="getArticleImg(item.tagId)">
                                    </span>
                                    <span class="lableText">{{getArticleTitle(item.tagId)}}</span>
                                </div>
                            </div>
                            <div class="newsRight mobile-hidden">
                                <div class="rightTop">
                                    <p class="topTitle">{{item.title}}</p>
                                    <p class="topText">{{item.summary}}</p>
                                </div>
                                <div class="newsTime">{{item.createDate}}</div>
                            </div>
                            <div class="newsRightmobile pc-hidden">
                                <div class="rightTop">
                                    <p class="lead">{{item.title}}</p>
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
    import Global from '../common/global'
    export default {
        name: 'home',
        data () {
            return {
                code: '',
                isshowCode: false,
                showLoading: true,
                busy: false,
                page:1,
                pageSize:5,
                showFoot: false,
                showAll: false,
                contentData: [],
                allData: [],
                id: '',
                relatedList: [],
                showEmail: false,
                showPhone: false
            }
        },
        created(){
            this.id = this.$route.query.id;
            this.getarticle();
            this.getCode();
            this.getGoodsList(false,3,'',this.pageSize);

        },
        mounted(){
            $('.navbar').addClass('fixed-topone');
            $('html , body').animate({scrollTop: 0},'slow');
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
            goDetail(id){
                let routeData = this.$router.resolve({
                    name: "healthDetail",
                    query: {index:this.$route.query.index,id: id}
                });
                window.open(routeData.href, '_blank');
                // this.$router.push({path:'/healthDetail',query:{index:this.$route.query.index,id: id}})
            },
            showCode(){
                this.isshowCode = true;
            },
            hideCode(){
                this.isshowCode = false;
            },
            getCode(){
                 this.code = document.location.protocol + Global.requestUrl + '/sys/article/' + this.id + '/qrcode';
            },
            getarticle(){
                Service.sys().getarticleDetail({},this.id).then(response => {
                    this.contentData = response.data;
                    document.getElementsByTagName("title")[0].innerHTML =  this.contentData.title;
                    for (var i = 0; i < response.data.relatedList.length; i++) {
                        if((response.data.relatedList[i].imageUrl === null) || (!response.data.relatedList[i].imageUrl)){
                            response.data.relatedList[i].imageUrl = this.getArticlenoneImg(response.data.relatedList[i].tagId);
                        }
                    }
                    this.relatedList = response.data.relatedList;
                    this.contentData.createDate = this.timetrans(new Date(parseInt(this.contentData.createDate)));
                    this.$nextTick(()=>{
                        console.log($('.articleContent ').find('img'))
                        var img = $('.articleContent ').find('img')
                        for(var i = 0;i < img.length;i ++){
                            // console.log($(img[i]).attr("style"))
                            console.log($(img[i]).width())
                            console.log(window.screen.width)
                            if($(img[i]).width()>window.screen.width){

                                $(img[i]).css("cssText", "width:100% !important;box-sizing:border-box !important;word-wrap: break-word !important;")
                            }else{
                                $(img[i]).css({'max-width': '100%','height': 'auto'})
                            }

                        }
                    })

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
            getArticleTitle(status){
                return Filter.getArticleStatus(status)
            },
            getArticleIcon(status){
                return Filter.getArticleIcon(status)
            },
            getArticleImg(status){
                return Filter.getArticleImg(status)
            },
            getArticlenoneImg(status){//默认图片
                return Filter.getArticlenoneImg(status)
            },
            getGoodsList(flag,id,source,size){
                Service.sys().getArtitle({
                    categoryId: id,
                    page: this.page,
                    size: size
                }).then(response => {
                    if(response.data.records.length != 0){
                        for (var i = 0; i < response.data.records.length; i++) {
                            response.data.records[i].createDate = this.timetrans(new Date(parseInt( response.data.records[i].createDate)));
                            // response.data.records[i].tags = new Array(response.data.records[i].tags);
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
                        this.allData = response.data.records;
                        // 当第一次加载数据完之后，把这个滚动到底部的函数触发打开
                        this.busy = false;
                    }
                }, err => {
                });
            },
            loadMore: function() {
                this.busy = true;
                // 多次加载数据
                setTimeout(() => {
                    this.page ++;
                    this.getGoodsList(true,3,'',this.pageSize);

                }, 500);
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

