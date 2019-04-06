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

#  路由导航的方法
1. 注意： 一定要区分 this.$route 和 this.$router 这两个对象
2.  this.$route 是路由的【参数对象】，所有路由中的参数， params, query 都属于它
3.  this.$router 是路由的【导航对象】，用它可以方便的使用JS代码，实现路由的前进，后退，跳转到新的 URL地址
4. 方法：
    + 可以通过router-link 来实现路由跳转
    + 编程式导航

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

### Photos组件的实现

+ 重点实现顶部的左右滑动效果，结合MUI中给出的实例进行相应的修改
> 在使用mui的时候，要引入mui.js文件，因为webpack会将js文件自动打包，利用babel将ES6转换为ES5的严格模式，由于mui.js中使用到了非严格的语法，所以会报错，解决方案，就是在.babelrc中配置  "ignore": ["./src/lib/dist/js/mui.min.js" ],以此来取消严格模式
+ 另外，新一代的浏览器，会使滑动模块的preventDefault不奏效，所以在进行滚动操作的时候会报错，解决方法是：
> 添加css样式 * {touch-action: none}


### 绘制商品列表


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

## 尝试在手机上进行项目的预览和测试
1. 要保证自己的手机可以正常运行
2. 要保证手机和开发项目的电脑处于同一个WIFI环境中，即手机可以访问到电脑的 IP
3. 打开自己的项目中package.json 文件，在 dev脚本中，添加一个 --host 指令，把当前电脑ip 地址设置为--host的指令值
    >   "dev": "webpack-dev-server --open --port 3000 --hot --host 192.168.42.191"  
    这样就可以将项目启动在 192.168.42.191的ip之上，其跳转url为 192.168.42.191:3000/#/home
4. 然后，再在手机上打开浏览器，输入地址url，就可以看到视图效果了