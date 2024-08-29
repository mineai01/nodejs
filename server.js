const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/home") {
    res.end("Hello Home");
  } else if (req.url == "/product") {
    fs.readFile("./product.txt", "utf-8", (err, data) => {
      let product = JSON.parse(data);
      console.log(product);
      res.write(JSON.stringify(product));
      res.end();
    });
  } else if (req.url == "/payment") {
    res.end("Hello Payment");
  }
});

server.listen(8080, () => {
  console.log("server is running on port 8080");
});
