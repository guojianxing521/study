//导入模块
const express = require('express')
//创建服务器
const app = express()
//监听get请求
app.get('/',(req,res)=>{
    res.send('hello');
})
//监听并且启动服务器
app.listen(3000,()=>{
    console.log('服务器已经启动了http://127.0.0.1:3000')

})