const fs = require('fs');
const a = {
    name:"yogesh",
    age:21,
    state:"delhi"
} 
fs.writeFile("my/hi.txt",JSON.stringify(a),(err)=>{
    if(!err){
    console.log("done");
    }
    else{
        console.log(err);
    }
})

fs.writeFile("my/test.txt", "more info\n",{flag:"a"}, err => {
  if (!err) {
    console.log("done");
  } else {
    console.log(err);
  }
});