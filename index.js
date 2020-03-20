const express = require('express');
const bodyParser = require('body-parser');
const math = require('./math');
const routes = require('./routes');
const events = require('./events');
const candidates = require('./candidates/routes');
const app = express();



app.use(bodyParser.json())

app.use(function(req,res,next) {
  console.log("someone came on server");
next()
})

app.get("/calculator", function(req, res) {
  const op = req.query.op;
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  let result = 0;
  switch (op) {
    case "add":
      result = math.addition(a,b);
      break;
    case "sub":
      result = math.sub(a, b);
      break;
    case "mul":
      result = math.mul(a, b);
      break;
    case "div":
      result = math.div(a, b);
      break;
    default:
      break;
  }
  let resp = {
    result: result,
    operation: op
  };
  res.json(resp);
});



app.use("/my", routes);
app.use("/events", events);
app.use("/candidates", candidates);


app.listen(3000);



