
//导入模块
const express = require('express');
const path = require('path')
//创建服务器
const app = express();
//准备数据
const person = {
    name: '俊哥',
    nickname: '高婆婆',
    age: '26',
    gender: '妖人',
    hobby: ['吃饭', '睡觉', '瞎BB']
  }
//模板,我们要给express配置合适的模板引擎
// npm i ejs -S
//http://www.jianshu.com/p/02415dcd6145
// 3. 配置模板页面的存放路径
app.set('views',path.join(__dirname , 'views') );
//设置默认的模板引擎
app.engine('.html', require('ejs').__express);  
app.set('view engine', 'html'); 

//
app.get('/', function(req, res) {
    res.render('index', person);
});
// app.get('/guo', function(req, res) {
//     res.render('guo', person);
// });
//监听 开启服务器
//使用 res.render 函数来渲染动态页面
app.listen(3000,()=>{
    console.log('启动了');
})