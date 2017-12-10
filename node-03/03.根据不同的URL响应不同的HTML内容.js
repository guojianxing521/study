//引入核心文件
const http = require('http');

//创建服务器
const server = http.createServer();
//request事件
server.on('request',(req,res)=>{
    //状态码200，成功的时候
    res.writeHeader(200,{
   "content-Type" : "text/html;charset = utf-8;"
    })
    // res.end('哈哈');
    //拿到每次用户请求的URL地址
    const url = req.url;
    //拿到用户请求的方式
    const method = req.method.toLowerCase();
    //判断
    if(method==='get'&&url==='/.index.html'){
        res.end('首页')
    } else if (method === 'get' && url === '/movie.html') { // 请求 /movie.html  返回电影
        res.end('<h3>电影</h3>')
    } else if (method === 'get' && url === '/about.html') { // 请求 /about.html  返回关于
    res.end('<h3>关于</h3>')
    } else if (method === 'post' && url === '/api/postinfo') { // 这个处理 post 请求
    res.end('您发送的是Post请求的沙发斯蒂芬')
    } else {
    res.end('<h3>404. 报告队长，您访问的页面，炸了...</h3>')
    }


})

//启动服务器,监听3000端口
server.listen(3000,()=>{
    console.log('启动了');
})