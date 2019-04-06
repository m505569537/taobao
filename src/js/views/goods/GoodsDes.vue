<template>
    <div class="des-container">
        <h3>{{info.title}}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            info: {}
        }
    },
    methods: {
        getGoodsDes () {
            this.axios.get(`/goods/getdesc/${this.id}`)
                    .then((res) => {
                        console.log(res.data.message[0]);
                        this.info = res.data.message[0]
                    }).catch((err) => {
                        console.log(err.message);
                    });
        }
    },
    created() {
        this.getGoodsDes()
    },
}
</script>

<style lang="less">
    .des-container {
        padding: 3px;
        .content {
            img {
                width: 100%
            }
        }
    }
</style>
