<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item, index) in list" :key="index">
                <a :href="item.url"><img :src="item.img" alt="h"></a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        getLunbo () {
            //获取轮播图资源
            this.axios.get('http://www.liulongbin.top:3005/api/getlunbo')
                    .then((res) => {
                        //console.log(res.data.message);
                        this.list = res.data.message;
                    }).catch((err) => {
                        console.log(err);
                    });
        }
    },
    created() {
        this.getLunbo()
    },
}
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 200px;
    }

    .mint-swipe-item {
        &:nth-child(1) {
            background-color: red
        }
        &:nth-child(2) {
            background-color: blue
        }
        &:nth-child(3) {
            background-color: green
        }

        img {
            width: 100%;
            height: 100%
        }
    }
</style>
