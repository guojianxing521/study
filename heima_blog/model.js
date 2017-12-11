const mysql = require('mysql');
const conn = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'123456',
  database:'heima'
})


//暴露出去
module.exports = conn;