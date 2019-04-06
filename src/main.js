import Vue from 'vue'
import VueRouter from 'vue-router'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/dist/css/mui.min.css'
import './lib/dist/css/icons-extra.css'
import './lib/dist/js/mui.min.js'
import axios from 'axios'
import VuePreview from 'vue-preview'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
//启用axios
Vue.prototype.axios = axios
//配置axios请求的固定域名前缀
axios.defaults.baseURL = "http://www.liulongbin.top:3005/api";

import App from './App.vue'
import router from './router'

Vue.use(VueRouter);
Vue.use(VuePreview)

Vue.filter("dateFormat", function (date) {
    if(date){
        return date.substring(0,10)
    } else {
        return;
    }
})

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