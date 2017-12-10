//
const express = require('express');

const app = express();

//托管静态文件
//托管文件不能出现托管文件名http://127.0.0.1:3000/index.html
//在多次调用 express.static 的时候，如果文件名称有重复的，则以先注册的中间件为主！
//注意托管顺序，现在找的是assets中的index.html
app.use(express.static('./assets'))
// app.use(express.static('./views'))
// 如果在 托管静态资源的时候，直接使用了 app.use(express.static('./assets')) 方式，则 ，访问 assets 目录下资源的时候，路径中，不能出现 /assets;
// 但是，我们为了能有路径的智能提示，推荐大家，在 第一个参数的位置，手动挂载一个 路径标识符，这就表示，将来托管的静态资源文件，在访问的时候，路径中，必须要包含我们为其挂载的 哪个 路径标识符
//http://127.0.0.1:3000/views/about.html
app.use('/views',express.static(__dirname +'/views'))
app.listen(3000,()=>{
    console.log('启动了');
})