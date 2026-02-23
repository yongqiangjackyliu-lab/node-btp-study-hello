//console.log("Hello Node Study!");
/*
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello BTP Ready Node");
});

server.listen(3002);
*/
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.end("Hello BTP Ready Node");
});

const port = process.env.PORT || 3002;
server.listen(port, () => {
  console.log("Server started on port " + port);
});