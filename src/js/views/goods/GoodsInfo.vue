<template>
    <div>
        <!-- 商品轮播区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- 给子组件传递 list isAll 两个值 -->
                    <Carousel :list="lunbo" :isAll='false'></Carousel>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header title">{{info.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        <span class="market">市场价: ￥{{info.market_price}}</span>&nbsp;&nbsp;
                        <span class="sell">销售价: ￥{{info.sell_price}}</span>
                    </p>
                    <div class="numbox">
                        <span class="label">购买数量：</span>
                            <!-- <input type="button" :class="['calc',{decrease:(num===1?true:false)}]" value="-" @click="operate('-')"> 这样可以给标签添加类名 -->
                            <input type="button" class="calc" :value="num===1?'':'-'" @click="operate('-')"><input type="button" disabled :value="num"><input type="button" class="calc" value="+" @click="operate('+')">
                    </div>
                    <mt-button type="primary" size="small">立即购买</mt-button>&nbsp;
                    <mt-button type="danger" size="small" @click="flag=!flag">加入购物车</mt-button>
                    

                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner parameter">
                    <p>商品货号：&nbsp;&nbsp;{{info.goods_no}}</p>
                    <p>库存情况：&nbsp;&nbsp;{{info.stock_quantity}}</p>
                    <p>上架时间：&nbsp;&nbsp;{{info.add_time | goodsdate}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDes">图文介绍</mt-button> 
                <mt-button type="danger" size="large" plain @click="goCom">商品评论</mt-button>
            </div>
        </div>

        <!-- 小球漂移 -->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="ball" v-show="flag" ref="ball"></div>        
        </transition>
    </div>
</template>

<script>
import Carousel from '../subcompoents/Carousel.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbo: [],
            info: {},
            num: 1,
            flag: false
        }
    },
    methods: {
        getGoodsImg () {  //获取轮播图图片
            this.axios.get(`/getthumimages/${this.id}`)
                    .then( res => {
                        //console.log(res.data.message);
                        this.lunbo = res.data.message
                        //console.log(this.lunbo);
                    }).catch( err => {
                        console.log(err.message);
                    })
        },
        getGoodsInfo () {   //获取商品信息
            this.axios.get(`/goods/getinfo/${this.id}`)
                    .then( res => {
                        //console.log(res.data.message[0]);
                        this.info = res.data.message[0]
                    })
        },
        operate (opt) {    //实现加减法
            switch (opt) {
                case '-':
                    if(this.num===1){
                        break;
                    }
                    this.num--
                    break;
            
                case '+':
                    this.num++
                    break;
                default:
                    break;
            }
        },
        goDes () {  //通过编程式导航进入商品图文介绍页面
            this.$router.push({ name: 'goodsdes', params: {id: this.id} })
        },
        goCom () {  //通过编程式导航进入商品评论页面
            this.$router.push({ name: 'goodscom', params: {id: this.id} })
        },
        //控制小球移动轨迹
        beforeEnter (el) {
            el.style.transform = 'translate(0,0)'
        },
        enter (el, done) {
            el.offsetWidth;
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById('badge').getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;
            el.style.transform = `translate(${xDist}px,${yDist}px)`;
            el.style.transition = 'all .8s ease'
            done()
        },
        afterEnter (el) {
            this.flag = !this.flag
        }
    },
    components: {
        Carousel
    },
    created() {
        this.getGoodsImg();
        this.getGoodsInfo();
    },
    filters: {
        'goodsdate': function (date) {
            if(date){
                return date.substring(0,10) + ' ' + date.substring(11,19)
            }
            else {
                return;
            }
        }
    }
}
</script>

<style lang="less" scoped>
    * {
        font-family: auto
    }
    .title {
        font-size: 15px;
        font-weight: 500
    }

    .price {
        font-size: 13px;
        .market {
            text-decoration: line-through
        }

        .sell {
            color: red;
            font-weight: bolder
        }
    }

    .numbox {
        margin-bottom: 10px;
        .label {
            color: #8f8f94;
        }

        input {
            border: 1px solid #b2b2b2;
            box-shadow: 0 0 .4px;
            border-radius: 0;
        }

        .calc {
            width: 35px;
            background: #e2e2e2;
            vertical-align: middle
        }

        /* .decrease {
            color:#e2e2e2;
        } */
    }

    .parameter {
        p {
            font-size: 12px;
            color: #777
        }
    }

    .mui-card-footer {
        display: block;
        button {
            margin: 10px 0
        }
    }

    .ball {
        position: absolute;
        top:440px;
        left: 180px;
        width: 15px;
        height: 15px;
        background: red;
        border-radius: 50%;
        z-index: 99
    }
</style>
