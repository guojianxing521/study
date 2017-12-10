
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
 if(method==='get'&&url==='/a/b/index'){
    readHtmlFile(res,'/views/index.html');
 }else if(method==='get'&&url==='/about.html'){
    readHtmlFile(res,'/views/about.html');
    
 }else if(method==='get'&&url==='css'){
    readHtmlFile(res,'/assets/css/index.css');
    
 }else if(method==='get'&&url==='/js'){
    readHtmlFile(res,'/assets/js/index.js');
    
 }else if(method==='get'&&url==='/image'){
    readHtmlFile(res,'/assets/image/5.jpg');
    
 }
})

server.listen(3000,()=>{
    console.log('启动了');
})

function readHtmlFile(res,url){
    fs.readFile(path.join(__dirname,url),(err,data)=>{
        if(err) return res.end('404');
        res.end(data);
     })
}