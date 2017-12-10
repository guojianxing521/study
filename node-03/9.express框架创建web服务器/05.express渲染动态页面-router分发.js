
//导入模块
const express = require('express');
const path = require('path')
//创建服务器
const app = express();

//模板,我们要给express配置合适的模板引擎
// npm i ejs -S
//http://www.jianshu.com/p/02415dcd6145
// 3. 配置模板页面的存放路径
app.set('views',path.join(__dirname , 'views') );
//设置默认的模板引擎
app.engine('.ejs', require('ejs').__express);  
app.set('view engine', 'ejs'); 

//=====================

//导入自己的路由模块
const router = require('./5.1.router.js')
// 将路由对象，注册到 app 服务器上，这样每当有请求过来，就可以调用路由模块，来分发处理请求了
app.use(router)

//========================

//监听 开启服务器
//使用 res.render 函数来渲染动态页面
app.listen(3000,()=>{
    console.log('启动了');
})