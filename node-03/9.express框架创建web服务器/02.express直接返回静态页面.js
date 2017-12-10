const express = require('express')
const path = require('path')
const fs = require('fs')


const app = express()

app.get('/a',(req,res)=>{
    //直接读取文件内容并且返回
    res.sendFile(path.join(__dirname,'views/index.html'));
})
app.get('/css',(req,res)=>{
    //直接读取文件内容并且返回
    res.sendFile(path.join(__dirname,'/assets/css/1.css'));
})
app.listen(3000,()=>{
    console.log('服务器已经启动了')
})