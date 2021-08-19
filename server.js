var http = require('http');
var fs = require('fs');

http.createServer((req,res) => {
    switch(req.url){
        case '/': fs.readFile('./index.html',(err,data) => {
            res.writeHead(200,{'Content-type':'text/html'})
            return res.end(data);
        });
        break;
        default: res.end("404 not found " + req.url);
        break;
        case '/style.css': fs.readFile('./style.css',(err,data) => {
            res.writeHead(200,{'Content-type':'text/css'})
            return res.end(data);
        });
        break;
        case '/script.js': fs.readFile('./script.js',(err,data) => {
            res.writeHead(200,{'Content-type':'text/javascript'})
            return res.end(data);
        });
        break;
        case '/imgs/favico.png': fs.readFile('./imgs/favico.png',(err,data) => {
            res.writeHead(200,{'Content-type':'img/png'})
            return res.end(data);
        });
        break;
        case '/imgs/web.png': fs.readFile('./imgs/web.png',(err,data) => {
            res.writeHead(200,{'Content-type':'img/png'})
            return res.end(data);
        });
        break;
        case '/favico.ico': fs.readFile('./favico.ico',(err,data) => {
            res.writeHead(200,{'Content-type':'img/png'})
            return res.end(data);
        });
    }
    console.log(req.url)
}).listen(9001,()=>console.log('done'))