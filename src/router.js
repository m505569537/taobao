import VueRouter from 'vue-router'

import Home from './js/views/tabbar/Home.vue'
import Member from './js/views/tabbar/Member.vue'
import Search from './js/views/tabbar/Search.vue'
import Shopcar from './js/views/tabbar/Shopcar.vue'
import NewsList from './js/views/news/NewsList.vue'
import NewsInfo from './js/views/news/NewsInfo.vue'
import PhotoList from './js/views/photos/PhotoList.vue'
import PhotoInfo from './js/views/photos/PhotoInfo.vue'
import GoodsList from './js/views/goods/GoodsList.vue'
import GoodsInfo from './js/views/goods/GoodsInfo.vue'
import GoodsDes from './js/views/goods/GoodsDes.vue'
import GoodsCom from './js/views/goods/GoodsCom.vue'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/shopping-car', component: Shopcar },
        { path: '/search', component: Search },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newslist/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo },
        { path: '/home/goodsdes/:id', component: GoodsDes, name: 'goodsdes' },
        { path: '/home/goodscom/:id', component: GoodsCom, name: 'goodscom' }
    ],
    linkActiveClass: 'mui-active'
})

export default router