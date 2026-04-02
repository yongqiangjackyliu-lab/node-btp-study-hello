const express = require('express');
var app = express();
var defaultport = 3003;
var port = process.env.PORT || defaultport;

app.get('/', function(req, res){
    res.send(process.env.HELLO || "Default");
});

app.listen(port, function(){
    console.log("APP listens on port:" + port);
});