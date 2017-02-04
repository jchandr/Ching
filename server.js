var express = require('express');
var mongojs = require('mongojs');
var Ching = express();
var categories = mongojs('categories',['categories']);


Ching.use(express.static(__dirname + "/public"));

Ching.use('/controllers',express.static(__dirname + "/controllers"));
Ching.use('/json-data',express.static(__dirname + "/json-data"));

Ching.listen(5000);
console.log("Server running on port 5000");