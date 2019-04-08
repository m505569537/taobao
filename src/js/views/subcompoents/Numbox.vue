<template>
    <div class="numbox">
        <!-- <span class="label">购买数量：</span> -->
            <!-- <input type="button" :class="['calc',{decrease:(num===1?true:false)}]" value="-" @click="operate('-')"> 这样可以给标签添加类名 -->
            <input type="button" class="calc" :value="flexnum===1?'':'-'" @click="operate('-')"><input type="button" disabled :value="flexnum"><input type="button" class="calc" :value="flexnum===60?'':'+'" @click="operate('+')">
    </div>
</template>

<script>
export default {
    data() {
        return {
            //每次进入页面都会重新将flexnum设为 this.record.num的值，所以如果不修改this.record.num
            //的值，而只令 this.flexnum = this.$store.state.num ，每次刷新页面，num值都会变回最初
            //的this.record.num值
            flexnum: this.record.num,
        }
    },
    props: ['record'],
    methods: {
        operate (opt) {
            this.$store.commit('modify',this.flexnum);
            this.$store.commit('addOrDes',{opt, 'max':this.record.max})
            this.flexnum = this.$store.state.num;
            // this.$store.commit('confirmNum',{'id':this.record.id, 'num': this.flexnum, 'sell': this.record.sell})
            //因为 record是props属性，是只读的，所以重新令一个对象引用它，来进行修改操作
            let obj = this.record;
            obj.num = this.flexnum;
            //修改state.shoplist 值，会重新渲染页面
            this.$store.commit('addShop',obj);
            this.$store.commit('totalMoney');
            this.$emit('getSingleAll')
        },
    },
}
</script>

<style lang="less" scoped>
    .numbox {
        margin-bottom: 10px;
        /* .label {
            color: #8f8f94;
        } */

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
</style>
