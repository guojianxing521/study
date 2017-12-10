//导入核心模块
const http = require('http');
//创建服务器
const server = http.createServer();
//request事件触发，每当服务器接收到客户端的请求就触发
server.on('request',function(req,res){
    console.log('ok');
    res.end('hello');
   
})
//启动服务器 
server.listen(3000,function(){
    console.log('通知大家，服务器已经启动了');
})
//重点：修改内容后一定要重启服务器
//重点，每个请求都要
//重点看自己写的第五个index，标识符不一样
// 问题1：为什么事件request中打印两次？
// 问题二：为什么/favicon.ico
//问题三：图片路径问题？