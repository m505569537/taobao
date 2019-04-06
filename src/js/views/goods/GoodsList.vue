<template>
<div>
    <div class="goodslist">
        <router-link class="goodsitem" v-for="item in list" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div">
            <img :src="item.img_url" alt="">
            <p class="title">
                {{item.title}}
            </p>
            <div class='con'>
                <p class="price">
                    <span class="sell">￥{{item.sell_price}}</span>
                    <span class="market">￥{{item.market_price}}</span>
                </p>
                <p class="hot-sale">
                    <span>热卖中</span>
                    <span class="sum">剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>    
</div>
</template>

<script>
export default {
    data () {
        //data是组件内私有属性，只受组件控制
        return {
            pageindex: 1,
            list: []
        }
    },
    methods: {
        getGoodsList () {
            this.axios.get(`/getgoods?pageindex=${this.pageindex}`)
                    .then( res => {
                        //console.log(res.data.message);
                        this.list = this.list.concat(res.data.message);
                    }).catch( err => {
                        console.log(err.message);
                    })
        },
        getMore () {
            this.pageindex++;
            this.getGoodsList()
        }
    },
    created() {
        this.getGoodsList()
    },
}
</script>

<style lang="less" scoped>
    .goodslist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 3px 7px;

        .goodsitem {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 49%;
            padding: 0 2px;
            border: 1px solid #cccccc;
            box-shadow: 0 0 8px #cccccc;
            min-height: 290px;
            margin: 4px 0;
            
            img {
                width: 100%
            }

            .title {
                color: #000;
                font-weight: bolder;
                font-size: 15px
            }

            .con {
                background: #ddd;
                .price {
                    margin-bottom: 5px;
                    .sell {
                        font-size: 15px;
                        color: red;
                        font-weight:800;
                        margin-left: 5px;
                        margin-right: 10px
                    }

                    .market {
                        text-decoration: line-through;
                        font-size: 12px;
                    }
                }
                .hot-sale {
                    font-size: 12px;
                    margin-bottom: 0px;
                    padding: 0 7px;
                    .sum {
                        float: right
                    }
                }
            }
        }
    }
</style>
