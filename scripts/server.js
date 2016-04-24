var express = require('express');
var http = require("http");
var path = require("path");

var app = express();

app.use("/", express.static(__dirname + "/../src"));

app.listen(8080);

console.log("Server is running on localhost:8080")
