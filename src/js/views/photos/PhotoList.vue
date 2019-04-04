<template>
    <div>
        <!-- 顶部导航可左右滑动 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <!-- 通过添加绑定，使得数据变为动态的可变数据 -->
                    <a :class="['mui-control-item', index===0?'mui-active':'']" href="" v-for="(item, index) in catedata" :key="index" @click="getPhotos(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>

        <!-- 图片列表区域 -->
        <!-- 不妨也以一个路由为底？ -->
        <ul class="img-list">
            <router-link v-for="(item, index) in imglist" :key="index" :to="'/home/photoinfo/'+ item.id" tag="li">
                <img :src="item.img_url">
                <div class="img-description">
                    <p>
                        <span>{{item.title}}</span>
                        <span v-html="item.zhaiyao" class="img-content"></span>
                    </p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '../../../lib/dist/js/mui.min.js'
export default {
    data() {
        return {
            catedata: [],
            imglist: []
        }
    },
    methods: {
        getAllCategory () {
            this.axios.get('/getimgcategory')
                    .then( res => {
                        //console.log(res.data.message);
                        this.catedata = res.data.message;
                        this.catedata.unshift({title: '全部', id: 0})
                    })
        },
        getPhotos (imgid) {
            //console.log(imgid);
            this.axios.get(`/getimages/${imgid}`)
                    .then( res => {
                        //console.log(res.data.message);
                        this.imglist = res.data.message
                    })
        }

    },
    created() {
        this.getAllCategory();
        this.getPhotos(0);
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
}
</script>

<style lang="less" scoped>
    .mui-slider{
        touch-action: none;
        
    }

    .img-list {
        padding:8px;
        margin:0;
        li {
            list-style-type: none;
            padding-bottom: 10px;
            position: relative;
            img {
                width: 100%;
                vertical-align: middle
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
        }
    }

    .img-description {
        position: absolute;
        bottom: 0;
        width:100%;
        height: 60px;
        overflow: hidden;
        margin-bottom: 10px;
        background-color: rgba(0, 0, 0, .5);

        p {
            font-size: 12px;
            margin-bottom: 0;
        }
        .img-content {
            display: table-cell
        }
    }
</style>
