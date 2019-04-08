import Vue from 'vue'
import VueRouter from 'vue-router'
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/dist/css/mui.min.css'
import './lib/dist/css/icons-extra.css'
import './lib/dist/js/mui.min.js'
import axios from 'axios'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'

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
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        num: 1,
        shoplist: [],
        // carContent: [],
        total: 0,
        routeList: [],
        flag:true
    },
    mutations: {
        addShop (state, record) {
            // state.shoplist.push(record)
            var i = 1;
            state.shoplist = state.shoplist.map( item => {
                // console.log(item, item.id, record.id);
                if(item.id == record.id){
                    item.num = record.num
                } else {
                    i++
                }
                return item
            })
            if(i > state.shoplist.length){
                state.shoplist.unshift(record);
            }
        },
        deleteShop (state, id) {
            state.shoplist = state.shoplist.filter( item => item.id!=id);
        },
        /* confirmNum (state, data) {
            state.carContent = state.carContent.filter( item => {
                return item.id!=data.id
            })
            state.carContent.push(data);
            //console.log(state.carContent);
        }, */
        addOrDes (state, obj) {
            switch (obj.opt) {
                case '-':
                    if(state.num===1){
                        break;
                    }
                    state.num--
                    break;
            
                case '+':
                    if(state.num===obj.max){
                        break;
                    }
                    state.num++
                    break;
                default:
                    break;
            }
        },
        changeNum (state, id) {
            //console.log(state.shoplist);
            state.num = 1;
            state.shoplist.map( item => {
                if(item.id==id){
                    state.num = item.num
                    //console.log(item.id, id, 'true');
                } 
            })
        },
        modify (state, num) {
            state.num = num
        },
        totalMoney (state) {
            const list = state.shoplist;
            state.total = 0;
            if(list.length===0){
                return;
            } else {
                list.map( item => {
                    state.total += (item.num * item.sell)
                })
            }
            //console.log(state.total);
        },
        goback (state) {
            if(state.routeList.length!==0) {
                state.flag = false;
                const routePath = state.routeList.pop();
                //在此，尚且无法访问到this.$router
                //console.log(router, routePath);
                router.push(routePath);
                // state.flag = true
            }
        },
        toggleFlag (state) {
            state.flag = true
        }
    }
})

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
    router,
    store,
    watch: {
        '$route': function (to,from) {
            //console.log(to.path, from.path, this.$store.state.flag);
            /* if(this.$store.state.routeList.length===0){
                this.$store.state.routeList.push(from.path);
            } */
            if(this.$store.state.flag){
                this.$store.state.routeList.push(from.path);
            } else {
                this.$store.commit('toggleFlag')
            }
            //console.log(this.$store.state.routeList);
        }
    },
})