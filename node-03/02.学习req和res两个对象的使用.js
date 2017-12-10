const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{


// 需求： 每当有客户端来请求服务器了，我们服务器，
//直接 把  请求的 类型 和 请求的URL地址，拼接成字符串，
//返回给 客户端显示；
//解决乱码
res.writeHeader(200,{
    "content-Type":'text/html;charset=utf-8;'
})
console.log(req.method);
console.log(req.url)        
res.end('结束');
})
//设置端口并且启动服务
server.listen(3000,function(){
    console.log('服务器已经启动了');
})