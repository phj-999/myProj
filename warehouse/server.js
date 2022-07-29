var http = require("http");
var url = require("url");
var fs = require("fs");
// 创建本地服务器
var server = http.createServer()

server.on("request",function(req,res){ 
    var urlObj = url.parse(req.url); //解析pathName："/index.html"
    var dir = __dirname; //获取当前文件夹的路径
    var pathName = urlObj.pathname;
    console.log(pathName,'pathName');
    //var type = pathName.substr(pathName.lastIndexOf(".")+1); //获取文件后缀，如html，css，js
    //console.log('type',type);
    var filePath =dir+'/'+pathName ;//拼接文件名
    console.log(filePath,'fp');
    filePath = filePath.replace(/\//g,'\\');//由于是查找本地文件，所以要把/替换成\，如d:\...

    fs.readFile(filePath,function(err,data){ //读取文件内容
        console.log("Error:"+err);//如果文件存在，err==null
        if(err){
            res.writeHead(404,{
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end();//取消等待状态
        }else{
            res.writeHead(200,{
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end(data);//如果文件存在，就把文件读取的内容返回给客户机的浏览器
        }
    })
})

server.listen(3000,"localhost",()=>{
    console.log(`启动http://localhost:3000/index.html`)
}); //监听