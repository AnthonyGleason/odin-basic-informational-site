const express = require("express");
const app = express();
const fs = require('fs');
const port = 3000;

app.get("/", (req,res)=>{
  fs.readFile('./index.html',(err,content)=>{
    res.writeHead(200,'Content-type: HTML');
    res.end(content);
  })
});
app.get("/about", (req,res)=>{
  fs.readFile('./about.html',(err,content)=>{
    res.writeHead(200,'Content-type: HTML');
    res.end(content);
  })
});
app.get("/contact", (req,res)=>{
  fs.readFile('./contact-me.html',(err,content)=>{
    res.writeHead(200,'Content-type: HTML');
    res.end(content);
  })
});
app.get("*", (req,res)=>{
  fs.readFile('./404.html',(err,content)=>{
    res.writeHead(200,'Content-type: HTML');
    res.end(content);
  })
});
app.listen(port,()=>{
  console.log(`app running on port ${port}`);
})