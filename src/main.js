import Vue from 'vue'
import VueRouter from 'vue-router'
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header)

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