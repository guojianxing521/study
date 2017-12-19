const http = require('http');

const server = http.createServer();

const urlModule = require('url');

server.on('request',function(req,res){

//  const url = req.url;
//  const urldata = urlModule.parse(req.url)
//  console.log(urldata)
 const {pathname:url,query} = urlModule.parse(req.url,true)
//  console.log(typeof(urlModule.parse(req.url)))
console.log(query)
const person = {
  name:'za',
  age:19
}
if(url=='/getData'){
    const str = `${query.callback}(${JSON.stringify(person)})`
    res.end(str)
}else{
  res.end('404')
}
})

server.listen(3000,()=>{
  console.log('启动了')
})