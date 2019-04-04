<template>
    <div class="photo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>{{photoinfo.add_time | photoTime}}</span>
            <span>点击: 0次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
        <vue-preview class="gar" :slides="list" @close="handleClose"></vue-preview>
        <br>
        <!-- 图片内容 -->
        <div class="content" v-html="photoinfo.content"></div>
    <br>
        <!-- 评论子组件 -->
        <new-comm :id="id"></new-comm>
    </div>
</template>

<script>
//地址最后的.vue不能像.js一样省略
import Comment from '../subcompoents/Comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            photoinfo:{},
            list: []
        }
    },
    methods: {
        getPhotoInfo () {
            this.axios.get(`/getimageInfo/${this.id}`)
                    .then( res => {
                        //console.log(res.data.message);
                        this.photoinfo = res.data.message[0];
                    })
        },
        getthumbnailimage () {
            this.axios.get(`/getthumimages/${this.id}`)
                    .then( res => {
                        //console.log(res.data.message);
                        this.list = res.data.message.map((item,index) => {
                            return {
                                'src': item.src,
                                'msrc': item.src,
                                'alt': index,
                                'title': index,
                                'w': 600,
                                'h': 400
                            }
                        })
                    })
        },
        handleClose () {
            console.log('close event');
        }
    },
    created() {
        this.getPhotoInfo();
        this.getthumbnailimage()
    },
    filters: {
        'photoTime': function (date) {
            if(date){
                return date.substring(0,10) + ' ' + date.substring(11,19)
            }
            else {
                return;
            }
        }
    },
    components: {
        "new-comm": Comment
    }
}
</script>

<style lang="less">
    .photo-container {
        padding: 0 4px
    }

    h3 {
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0
    }

    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        padding: 0 4px
    }

    .gar {
        figure {
            display: inline-block;
            margin: 2px 5px
        }
        img {
            height: 100px;
        }
    }

    .content {
        font-size: 13px;
        line-height: 30px
    }
</style>
