import VueRouter from 'vue-router'

import Home from './js/views/Home.vue'
import Member from './js/views/Member.vue'
import Search from './js/views/Search.vue'
import Shopcar from './js/views/Shopcar.vue'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/shopping-car', component: Shopcar },
        { path: '/search', component: Search }
    ],
    linkActiveClass: 'mui-active'
})

export default router