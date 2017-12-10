const express = require('express')

const router = express.Router()
//准备数据
const person = {
    name: '俊哥',
 }
 const guo = {
    name: 'guo',
 }
 const guoguo = {
    name: 'guoguo',
 }
 //
router.get('/', function(req, res) {
    res.render('index.ejs', person);
});
//
router.get('/guo', function(req, res) {
    res.render('guo.ejs', guo);
});
router.get('/guoguo', function(req, res) {
    res.render('guoguo', guoguo);
});

//暴露出去
module.exports=router;