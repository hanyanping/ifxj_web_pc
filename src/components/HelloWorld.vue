<style rel="stylesheet/scss" lang="scss">
    .carousel-indicators li{
        height: 15px;
        width: 15px;
        margin-right: 6px;
    }
    .carousel-indicators .active {
        width: 15px;
        height: 15px;
        margin-right: 6px;
    }
    .carousel-inner{
        height: 100%;
    }
    .item{
        height: 100%;
    }
    .banner0{
        width: 100%;
        height: 100%;
        /*background-size: cover;*/
    }
    .banner2{
        width: 100%;
        height: 100%;
        /*background-size: cover;*/
    }
    .banner1{
        width: 100%;
        height: 100%;
        /*background-size: cover;*/
    }
    .textbox{
        padding: 10px;
        border: 1px solid #f4f4f4;
        border-radius: 10px;
    }
    .col-sm-3{
        margin-bottom: 20px;
    }
</style>
<template>
    <div class="home">
        <div id="myCarousel" class="carousel slide " data-ride="carousel" data-interval="3000">
            <!-- 轮播（Carousel）指标 -->
            <ol class="carousel-indicators">
                <li v-for='(i,index) in 3' :class="index == 0 ? 'active' : 'noactive'" data-target="#myCarousel" :data-slide-to="index"></li>
            </ol>
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner" >
                <div v-for='(i,index) in 3' :class="index == 0 ? 'item active img-responsive' : 'item img-responsive'" >
                    <div class='' :class=" 'banner'+index "></div>
                </div>
                <!--<div class="item">-->
                    <!--<div class="banner2"></div>-->
                <!--</div>-->
                <!--<div class="item">-->
                    <!--<div class="banner3"></div>-->
                <!--</div>-->
            </div>
            <!-- 轮播（Carousel）导航 -->
            <!--<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">-->
                <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
                <!--<span class="sr-only">Previous</span>-->
            <!--</a>-->
            <!--<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">-->
                <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
                <!--<span class="sr-only">Next</span>-->
            <!--</a>-->
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="textbox">
                        <h3>h3. Bootstrap heading <small>Secondary text</small></h3>
                        <img src="../assets/images/loginlogo.png" class="img-responsive" alt="Responsive image">
                        <p class="lead">...</p>
                    </div>

                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="textbox">
                        <h3>h3. Bootstrap heading <small>Secondary text</small></h3>
                        <p class="lead">...</p>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="textbox">
                        <h3>h3. Bootstrap heading <small>Secondary text</small></h3>
                        <p class="lead">...</p>
                    </div>

                </div>
                <div class="col-sm-3 col-md-3 col-lg-3">
                    <div class="textbox">
                        <h3>h3. Bootstrap heading <small>Secondary text</small></h3>
                        <p class="lead">...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        bannerData: [{}]
    }
  },
    created(){
    },
    mounted(){
        // console.log($(".aa").html())
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

