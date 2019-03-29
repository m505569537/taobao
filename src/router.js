import VueRouter from 'vue-router'

import Home from './js/views/Home.vue'
import Member from './js/views/Member.vue'
import Search from './js/views/Search.vue'
import Shopcar from './js/views/Shopcar.vue'
import NewsList from './js/views/NewsList.vue'
import NewsInfo from './js/views/NewsInfo.vue'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/shopping-car', component: Shopcar },
        { path: '/search', component: Search },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newslist/:id', component: NewsInfo }
    ],
    linkActiveClass: 'mui-active'
})

export default router