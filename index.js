const express = require('express');
const bodyParser = require('body-parser');
const app = express();
function isLoggedin() {
  return true
}
app.use(bodyParser.json())

app.use(function(req,res,next) {
  console.log("someone came on server",Date(),req.ip);
  req.color="blue";
next()
})

app.post("/events/:eventName", function(req, res) {
  
  res.json(req.body.address);
});


app.listen(3000);



