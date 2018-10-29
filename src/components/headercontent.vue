<style rel="stylesheet/scss" lang="scss">
    .fixed-top {
        background: #000 !important;
        transform: translate(0,100px);
        transition: transform .5s;
    }
    .fixed-topone{
        background: #000 !important;
    }
    .navbar-default .navbar-nav > li > a {
        color: #fff;
    }

    .navbar-default .navbar-nav > li > a:before {
        border-bottom: 1px solid #fff;
        content: " ";
    }
.navbar-brand{
    height: 55px;
}
    .collapse{
        display: block;

    }


    .navbar-toggle{

        /*transform: translate3d(34%,0,0);*/
    }
/*.collapse in{*/
    /*!*display: block;*!*/
    /*transform: translateZ(0);*/
/*}*/
.navbar {
        background: rgba(255, 255, 255, 0);
        margin-bottom: 0;
        width: 100%;
        border: none;
    }
    .navbar-default .navbar-toggle .icon-bar{
        background: #fff;
         transition: all .3s ease 0s;
    }
    .navbar-default .open span:nth-child(2) {
        position: absolute;
        margin: 3px 0 0;
        transform: rotate(-45deg);
    }
    .navbar-default .open span:nth-child(3) {
        opacity: 1;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
        transform: rotate(45deg);
    }
    .navbar-default .open span:nth-child(4) {
        opacity: 0;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    }
    .open span:nth-child(1) {
        opacity: 0;
        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    }

    /****************** pc specail start *********************************/
    .active:after{
        display: table;
        content: " ";
        height: 4px;
        width: 20px;
        text-align: center;
        border-radius: 4px;
        background: rgba(255, 255, 255, 1);
        margin: 6px auto;
    }
    .navbar .nav > li .dropdownMenu {
        margin: 0;
        text-align: center;
        background: #000;
        color: #fff;
        padding: 0px 0 15px;
        display: none;
        position: absolute;
        min-width: 150px;
        left: -25px;
        top:70px;
    }
    .navbar .nav > li .dropdownMenu1{
        text-align: left;
    }

    .navbar .nav > li:hover .dropdownMenu{
        display: block;
        color: #fff;
    }
    /*.navbar .nav > li .dropdownMenu:hover{*/
        /*display: block;*/
        /*color: #fff;*/
    /*}*/
    .dropdownMenu > li > a {
        padding: 15px 0px 15px;
        color: #fff;
        display: block;
        font-size: 14px;
        margin-bottom: -1x;
    }
    .dropdownMenu1 > li > a {
        padding-left: 24px;
        color: #fff;
        display: block;
        font-size: 14px;
    }
    @media screen and (min-width:768px){
        .navbar .nav > li:hover .spanborder {
            color: #fff;
        }
        .navbar-nav>li>a{
            padding-top: 32px;
            padding-bottom: 33px;
        }
        .navbar .nav .dropdownMenu > li > a:hover { //子菜单hove
            cursor: pointer;
            background: #f4f4f4;
            color: #232323;
        }
        .navbar-right {
            margin-right: 10%;
            height: 80px;
        }
        .container-fluid{
            padding-left: 10%;
        }
        .navbar-brand{
            margin-top: 10px;
        }
        .dropdownMenu > li .childText {
            padding: 3px 0px 0px;
            clear: both;
            color: #d1d1d1;
            font-size: 12px;
            white-space: nowrap;
        }
        .dropdownMenu1 > li .childText {
            padding: 3px 24px 0px;
            clear: both;
            color: #d1d1d1;
            font-size: 12px;
            white-space: nowrap;
        }
        .dropdownMenu > li .childText:hover { //子菜单hove
            cursor: pointer;
            background: #f4f4f4;
            color: #232323;
        }
    }

    /****************** pc specail end *********************************/
    /**************** mobile specail start ******************************/
    @media screen and (max-width: 768px) {
        #bs-example-navbar-collapse-1 {
            min-height: 100vh;
            background: #212020;
            text-align: center;
            font-size: 18px;
            position: absolute;
            width:100%;
        }
        .navbar-collapse{
            transform: translate3d(100%,0,0);
        }
        .transform{
            transform: translate3d(0%,0,0);
            transition: transform .3s;
        }
        .transformnone{
            transform: translate3d(100%,0,0);
            transition: transform .3s;
        }
        .fixed-topone{
            background: rgba(255, 255, 255, 0)!important;
        }
        .col-sm-3 {
            margin-bottom: 10px;
        }
        .navbar-nav {
            margin: 30px -15px;
        }
    }

    @media screen and (max-width: 750px) {
        .healthheader{
            margin-bottom:50px;
        }
        .navbar .nav > li:hover .spanborder {
            color: #fff;
        }
        .mobile-header {
            background: #212020;
        }
        .main {
            overflow: hidden;
        }

        .nav>li{
            margin: 40px 0;
        }
    }
    .navbar-toggle{
        padding: 13px 6px;
    }
    .navbar-default .navbar-toggle{
        border: none;
    }
    .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
        background-color: #212020;
    }
    /**************** mobile specail end *****************************/
</style>
<template>
    <div class="healthheader">
        <nav class="navbar  navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header mobile-header">
                    <button type="button" class="navbar-toggle collapsed " @click="toggleHidden" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <img class="navbar-brand " src="../assets/images/logo.png"/>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li v-for="(items,index) in headerData">
                            <a href="javascript:void(0)" @click="goRouter(items.router,index)">
                                <span @mouseenter="inStyle" @mouseleave="outStyle"
                                      :class="index==0?'spanborder active':'spanborder'">{{items.title}}</span>
                            </a>
                            <ul class="dropdownMenu mobile-hidden"  :class="index==1?'dropdownMenu1':'dropdownMenu'" aria-labelledby="dropdownMenu1"
                                v-if="items.titleList.length != 0">
                                <li v-if='index == 1' v-for="(item ,$index) in items.titleList">
                                    <a href="javascript:void(0)"
                                       @click="goProductPosition('platform'+(2*$index),index)">{{item.titletext}}
                                    </a>
                                    <div class="childText" v-for="ite in item.textList" @click="goProductPosition('platform'+(ite.num),index)">
                                        {{ite.name}}
                                    </div>
                                </li>
                                <li v-if='index == 4' v-for="(item ,$index) in items.titleList">
                                    <a href="javascript:void(0)"  @click="goProductPosition('about'+$index,index)">{{item.titletext}}
                                    </a>
                                    <div class="childText" v-for="ite in item.textList">
                                        {{ite.name}}
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                headerData: [
                    {'title': '首页', router: '/', titleList: []},
                    {
                        'title': '产品与服务', router: '/productserver', titleList: [
                            {titletext: '数据智能', textList: [{'name': '智能营销平台', num: 0}, {name: '数据洞察平台', num: 1}]},
                            {titletext: '健康医疗', textList: [{'name': '健康医疗服务平台', num: 2}, {name: '健康管理平台', num: 3}]},
                            {titletext: '保险科技', textList: [{'name': '移动展业平台', num: 4}, {name: '分布式电商平台', num: 5}]}
                        ]
                    },
                    {'title': '健康头条', router: '/health', titleList: []},
                    {'title': '公司动态', router: '/news', titleList: []},
                    {
                        'title': '关于我们', router: '/aboutour', titleList: [
                            {titletext: '品牌理念', textList: []},
                            {titletext: '公司简介', textList: []},
                            {titletext: '发展历程', textList: []},
                            {titletext: '荣获奖项', textList: []},
                            {titletext: '合作伙伴', textList: []},
                            {titletext: '加入我们', textList: []}
                        ]
                    }
                ]
            }
        },
        mounted() {
            // $(window).scroll(function () {
            //     var height = $('.navbar').height()
            //     if ($(window).scrollTop() >= height) {
            //         $('.navbar').addClass('fixed-top')
            //     } else {
            //         $('.navbar').removeClass('fixed-top')
            //     }
            // })
        },
        methods: {
            toggleHidden() {
                $('body').toggleClass('main');
                if($('body').attr('class').indexOf('main')>-1){//存在
                    $(".navbar-toggle").addClass('open')
                    $(".navbar-collapse").addClass('transform');
                    $(".navbar-collapse").removeClass('transformnone')
                    document.documentElement.style.overflow = 'hidden';//禁用
                }else{
                    $(".navbar-collapse").removeClass('transform');
                    $(".navbar-collapse").addClass('transformnone')
                    // $(".navbar-collapse").animate({transform: 'translate3d(0%, 0, 0)'},500);
                    $(".navbar-toggle").removeClass('open')
                    document.documentElement.style.overflow = 'visible';//启用
                }
            },
            inStyle() {
                // $('.navbar').addClass('fixed-top')
            },
            outStyle() {
                // $('.navbar').removeClass('fixed-top')
            },
            goProductPosition(name, index) {
                this.$emit('prductListen', name)
                if(name.indexOf('platform')>=0){
                    this.$router.push({path: '/productserver', query: {'index': index, 'classname': name}})
                }else{
                    this.$router.push({path: '/aboutour', query: {'index': index, 'classname': name}})
                }

            },
            goRouter(router, index) {
                $('body').removeClass("main");
                $(".navbar-toggle").addClass('open')
                $(".navbar-collapse").removeClass('transform');
                $(".navbar-collapse").addClass('transformnone')
                document.documentElement.style.overflow = 'visible';//启用
                var that = this;
                setTimeout(function(){
                    that.$router.push({path: router, query: {'index': index}})
                },200)
            },
        }
    }
</script>

