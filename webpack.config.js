const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: { 
        rules: [
            { test:/\.css$/, use:['style-loader', 'css-loader'] },
            { test:/\.less$/, use:['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader'] },
            //利用url-loader可以用来处理图片url 和 字体文件
            { test: /\.(jpg|png|gif|jpeg)$/, use: ['url-loader'] },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: ['url-loader'] },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.vue$/, use: ['vue-loader'] }
        ]
    },
    resolve: {
        alias: {  //设置import vue包时的路径
            'vue$': "vue/dist/vue.js"
        }
    }
}
