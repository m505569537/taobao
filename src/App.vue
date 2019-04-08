<template>
    <div class="container">
        <!-- Header -->
        <mt-header fixed title="perfect"></mt-header>
        <input type="button" value="< 返回" class="goback" @click="goback" v-show="$route.path==='/home'&&this.$store.state.routeList.length===0?false:true">

        <!-- body -->
        <transition>
            <router-view></router-view>        
        </transition>

        <!-- footer -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopping-car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.state.shoplist.length}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        goback () {
            this.$store.commit('goback')
            // console.log(this.$router);
        }
    },
}
</script>

<style lang="less" scoped>
    .container {
        padding: 0px;
        margin: 0px;
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;

        .goback {
            position: absolute;
            top: 0;
            z-index: 99;
            height: 40px;
            background-color: rgba(0,0,0,0);
            border: 0;
            color: white
        }

        .footer {
            position:fixed;
            bottom: 0;
            width: 100%;
            margin-bottom: 0;
            padding-left: 0;
            li {
                list-style-type: none;
                float: left;
                width: 25%;
                text-align: center
            }
        }

        .mui-tab-item1 {
            display: table-cell;
            overflow: hidden;
            width: 1%;
            height: 50px;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #929292;

            .mui-icon {
                top: 3px;
                width: 24px;
                height: 24px;
                padding-top: 0;
                padding-bottom: 0;
            }

            .mui-tab-label {
                font-size: 11px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .mui-tab-item1.mui-active {
            color: #007aff
        }
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute
    }

    .v-enter-active, .v-leave-active {
        transition: all 0.5s ease
    }

    .mui-bar {
        box-shadow: 0 0;
        border-top: 1px solid #d2d2d2
    }
</style>
