const http = require("http");
http
  .createServer((req, res) => {
    if (req.url == "/hello") {
      res.end("Hello world");
    } else {
      res.end("Bye");
    }
  })
  .listen(3000);
