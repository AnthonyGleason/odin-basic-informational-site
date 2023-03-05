const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
  if (req.url==='/'){
    fs.readFile('./index.html',(err,content)=>{
      res.writeHead(200,'Content-type: HTML');
      res.end(content);
    })
  }else if (req.url==='/about'){
    fs.readFile('./about.html',(err,content)=>{
      res.writeHead(200,'Content-type: HTML');
      res.end(content);
    })
  }else if (req.url==='/contact'){
    fs.readFile('./contact-me.html',(err,content)=>{
      res.writeHead(200,'Content-type: HTML');
      res.end(content);
    })
  }else{
    fs.readFile('./404.html',(err,content)=>{
      res.writeHead(200,'Content-type: HTML');
      res.end(content);
    })
  }
});
const PORT=5000;
server.listen(PORT);