<template>
    <div>
        <ShopRecord v-for="item in $store.state.shoplist" :key="item.id" :record="item"></ShopRecord>
        <div class="total" v-show="$store.state.shoplist.length!==0?true:false">
            总计:
            <span class="total-money">￥{{$store.state.total}}</span>
            <input type="button" :value="'去结算'+'('+$store.state.shoplist.length+')'">
        </div>
        <div class="nolist" v-show="$store.state.shoplist.length===0?true:false">
            抱歉，您还未选中任何商品0v0
        </div>
    </div>
</template>

<script>
import ShopRecord from '../shopcarinfo/ShopRecord.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        ShopRecord
    },
    methods: {
        
    },
    created() {
        this.$store.commit('totalMoney')
        //console.log(this.$store.state.shoplist, this.$store.state.carContent);
    }
}
</script>

<style lang="less" scoped>

    .total {
/*         position: fixed;
        bottom: 52px; */
        z-index: 99;
        padding-left: 15px;
        margin:0 7px;
        font-size: 21px;
        height: 50px;
        background: white;
        box-shadow: 0 1px 5px #888;
        line-height: 50px;
        .total-money {
            font-weight: bolder;
            color: red
        }
        input {
            float: right;
            height: 100%;
            padding: 0 20px;
            background: #9B30FF;
            color: white
        }
    }

    .nolist {
        margin: 4px 7px;
        border: 1px solid #cccccc;
        box-shadow: 0 0 8px #cccccc;
        text-align: center;
        font-size: 15px;
        padding: 40px 0
    }
</style>
