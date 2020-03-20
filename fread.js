const fs = require('fs');


fs.readFile("my/hi.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log("error in reading file")
    }else{
        console.log(data);
        const jsondata = JSON.parse(data);
        console.log(jsondata.name);
    }
})


