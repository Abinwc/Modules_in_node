//Path module 
//File System 

  const path = require("path")
  const fs = require('fs')

 fs.readFile(path.join(__dirname,"test","hello.txt") , "utf8" , (err,data)=>{
     if(err) throw err;
     console.log(data)
 })
