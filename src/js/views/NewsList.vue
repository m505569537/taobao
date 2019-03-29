<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in list" :key="index">
                <router-link :to="'/home/newslist/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <span class="s1">{{item.title}}</span>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat}}</span>
                            <span>点击: {{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <!-- <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/1.jpg">
                    <div class="mui-media-body">
                        <span class="s1">木屋</span>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019-3-29</span>
                            <span>点击: 0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/1.jpg">
                    <div class="mui-media-body">
                        <span class="s1">CBD</span>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019-3-29</span>
                            <span>点击: 0次</span>
                        </p>
                    </div>
                </a>
            </li> -->
        </ul>
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
        getNewsList () {
            this.axios.get('/getnewslist')
                .then( res => {
                    //console.log(res.data.message);
                    this.list = res.data.message;
                })
        }
    },
    created() {
        this.getNewsList()
    },
}
</script>

<style lang="less" scoped>
    .mui-table-view {
        li {
            .s1 {
                font-size: 14px
            }

            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                // 分居两侧
                display: flex;
                justify-content: space-between
            }
        }
    }
</style>
