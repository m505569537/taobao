import Vue from 'vue'
import VueRouter from 'vue-router'
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/dist/css/mui.min.css'
import './lib/dist/css/icons-extra.css'
import axios from 'axios'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.axios = axios

import App from './App.vue'
import router from './router'

Vue.use(VueRouter);

var vm = new Vue({
    el: '#app',
    data: {},
    methods: {
        
    },
    render(h) {
        return h(App)
    },
    router
})