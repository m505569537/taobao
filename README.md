## 首页内容构建

1. Header元素使用mint-ui来实现顶部元素
2. Footer元素使用MUI来实现固定底部tabbar
    + MUI自带图标包，包括mui-icon和mui-icon-extra
    + 在引入类名的时候，要记得同时引入样式
3. Content元素使用.vue组件来实现

## 路由实现单页面app
1. 下载vue-router包
    > npm i vue-router --save
2. 将footer元素转换为路由链接，用router-link替代 a标签
3. 完成路由组件的编写，并导入到router文件中
4. 通过渲染，放入页面，实现路由
> 通过将router的linkActiveClass属性修改为'mui-active',实现路由链接激活状态的切换

## 组件的实现

### Home组件的实现
1. 轮播图的实现
    + 可以利用第三方的插件来实现，例如 Bootstrap 或者 Mint-UI 来实现，这里选择Mint-UI
    + 轮播图相关代码直接复制粘贴即可
    + 轮播图相关资源的获取有几个重点
        1. 如果使用vue-resource来获取资源，则除了引入包之外，还需要使用 
            > Vue.use(VueResource)
        来注册使用
        2. 如果使用axios来获取资源，因为axios并非基于vue封装的，所以需要采用另一种方式，即 
            > Vue.prototype.axios = axios然后使用时，为   
            > this.axios.get(url).then().catch()
        3. vue中的变量，除了使用 {{msg}}外， 需要使用数据绑定的形式，即v-bind

2. 六宫格的实现



## 组件之间的切换过程
+ 利用transition 标签包裹 router-view ， 同时为enter和leave添加样式
    ```
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
    ```