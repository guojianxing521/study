
const http = require('http');
const fs = require('fs');
const path = require('path');
var server = http.createServer();

//request事件
server.on('request',(req,res)=>{

  //不需要设置编码
 const method = req.method.toLowerCase();
 const url = req.url;
 //
 if(method==='get'&&url==='/index'){
     //读取文件
   fs.readFile(path.join(__dirname,'/views/index.html'),(err,data)=>{
       if(err) return res.end('404');
       res.end(data);
   })
 }else if(method==='get'&&url==='/about.html'){
     fs.readFile(path.join(__dirname,'/views/about.html'),(err,data)=>{
        if(err) return res.end('404');
        res.end(data);
     })
 }
})

server.listen(3000,()=>{
    console.log('启动了');
})