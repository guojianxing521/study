//路由模块
const express = require('express');

const router = express.Router();
//导入数据库模块
const conn = require('./model.js');


//首页
router.get('/',(req,res)=>{
  //渲染首页

  res.render('index',{
    islogin:req.session.islogin,
    user:req.session.user
  })
})




router.get('/register',(req,res)=>{
  //渲染注册页面
  //实现注册页面的业务逻辑
 
  res.render('./user/register.ejs',{
 
  })
})
//同一个地址为POST请求时，postman
router.post('/register',(req,res)=>{
   //第一步，导入 body-parser 来解析表单数据
   //数据放在了req的body属性上面了
    console.log(req.body);
    if (req.body.username.length <= 0 || req.body.password.length <= 0 || req.body.nickname.length <= 0) {
      // 注册失败，表单数据不完整
      return res.json({ err_code: 1, message: '注册失败，请填写完整的表单数据1！' })
    }
    //到这里需要与有一个连接数据库的文件
    conn.query('select count(*) as count from users2 where username=?',req.body.username,(err,result)=>{
     //如果查询失败
     console.log(result);
      if(err) return res.json({err_code:1,message:'注册失败，请填写完整的表单数据2！'})
    //查询成功，检查用户名是否被占用
      if(result[0].count!==0) return res.json({ err_code: 1, message: '此用户名被占用，请更换其它用户名后重试！' })

      //没有被占用，添加用户
      conn.query('insert into users2 set?',req.body,(err,result)=>{
        if(err) return res.json({ err_code: 1, message: '注册用户失败！' })
        //判断受影响行数
       
          if(result.affectedRows!==1) return res.json({err_code: 1, message: '注册用户失败！' })
          //注册成功
          res.json({ err_code: 0, message: '注册用户成功！' })
          
      })

    
      })
 
 
})
//结束之后去注册页面发送请求


// 渲染登录页面
router.get('/login', (req, res) => {
  res.render('./user/login.ejs', {})
})
//登陆模块
router.post('/login',(req,res)=>{
  //获取用户提交过来的表单数据
  const user = req.body;
  // console.log(user);
  const sqlStr = 'select * from users2 where username=? and password=?'
 //查询数据库
 conn.query(sqlStr,[user.username, user.password],(err,result)=>{
  if(err) return res.json({err_code:1,message:'登陆失败'})
  //判断查询结果的长度
  if(result.length!==1) return res.json({err_code:1,message:'登陆失败2'})
  //保存此次登陆成功的记录
  // console.log(req.session);
  //Session {
  // cookie:
  // { path: '/',
  //   _expires: null,
  //   originalMaxAge: null,
  //   httpOnly: true } }
  //保存登陆成功的状态
  req.session.islogin = true;
  //保存登陆人的信息
  req.session.user = result[0];
  //把他们放在渲染首页的数据里面，传过去，用于判断是否是登陆成功的页面，上面


  //登陆成功
  // console.log(req.session);
  // Session {
  //   cookie:
  //    { path: '/',
  //      _expires: null,
  //      originalMaxAge: null,
  //      httpOnly: true },
  //   islogin: true,
  //   user: RowDataPacket { id: 1, username: 'guo', password: '111', nickname: 'mm' } }
  console.log(result);
  res.json({err_code:0,message:'登陆成功'})
 
 
  })

  })




//把router暴露出去
module.exports=router;