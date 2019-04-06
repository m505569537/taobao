<template>
    <div>
        <!-- 轮播图 -->
        <!-- 给子组件传递 list isAll 两个值 -->
        <Carousel :list='list' :isAll='true'></Carousel>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们    </div></router-link></li>
        </ul> 
    </div>
</template>

<script>
import Carousel from '../subcompoents/Carousel.vue'
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getLunbo () {
            //获取轮播图资源
            this.axios.get('/getlunbo')
                    .then((res) => {
                        //console.log(res.data.message);
                        this.list = res.data.message;
                        //console.log(this.list);
                    }).catch((err) => {
                        console.log(err);
                    });
        }
    },
    components: {
        Carousel
    },
    created() {
        this.getLunbo()
    },
}
</script>

<style lang="less" scoped>
    
</style>
