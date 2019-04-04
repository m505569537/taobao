<template>
    <div class="newsinfo-container">
        <p class="title">{{msg.title}}</p>
        <p class="newsinfo-time">
            <span>发布时间: {{msg.add_time | dateFormat}}</span>
            <span>点击: {{msg.click}}</span>
        </p>
        <hr>
        <div class="content" v-html="msg.content"></div>
        <new-comm :id="id"></new-comm>
    </div>
</template>

<script>
import Comment from '../subcompoents/Comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            msg: {}
        }
    },
    methods: {
        getNewsInfo () {
            this.axios.get(`/getnew/${this.id}`)
                .then((res) => {
                    //console.log(res.data.message[0]);   
                    this.msg = res.data.message[0]
                }).catch((err) => {
                    console.log(err.message);
                });
        }
    },
    created() {
        this.getNewsInfo()
    },
    components: {
        "new-comm": Comment
    }
}
</script>

<style lang="less" scoped>
    .newsinfo-container {
        padding: 0 4px;
    }

    .title {
        font-size: 15px;
        text-align: center;
        color: red;
        margin: 15px 0
    }
    .newsinfo-time {
        display: flex;
        justify-content: space-between;
        color: #226aff;
        font-size: 13px;
    }
</style>
