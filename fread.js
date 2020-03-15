const fs = require('fs');


fs.readFile("my/hi.txt",{encoding:"utf-8"},(err,data)=>{
    console.log(data);
    const jsondata = JSON.parse(data)
    console.log(jsondata.name)
})