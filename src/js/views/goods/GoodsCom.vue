<template>
    <div>
        发表评论：
        <Comment :id="id"></Comment>
    </div>
</template>

<script>
import Comment from '../subcompoents/Comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    components: {
        Comment
    }
}
</script>

<style lang="less" scoped>

</style>
