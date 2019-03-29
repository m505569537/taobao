<template>
    <div class="container">
        <!-- Header -->
        <mt-header fixed title="固定在顶部"></mt-header>

        <!-- body -->
        <transition>
            <router-view></router-view>        
        </transition>

        <!-- footer -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopping-car">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .container {
        padding: 0px;
        margin: 0px;
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;

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
        transition: all 0.4s ease
    }

    .mui-bar {
        box-shadow: 0 0;
        border-top: 1px solid #d2d2d2
    }
</style>
