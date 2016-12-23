//引入path内置模块
var path = require('path');
//引入express依赖模块，用来启动静态服务器
var express = require('express');
//引入转发请求插件
//var proxy = require('http-proxy-middleware')

//实例express
var app = express();

var sha1 = require("sha1");
 app.use('/weixin', function(req, res){
    //获取get传递数据
    var obj = req.query;
    console.log("weixin", obj);
    //将数据添加到一个数组
    var arr = ["littlestar", obj.timestamp, obj.nonce];
    //排序
    arr.sort();

    //拼接字符串，并进行 sha1 加密
    var str = sha1(arr.join(""));
    console.log('sha1   ', str);

    console.log('signature', obj.signature === str)
    //匹配是否是微信请求
    if( obj.signature === str){
        //成功返回 echostr 随机字符串
        res.send(obj.echostr).end();
    }else{
        res.send("验证失败").end();
    }
});
//定义通过 /api 访问的请求，转发到指定路径
//app.use('/api', proxy({
//  target: 'http://122.10.30.153:9901',
//  pathRewrite: {
//      '^/api': '/'
//  }
//}));
//   http://127.0.0.1:9888/api/index
// 替换为  http://122.10.30.153:9901/index

console.log(__dirname);
console.log(__filename);
//拼接物理路径，用来指定虚拟路径的访问
var viewsPath = path.join(__dirname,'views');

console.log(viewsPath);
//指定访问页面的路径
app.use('/',express.static(viewsPath));

//拼接物理路径，用来指定虚拟路径的访问（静态资源文件）
var publicPath = path.join(__dirname,'public');

//指定访问静态资源文件的路径
app.use('/public',express.static(publicPath));

//监听端口9999，用来启动服务
app.listen(16902,function(){
	console.log('server run at port 16902')
});

//模块导出
module.exports = app;