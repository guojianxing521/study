//这里是项目的入口文件
//创建一个Node服务器
const express = require('express');
//创建服务器
const app = express();

//在实现注册页面时
// 配置 body-parser 来解析表单数据
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


//在实现登陆页面时，为了解决保存用户记录的功能，注册一个中间件
// 导入并注册 express-session 中间件
const session = require('express-session')
app.use(session({
  secret: 'iuiouyyefefsdfsdwe097&^*(((', // 表示 用来对 SessionId 加密的 字符串，这个字符串，大家任意写
  resave: false, // 如果为 true ， 表示强制把 Session 存储到 物理磁盘上，从而保证Session不会丢失
  saveUninitialized: false // 如果为 true，表示 强制没有“初始化”的session 保存到storage中
}))
// 当使用如上的步骤，配置完毕Session中间件之后，今后，只要你能够访问到 req, 那么，就能够访问到 req.session 这个对象；


//注册页面之前导入解析数据的模块
//第一步呈现页面
//导入自己的路由模块
const router = require('./router.js');
//注册
app.use(router)
//托管静态资源
app.use('/node_modules',express.static('./node_modules'))
//配置ejs模板，因为要渲染页面
app.set('view engine','ejs')
app.set('views','./views')






//监听端口并启动服务器
app.listen(4000,()=>{
  console.log('启动了');
})