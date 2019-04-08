<template>
    <div class="record-card">
        <div class="image">
            <img :src="record.src" alt="">
        </div>
        <div class="desc">
            <h3>{{record.title}}</h3>
            <hr>
            <div class="content">
                <p class="price">
                    <span class="sell">￥{{record.sell}}</span>
                    <span class="market">￥{{record.market}}</span>
                </p>
                <Numbox :record='record' @getSingleAll='getSingleAll'></Numbox>
            </div>
        </div>
        <div class="singleAll">
            {{record.num}}件总价：
            <span class="all-price">￥{{singlaAll}}</span>
            <input type="button" value="删除" class="delete" @click="deleteRe">
        </div>
    </div>
</template>

<script>
import Numbox from '../subcompoents/Numbox.vue'
export default {
    data() {
        return {
            singlaAll: 0
        }
    },
    methods: {
        getSingleAll () {
            this.singlaAll = this.record.num * this.record.sell
        },
        deleteRe () {
            this.$store.commit('deleteShop',this.record.id);
            this.$store.commit('totalMoney')
        }
    },
    props: ['record'],
    components: {
        Numbox
    },
    created() {
        this.getSingleAll()
    },
}
</script>

<style lang="less" scoped>
    .record-card {
        margin: 4px 7px;
        border: 1px solid #cccccc;
        box-shadow: 0 0 8px #cccccc;
        display: flex;
        flex-wrap: wrap;
        .image {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 4px;
            img {
                width: 100%
            }
        }
        .desc {
            padding: 0 7px;
            width: 70%;
            .content {
                display: flex;
                justify-content: space-between;
                .price {
                    .sell {
                        color: red;
                    }
                    .market {
                        text-decoration: line-through
                    }
                }
            }
        }
        .singleAll {
            width: 100%;
            height: 40px;
            line-height: 40px;
            padding-left: 10px;
            margin-bottom: 2px;
            font-size: 20px;
            .all-price {
                color: red
            }
            input {
                float: right;
                // vertical-align: middle;
                height: 100%;
                padding: 0 20px;
                background: #CD2626;
                color: white
            }
        }
    }
</style>
