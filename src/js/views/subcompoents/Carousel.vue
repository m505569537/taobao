<template>
    <mt-swipe :auto="2000">
        <mt-swipe-item v-for="(item, index) in list" :key="index">
            <!-- 通过 isAll 传递过来的 true 和 false来设置是否添加class属性.full -->
            <img :src="item.img||item.src" :class="{full:isAll}" alt="h">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ["list", "isAll"]
}
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 200px;
        text-align: center;
        .mint-swipe-item {
        /* &:nth-child(1) {
            background-color: red
        }
        &:nth-child(2) {
            background-color: blue
        }
        &:nth-child(3) {
            background-color: green
        } */

        img {
            height: 100%
        }

        .full {
            width: 100%
        }
    }
    }
</style>
