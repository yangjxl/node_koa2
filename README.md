# node_koa2
搭建了一个基于nodejs的koa2框架
##  整体框架
* node_koa2
  * bin
  * logs  日志文件夹</br>
  * node_modules  主要放置jar的文件夹 相当于lib</br>
  * public   静态资源文件夹（js、css、img…）</br>
    * css css文件夹</br>
    * fonts  字体文件夹</br>
    * img   图片文件夹</br>
    * js   js文件夹</br>
  * src
    * config  配置不同环境的文件夹</br>
      * index.js 主要配置文件
      * development.js 开发环境下的端口配置
    * controller 主要逻辑实现文件夹</br>
    * middleware 中间件</br>
    * router 配置路由</br>
    * util 工具类</br>
    * views 静态页面</br>
  * .babelrc
  * .eslintrc 设置Eslintrc相关配置</br>
  * .app.js 整个项目的配置文件</br>
  * index.js
  * package.json 引入相关文件版本号，整个项目的主入口 </br>

### 安装包
   
安装包之前需要先安装nodejs

在clone的项目根目录直接
npm install

### 启动

1) linux 或者 mac 环境
npm start
2） windows
set NODE_ENV=“development”
npm start
