//第一步：导入服务器模块
const http = require('http');
const path = require('path');
const fs = require('fs');

//引入模板
const template = require('art-template');
//第二步:创建服务器
const server = http.createServer();

//request事件
server.on('request',(req,res)=>{

//要动态创建的数据
const person = {
    name:'guo',
    age:'22',
    hobby:['睡觉','吃饭']
}
//在Node 服务器端，template 函数的第一个参数，不再是 Id 了，而是一个 模板页面的绝对路径
  //  第二个参数，还是要渲染的数据
  const htmlStr = template(path.join(__dirname,'./views/tmpl.html'),person)

  res.end(htmlStr);                                                       

})

//监听端口 启动服务器
server.listen(3000,()=>{
    console.log('服务器已经启动了');
})