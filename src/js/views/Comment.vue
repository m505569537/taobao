<template>
    <div>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <p class="user">
                    <span>第{{index+1}}楼</span>
                    <span>用户: {{item.user_name}}</span>
                    <span>发表时间: {{item.add_time | dateFormat}}</span>
                </p>
                <p class="con">{{item.content===''? '此人很懒，什么都没说':item.content}}</p>
            </li>
        </ul>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            page: 1
        }
    },
    methods: {
        getComments () {
            this.axios.get(`/getcomments/${this.id}?pageindex=${this.page}`)
                .then( res => {
                    //console.log(res.data.message);
                    this.list = this.list.concat(res.data.message);
                })
        },
        getMore () {
            this.page++;
            // this.axios.get(`/getcomments/${this.id}?pageindex=${++this.page}`)
            //     .then( res => {
            //         //console.log(res.data.message);
            //         this.list = this.list.concat(res.data.message);
            //     })
            this.getComments()
        }
    },
    props: ["id"],
    created() {
        this.getComments()
    },
}
</script>

<style lang="less" scoped>
    ul {
        padding: 0;
        li {
            list-style-type: none;
            p {
                margin-bottom: 5px;
            }
            .user {
                padding: 4px;
                background: #b2b2b2;
                color: #000;
                font-size: 12px
            }
            .con {
                color: #000;
                padding-left: 30px;
            }
        }
    }
</style>
